import React, { useMemo, useState } from "react";
import { GiWheat, GiFruitBowl, GiAlmond } from "react-icons/gi";

export default function RedsunEximSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    message: "",
    product: "",
  });
  const [sent, setSent] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("name-asc");

  const placeholder =
    `data:image/svg+xml;utf8,` +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='28'>Image not available</text></svg>`
    );

  const products = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      category: "Rice",
      price: 850,
      unit: "$/100kg",
      img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
      desc: "Aromatic long-grain basmati rice sourced from trusted farms.",
    },
    {
      id: 2,
      name: "Sona Masuri Rice",
      category: "Rice",
      price: 240,
      unit: "$/50kg",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947",
      desc: "Non-sticky medium-grain rice — ideal for bulk orders.",
    },
    {
      id: 3,
      name: "Brown Rice (Whole Grain)",
      category: "Rice",
      price: 420,
      unit: "$/50kg",
      img: "https://images.unsplash.com/photo-1604908177522-0b1d3b9cfb2a",
      desc: "Nutty flavour, high in fiber — great for health markets.",
    },
    {
      id: 4,
      name: "Mango (Seasonal)",
      category: "Fruits",
      price: 120,
      unit: "$/box",
      img: "https://images.unsplash.com/photo-1574226516831-e1dff420e9a8",
      desc: "Fresh, hand-picked mangoes with export-grade packing.",
    },
    {
      id: 5,
      name: "Apple (Red Delicious)",
      category: "Fruits",
      price: 60,
      unit: "$/box",
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      desc: "Crisp export-grade apples sorted for shipping.",
    },
    {
      id: 6,
      name: "Orange (Valencia)",
      category: "Fruits",
      price: 50,
      unit: "$/box",
      img: "https://images.unsplash.com/photo-1547514701-8e5d9c1b3b3a",
      desc: "Juicy oranges suitable for fresh markets and processing.",
    },
    {
      id: 7,
      name: "Cashew Nuts (Raw)",
      category: "Nuts",
      price: 1200,
      unit: "$/100kg",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      desc: "Premium raw cashew kernels graded for international markets.",
    },
    {
      id: 8,
      name: "Almonds (Shelled)",
      category: "Nuts",
      price: 980,
      unit: "$/100kg",
      img: "https://images.unsplash.com/photo-1589916253236-bb9b15d7f2c8",
      desc: "High-quality shelled almonds, sorted and graded for export.",
    },
    {
      id: 9,
      name: "Pistachios (Roasted)",
      category: "Nuts",
      price: 1400,
      unit: "$/100kg",
      img: "https://images.unsplash.com/photo-1589877135979-1fb4a4d3e8d8",
      desc: "Lightly roasted pistachios, packed for retail and bulk buyers.",
    },
  ];

  const filteredSortedProducts = useMemo(() => {
    let list = products.filter(
      (p) => categoryFilter === "All" || p.category === categoryFilter
    );
    if (sortOrder.includes("name")) {
      list.sort((a, b) =>
        sortOrder === "name-asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (sortOrder.includes("price")) {
      list.sort((a, b) =>
        sortOrder === "price-asc" ? a.price - b.price : b.price - a.price
      );
    }
    return list;
  }, [categoryFilter, sortOrder]);

  const handleImgError = (e) => (e.target.src = placeholder);
  const handleChange = (e) =>
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${inquiry.name || "customer"}! Your message has been sent.`
    );
    setSent(true);
    setInquiry({ name: "", email: "", message: "", product: "" });
    setTimeout(() => setSent(false), 3000);
  };
  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                <GiWheat />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                <GiFruitBowl />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-red-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                <GiAlmond />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Redsun Exim</h1>
              <p className="text-xs text-slate-500 -mt-1">
                Global Import & Export — Rice · Fruits · Nuts
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-amber-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-amber-600"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-amber-600"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-block px-4 py-2 bg-amber-500 text-white rounded-md text-sm"
            >
              Get in touch
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-start px-6 py-4 gap-3">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left w-full hover:text-amber-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left w-full hover:text-amber-600"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left w-full hover:text-amber-600"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      <section
        id="hero"
        className="bg-gradient-to-r from-amber-50 via-white to-yellow-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Reliable international trade of rice, fruits & nuts
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Redsun Exim connects growers and producers to global markets with
              trusted logistics, quality assurance and export-grade packaging.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="px-5 py-3 bg-amber-600 text-white rounded-md shadow"
              >
                Our products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-3 border border-amber-600 text-amber-600 rounded-md"
              >
                Request quote
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1528825871115-3581a5387919"
              alt="produce"
              onError={handleImgError}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Products we deal</h3>
            <div className="flex items-center gap-3">
              {["All", "Rice", "Fruits", "Nuts"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategoryFilter(c)}
                  className={`px-3 py-2 rounded-md text-sm border ${
                    categoryFilter === c
                      ? "bg-amber-600 text-white border-amber-600"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {c}
                </button>
              ))}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="ml-3 border rounded-md px-3 py-2 text-sm"
              >
                <option value="name-asc">Name — A to Z</option>
                <option value="name-desc">Name — Z to A</option>
                <option value="price-asc">Price — Low to High</option>
                <option value="price-desc">Price — High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSortedProducts.map((p) => (
              <article
                key={p.id}
                className="bg-slate-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={`${p.img}?q=80&w=1400&auto=format&fit=crop&crop=entropy`}
                  onError={handleImgError}
                  alt={p.name}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{p.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {p.category}
                      </p>
                    </div>
                    <div className="text-right text-sm text-slate-700">
                      {p.price} {p.unit}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                  <button
                    onClick={() => {
                      setInquiry({ ...inquiry, product: p.name });
                      scrollToSection("contact");
                    }}
                    className="mt-4 px-3 py-2 bg-amber-600 text-white rounded-md text-sm"
                  >
                    Enquire
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-4">Send an Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={inquiry.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
            <input
              type="email"
              name="email"
              value={inquiry.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
            <input
              name="product"
              value={inquiry.product}
              onChange={handleChange}
              placeholder="Product (optional)"
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
            <textarea
              name="message"
              value={inquiry.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 text-white rounded-md"
            >
              Send message
            </button>
            {sent && (
              <p className="text-emerald-600 text-sm mt-2">
                Your message was sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 text-white text-center py-4">
        <p>© {new Date().getFullYear()} Redsun Exim — All rights reserved</p>
      </footer>
    </div>
  );
}
