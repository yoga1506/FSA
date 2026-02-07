// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState(0);
//   const [price, setPrice] = useState(0);
//   useEffect(() => {
//     async function fetchProducts() {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       setProducts(data.products);
//       console.log(products);
//     }
//     fetchProducts();
//   }, []);

//   function hanldeAdd() {
//     setCart((prev) => prev + 1);
//   }

//   return (
//     <>
//       <nav className="bg-green-100 flex justify-between px-10 py-4">
//         <div>logo</div>
//         <div>
//           cart:{cart} <span>{price}</span>
//         </div>
//       </nav>

//       <div className="flex flex-wrap px-10 gap-5">
//         {products.map((p) => (
//           <div>
//             <div className="bg-red-100 p-10">
//               <img className="w-44" src={p.thumbnail} alt="" />
//               <h1 className="text-center text-sm">{p.title}</h1>
//               <p>{p.price}</p>
//             </div>
//             <div>
//               <button
//                 onClick={hanldeAdd}
//                 className="mt-2 px-5 bg-blue-500 text-white uppercase"
//               >
//                 add
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./cartSlice";

const App = () => {
  const [products, setProducts] = useState([]);

  const cartValue = useSelector((s) => s.cart.cart);
  const cartPrice = useSelector((s) => s.cart.price);

  const dispatch = useDispatch();

  const fetchProducts = async function () {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleAdd() {
    dispatch(addCart());
  }

  return (
    <>
      <div>
        <h1>hello ecommerce {cartValue} </h1>
        <p>Price :{cartPrice} </p>
      </div>

      <div className="py-16">
        {products.map((p) => (
          <div className="grid grid-col-3">
            <li key={p.id}>
              <h1>{p.title}</h1>
              <img className="w-56 h-56" src={p.images} alt="" />
              <p>{p.description}</p>
              <p>{p.price}</p>
              <button onClick={handleAdd}>add</button>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
