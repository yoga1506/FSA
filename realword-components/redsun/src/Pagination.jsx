import React, { useEffect, useState } from "react";

// pagination with search products

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 12;

  // ✅ Fetch products (normal or search)
  const fetchProducts = async (pageNum = 1, query = "") => {
    try {
      const skip = (pageNum - 1) * limit;
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.products || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // ✅ Run when page or query changes
  useEffect(() => {
    fetchProducts(page, searchQuery);
  }, [page, searchQuery]);

  const totalPages = Math.ceil(total / limit);

  const handleSearch = () => {
    setPage(1);
    fetchProducts(1, searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setPage(1);
    fetchProducts(1);
  };

  return (
    <div className="h-screen" style={{ padding: "20px" }}>
      <h1 className="text-center font-bold text-xl uppercase">Products</h1>

      {/* 🔍 Search bar */}
      <div className="flex justify-center items-center py-4 gap-2">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="border px-6 py-2 outline-none w-1/3"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Search
        </button>
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="bg-gray-300 text-black px-5 py-2 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {/* 🛍️ Product list */}
      <ul className="grid grid-cols-4 gap-4 mt-5 px-10">
        {products.length > 0 ? (
          products.map((p) => (
            <li
              key={p.id}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <img src={p.thumbnail} alt={p.title} className="w-full rounded" />
              <p className="text-center font-semibold mt-2">{p.title}</p>
            </li>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found.
          </p>
        )}
      </ul>

      {/* 🔢 Pagination */}
      {products.length > 0 && (
        <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
          <button
            className="bg-gray-400 text-white p-2 rounded-sm px-8 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`p-2 rounded ${
                page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="bg-gray-400 text-white p-2 rounded-sm px-8 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
