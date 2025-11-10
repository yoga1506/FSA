import React, { useEffect, useState } from "react";
function Loader() {
  return <div>Loading....</div>;
}
const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  const numPages = Math.ceil(products.length / productsPerPage);

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  console.log(start, end);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log("Error while fetching API:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleSub() {
    setCurrentPage((prev) => prev - 1);
  }
  function handleAdd() {
    if (currentPage === numPages - 1) return null;
    setCurrentPage((prev) => prev + 1);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1>Products</h1>
        <div className="flex flex-wrap justify-center">
          <button
            disabled={currentPage === 1}
            onClick={handleSub}
            className="bg-red-500 p-2 cursor-pointer text-white"
          >
            &larr;
          </button>
          {Array.from({ length: numPages }, (_, index) => {
            return (
              <button
                onClick={() => setCurrentPage(index + 1)}
                key={index}
                className={`bg-blue p-2 gap-2 bg-blue-500 text-white m-2 cursor-pointer ${
                  currentPage === index ? "bg-blue-900" : ""
                }`}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            disabled={currentPage === numPages}
            onClick={handleAdd}
            className="bg-red-500  p-2 cursor-pointer text-white"
          >
            &rarr;
          </button>
        </div>
      </div>
      {
        <div className="flex flex-wrap gap-4 justify-center px-10">
          {products.slice(start, end).map((p) => (
            <div
              key={p.id}
              className="border w-44 h-60 flex flex-col items-center justify-center shadow-md"
            >
              <img
                className="w-36 h-36 object-cover"
                src={p.thumbnail}
                alt={p.title}
              />
              <h1 className="text-center mt-2 font-semibold">{p.title}</h1>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default App;
