import { useCallback } from "react";

export const useSorting = () => {
  const sortByNameAsc = useCallback((a, b) => a.name.localeCompare(b.name), []);
  const sortByNameDesc = useCallback((a, b) => b.name.localeCompare(a.name), []);
  const sortByPriceAsc = useCallback((a, b) => a.price - b.price, []);
  const sortByPriceDesc = useCallback((a, b) => b.price - a.price, []);

  return { sortByNameAsc, sortByNameDesc, sortByPriceAsc, sortByPriceDesc };
};
