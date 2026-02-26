// import React, { useEffect, useState } from "react";

// // const data = [
// //   {
// //     id: 1,
// //     name: "Product 1",
// //     price: 19.99,
// //     image: "https://picsum.photos/seed/p1/300/300",
// //   },
// //   {
// //     id: 2,
// //     name: "Product 2",
// //     price: 24.99,
// //     image: "https://picsum.photos/seed/p2/300/300",
// //   },
// //   {
// //     id: 3,
// //     name: "Product 3",
// //     price: 14.5,
// //     image: "https://picsum.photos/seed/p3/300/300",
// //   },
// //   {
// //     id: 4,
// //     name: "Product 4",
// //     price: 39.99,
// //     image: "https://picsum.photos/seed/p4/300/300",
// //   },
// //   {
// //     id: 5,
// //     name: "Product 5",
// //     price: 9.99,
// //     image: "https://picsum.photos/seed/p5/300/300",
// //   },
// //   {
// //     id: 6,
// //     name: "Product 6",
// //     price: 29.99,
// //     image: "https://picsum.photos/seed/p6/300/300",
// //   },
// //   {
// //     id: 7,
// //     name: "Product 7",
// //     price: 49.99,
// //     image: "https://picsum.photos/seed/p7/300/300",
// //   },
// //   {
// //     id: 8,
// //     name: "Product 8",
// //     price: 15.75,
// //     image: "https://picsum.photos/seed/p8/300/300",
// //   },
// //   {
// //     id: 9,
// //     name: "Product 9",
// //     price: 22.4,
// //     image: "https://picsum.photos/seed/p9/300/300",
// //   },
// //   {
// //     id: 10,
// //     name: "Product 10",
// //     price: 18.3,
// //     image: "https://picsum.photos/seed/p10/300/300",
// //   },

// //   {
// //     id: 11,
// //     name: "Product 11",
// //     price: 12.99,
// //     image: "https://picsum.photos/seed/p11/300/300",
// //   },
// //   {
// //     id: 12,
// //     name: "Product 12",
// //     price: 27.8,
// //     image: "https://picsum.photos/seed/p12/300/300",
// //   },
// //   {
// //     id: 13,
// //     name: "Product 13",
// //     price: 33.25,
// //     image: "https://picsum.photos/seed/p13/300/300",
// //   },
// //   {
// //     id: 14,
// //     name: "Product 14",
// //     price: 16.45,
// //     image: "https://picsum.photos/seed/p14/300/300",
// //   },
// //   {
// //     id: 15,
// //     name: "Product 15",
// //     price: 21.99,
// //     image: "https://picsum.photos/seed/p15/300/300",
// //   },
// //   {
// //     id: 16,
// //     name: "Product 16",
// //     price: 45.0,
// //     image: "https://picsum.photos/seed/p16/300/300",
// //   },
// //   {
// //     id: 17,
// //     name: "Product 17",
// //     price: 11.2,
// //     image: "https://picsum.photos/seed/p17/300/300",
// //   },
// //   {
// //     id: 18,
// //     name: "Product 18",
// //     price: 38.6,
// //     image: "https://picsum.photos/seed/p18/300/300",
// //   },
// //   {
// //     id: 19,
// //     name: "Product 19",
// //     price: 26.75,
// //     image: "https://picsum.photos/seed/p19/300/300",
// //   },
// //   {
// //     id: 20,
// //     name: "Product 20",
// //     price: 17.9,
// //     image: "https://picsum.photos/seed/p20/300/300",
// //   },

// //   {
// //     id: 21,
// //     name: "Product 21",
// //     price: 31.1,
// //     image: "https://picsum.photos/seed/p21/300/300",
// //   },
// //   {
// //     id: 22,
// //     name: "Product 22",
// //     price: 28.45,
// //     image: "https://picsum.photos/seed/p22/300/300",
// //   },
// //   {
// //     id: 23,
// //     name: "Product 23",
// //     price: 13.6,
// //     image: "https://picsum.photos/seed/p23/300/300",
// //   },
// //   {
// //     id: 24,
// //     name: "Product 24",
// //     price: 40.0,
// //     image: "https://picsum.photos/seed/p24/300/300",
// //   },
// //   {
// //     id: 25,
// //     name: "Product 25",
// //     price: 23.99,
// //     image: "https://picsum.photos/seed/p25/300/300",
// //   },
// //   {
// //     id: 26,
// //     name: "Product 26",
// //     price: 19.4,
// //     image: "https://picsum.photos/seed/p26/300/300",
// //   },
// //   {
// //     id: 27,
// //     name: "Product 27",
// //     price: 35.75,
// //     image: "https://picsum.photos/seed/p27/300/300",
// //   },
// //   {
// //     id: 28,
// //     name: "Product 28",
// //     price: 14.99,
// //     image: "https://picsum.photos/seed/p28/300/300",
// //   },
// //   {
// //     id: 29,
// //     name: "Product 29",
// //     price: 32.2,
// //     image: "https://picsum.photos/seed/p29/300/300",
// //   },
// //   {
// //     id: 30,
// //     name: "Product 30",
// //     price: 20.5,
// //     image: "https://picsum.photos/seed/p30/300/300",
// //   },

// //   {
// //     id: 31,
// //     name: "Product 31",
// //     price: 18.8,
// //     image: "https://picsum.photos/seed/p31/300/300",
// //   },
// //   {
// //     id: 32,
// //     name: "Product 32",
// //     price: 27.3,
// //     image: "https://picsum.photos/seed/p32/300/300",
// //   },
// //   {
// //     id: 33,
// //     name: "Product 33",
// //     price: 41.99,
// //     image: "https://picsum.photos/seed/p33/300/300",
// //   },
// //   {
// //     id: 34,
// //     name: "Product 34",
// //     price: 16.75,
// //     image: "https://picsum.photos/seed/p34/300/300",
// //   },
// //   {
// //     id: 35,
// //     name: "Product 35",
// //     price: 29.1,
// //     image: "https://picsum.photos/seed/p35/300/300",
// //   },
// //   {
// //     id: 36,
// //     name: "Product 36",
// //     price: 12.4,
// //     image: "https://picsum.photos/seed/p36/300/300",
// //   },
// //   {
// //     id: 37,
// //     name: "Product 37",
// //     price: 36.9,
// //     image: "https://picsum.photos/seed/p37/300/300",
// //   },
// //   {
// //     id: 38,
// //     name: "Product 38",
// //     price: 25.6,
// //     image: "https://picsum.photos/seed/p38/300/300",
// //   },
// //   {
// //     id: 39,
// //     name: "Product 39",
// //     price: 30.0,
// //     image: "https://picsum.photos/seed/p39/300/300",
// //   },
// //   {
// //     id: 40,
// //     name: "Product 40",
// //     price: 21.45,
// //     image: "https://picsum.photos/seed/p40/300/300",
// //   },

// //   {
// //     id: 41,
// //     name: "Product 41",
// //     price: 15.3,
// //     image: "https://picsum.photos/seed/p41/300/300",
// //   },
// //   {
// //     id: 42,
// //     name: "Product 42",
// //     price: 33.8,
// //     image: "https://picsum.photos/seed/p42/300/300",
// //   },
// //   {
// //     id: 43,
// //     name: "Product 43",
// //     price: 22.1,
// //     image: "https://picsum.photos/seed/p43/300/300",
// //   },
// //   {
// //     id: 44,
// //     name: "Product 44",
// //     price: 44.99,
// //     image: "https://picsum.photos/seed/p44/300/300",
// //   },
// //   {
// //     id: 45,
// //     name: "Product 45",
// //     price: 17.6,
// //     image: "https://picsum.photos/seed/p45/300/300",
// //   },
// //   {
// //     id: 46,
// //     name: "Product 46",
// //     price: 28.0,
// //     image: "https://picsum.photos/seed/p46/300/300",
// //   },
// //   {
// //     id: 47,
// //     name: "Product 47",
// //     price: 19.75,
// //     image: "https://picsum.photos/seed/p47/300/300",
// //   },
// //   {
// //     id: 48,
// //     name: "Product 48",
// //     price: 34.2,
// //     image: "https://picsum.photos/seed/p48/300/300",
// //   },
// //   {
// //     id: 49,
// //     name: "Product 49",
// //     price: 23.5,
// //     image: "https://picsum.photos/seed/p49/300/300",
// //   },
// //   {
// //     id: 50,
// //     name: "Product 50",
// //     price: 37.99,
// //     image: "https://picsum.photos/seed/p50/300/300",
// //   },
// // ];
// // console.log(data);

// const Pagination = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemPerPage = 5;
//   const startIndex = (currentPage - 1) * itemPerPage;
//   //   const totalPage = Math.ceil(fetchProducts.length / itemPerPage);

//   //   const selectedPages = fetchProducts.slice(
//   //     startIndex,
//   //     startIndex + itemPerPage,
//   //   );
//   //   console.log(selectedPages);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {" "}
//       <p>hello</p>
//       {/* <div className="flex gap-5 py-10 ">
//         {selectedPages.map((prd) => (
//           <div key={prd.id} className="mx-auto">
//             <img className="w-44" src={prd.image} alt="" />
//             <p>{prd.price}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center gap-5">
//         <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
//           prev
//         </button>
//         <button
//           onClick={() =>
//             setCurrentPage((prev) => Math.min(prev + 1, itemPerPage))
//           }
//         >
//           Next
//         </button>
//       </div> */}
//     </>
//   );
// };

// export default Pagination;

import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;

  const startIndex = (currentPage - 1) * itemPerPage;
  const totalPage = Math.ceil(products.length / itemPerPage);

  const selectedPages = products.slice(startIndex, startIndex + itemPerPage);

  console.log(startIndex, selectedPages);

  console.log(totalPage);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
    // console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex gap-5 flex-wrap py-10 ">
        {selectedPages.map((prod) => (
          <div className="mx-auto" key={prod.id}>
            <img className="w-36" src={prod.images[0]} alt="" />
            <p className="max-w-[220px] bg-red-100">{prod.title}</p>
            <p>{prod.id}</p>
            <h1>{prod.price}</h1>
          </div>
        ))}
      </div>
      {/* <div className="flex gap-8 py-10 justify-center">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPage))
          }
        >
          Next
        </button>
      </div> */}
      <div className="flex gap-8 justify-center">
        {[...Array(totalPage)].map((_, i) => (
          <button
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "font-bold" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
