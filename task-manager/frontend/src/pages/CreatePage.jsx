import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "react-hot-toast";

import api from "../lib/axios";
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All Fields are Required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Notes Created Succesfully");
      Navigate("/");
    } catch (error) {
      console.log(error);

      toast.error("Error Occured on Creating Notes");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl  mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <input
                    className="textarea textarea-bordered h-32"
                    type="text"
                    placeholder="Write your notes here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="justify-end  card-actions">
                  <button
                    disabled={loading}
                    className="btn btn-primary"
                    type="submit"
                  >
                    {loading ? "Creating Notes" : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
