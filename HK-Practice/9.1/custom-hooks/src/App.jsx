import React, { useState } from "react";
import { useEffect } from "react";

const useDebounce = (value, timeout) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified timeout
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    // Clean up the timer if the value changes before the timeout has passed
    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce timeout

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    debounce value is {debouncedValue}
     <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
   
  );
};

export default SearchBar;
