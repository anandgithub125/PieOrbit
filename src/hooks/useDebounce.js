import { useState, useEffect } from "react";

const useDebounce = (inputValue, delayInMs) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(inputValue), delayInMs);

    return () => clearTimeout(timeoutId); 
  }, [inputValue, delayInMs]);

  return debouncedValue;
};

export default useDebounce;
