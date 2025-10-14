//type 1-- use debounse

/*
import React, { useRef } from "react";

// usedebounce hooks

function useDebounce(orginalFn) {
  const currentClock = useRef();
  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orginalFn, 200);
  };
  return fn;
}

const App = () => {
  function sendTobackend() {
    fetch("www.google.com");
  }

  const debounceFn = useDebounce(sendTobackend);

  return (
    <div>
      <input onChange={debounceFn} type="text" />
    </div>
  );
};

export default App;
*/

//-----------------------
// type 2 debounce
import { useState, useEffect } from "react";

// Custom useDebounce Hook
/*

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer when the value changes
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;


import React, { useState } from 'react';
import useDebounce from './useDebounce';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Use the useDebounce hook
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce delay

  // Effect to handle API call or any side effect based on debounced value
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Making API call with:', debouncedSearchTerm);
      // Call your API or perform any action based on debouncedSearchTerm
    }
  }, [debouncedSearchTerm]); // Only call when debouncedSearchTerm changes

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchComponent;


//explanation

Explanation:
searchTerm: The value in the input field.

debouncedSearchTerm: The value returned from useDebounce will only change after the user has stopped typing for 500ms (or whatever delay you specify).

useEffect: The useEffect hook is used to trigger an action, like an API call, whenever the debouncedSearchTerm changes.

Why Use useDebounce?
Performance Optimization: Debouncing helps avoid firing an action (like an API call) on every keystroke, which can save on unnecessary network requests or heavy computations.

Improved UX: It can improve the user experience by ensuring actions like search results are not displayed too frequently and only after the user has stopped typing.

You can also use libraries like lodash.debounce for a more advanced and ready-made debouncing solution, but building your own custom hook is a great learning experience and gives you more control over the implementation.


*/
