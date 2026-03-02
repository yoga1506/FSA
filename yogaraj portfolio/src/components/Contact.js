import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, submitForm, selectContact } from "../store/contactSlice";

export default function Contact() {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  const handleChange = (e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (contact.name && contact.email && contact.message) {
      dispatch(submitForm());
      alert("Message sent!");
    }
  };

  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 text-gray-700"
      >
        <div>
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}
