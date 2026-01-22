import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      console.log(products);
    }
    fetchProducts();
  }, []);

  function hanldeAdd() {
    setCart((prev) => prev + 1);
  }

  return (
    <>
      <nav className="bg-green-100 flex justify-between px-10 py-4">
        <div>logo</div>
        <div>
          cart:{cart} <span>{price}</span>
        </div>
      </nav>

      <div className="flex flex-wrap px-10 gap-5">
        {products.map((p) => (
          <div>
            <div className="bg-red-100 p-10">
              <img className="w-44" src={p.thumbnail} alt="" />
              <h1 className="text-center text-sm">{p.title}</h1>
              <p>{p.price}</p>
            </div>
            <div>
              <button
                onClick={hanldeAdd}
                className="mt-2 px-5 bg-blue-500 text-white uppercase"
              >
                add
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
