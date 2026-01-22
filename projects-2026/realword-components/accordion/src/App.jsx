// import React, { useState } from "react";

// const accordion = [
//   {
//     id: 1,
//     question: "What is an accordion component?",
//     answer:
//       "An accordion is a user interface element that allows users to expand and collapse sections of related content, helping to organize information efficiently.",
//   },
//   {
//     id: 2,
//     question: "How does an accordion improve user experience?",
//     answer:
//       "Accordions reduce page clutter by hiding content until it’s needed, making pages cleaner and easier to navigate.",
//   },
//   {
//     id: 3,
//     question: "Can I have multiple accordion sections open at once?",
//     answer:
//       "Yes, depending on the implementation. Some accordions allow only one section open at a time, while others support multiple open sections.",
//   },
//   {
//     id: 4,
//     question: "Is an accordion accessible for all users?",
//     answer:
//       "When implemented correctly with proper ARIA attributes and keyboard support, accordions can be fully accessible to all users.",
//   },
//   {
//     id: 5,
//     question: "Where are accordions commonly used?",
//     answer:
//       "Accordions are often used in FAQs, settings menus, and mobile interfaces to organize large amounts of information.",
//   },
// ];

// const App = () => {
//   const [activeId, setActiveId] = useState(null);

//   const handleToggle = (id) => {
//     // If the same id is clicked again, close it; otherwise open new one
//     setActiveId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold my-4">Accordion</h1>
//       <div className="py-4 w-96 m-auto">
//         {accordion.map((item) => (
//           <div key={item.id} className="border-b border-gray-300 py-2">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => handleToggle(item.id)}
//             >
//               <h2 className="font-semibold">{item.question}</h2>
//               <span>{activeId === item.id ? "🔼" : "🔽"}</span>
//             </div>
//             {activeId === item.id && (
//               <p className="mt-2 text-gray-700">{item.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// type-2
// multiple open sections at the same time.

import React, { useState } from "react";

const accordion = [
  {
    id: 1,
    question: "What is an accordion component?",
    answer:
      "An accordion is a user interface element that allows users to expand and collapse sections of related content, helping to organize information efficiently.",
  },
  {
    id: 2,
    question: "How does an accordion improve user experience?",
    answer:
      "Accordions reduce page clutter by hiding content until it’s needed, making pages cleaner and easier to navigate.",
  },
  {
    id: 3,
    question: "Can I have multiple accordion sections open at once?",
    answer:
      "Yes, this version of the accordion allows multiple sections to stay open simultaneously.",
  },
  {
    id: 4,
    question: "Is an accordion accessible for all users?",
    answer:
      "When implemented correctly with proper ARIA attributes and keyboard support, accordions can be fully accessible to all users.",
  },
  {
    id: 5,
    question: "Where are accordions commonly used?",
    answer:
      "Accordions are often used in FAQs, settings menus, and mobile interfaces to organize large amounts of information.",
  },
];

const App = () => {
  const [openItems, setOpenItems] = useState([]);
  const handleToggle = (id) => {
    // If the ID is already open, close it; otherwise, open it
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div>
      <h1>Accordion</h1>
      <div>
        {accordion.map((item) => (
          <div key={item.id} className="border-b-2">
            <div
              className="flex justify-between "
              onClick={() => handleToggle(item.id)}
            >
              <h1>{item.question}</h1>
              <span>{openItems.includes(item.id) ? "close" : "open"}</span>
            </div>
            {openItems.includes(item.id) && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
