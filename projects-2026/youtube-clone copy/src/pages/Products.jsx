import React, { useState } from "react";
import products from "../../data";

const Service = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter by category and search
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      {/* Search */}
      {/* <div className="flex justify-center gap-2 mt-5">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div> */}

      {/* Main Layout */}
      <div className="flex gap-8 mt-8 px-16">
        {/* Sidebar */}
        <aside className="w-56 border rounded-lg p-4 h-fit">
          <h2 className="text-xl font-bold mb-4">Categories</h2>

          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left px-3 py-2 rounded ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div className="border p-4 rounded-lg" key={product.id}>
              <img
                className="w-full h-56 object-cover rounded-lg"
                src={product.image}
                alt={product.name}
              />

              <h1 className="text-xl font-semibold py-1">{product.name}</h1>

              <p className="mt-2">{product.description}</p>

              <div className="flex justify-between py-2 font-bold">
                <h3>
                  {product.currency} {product.price}
                </h3>

                <h3>{product.category}</h3>
              </div>

              <button className="bg-red-500 text-white px-3 py-2 rounded">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
