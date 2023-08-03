import React from "react";
import FilterButton from "../Filter/FilterButton";
import Sort from "../Sort/Sort";
import ProductContainer from "../ProductContainer/ProductContainer";
import Filter from "../Filter/Filter";
import Counter from "../Counter/Counter";
import { useSelector } from "react-redux";
const MainGrid = () => {
  const assets = useSelector((state) => state.product.selectedCategory);
  const loadedItems = useSelector((state) => state.product.products.length);
  return (
    <div className="sm:pl-4 sm:pr-4 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 absolute top-[28%] sm:top-[20%] w-full">
      <Counter 
        sortedBy={`${assets.toUpperCase()}`}
        loadedItems={loadedItems}
      />
      <div className="flex justify-between mb-10 items-end xl:justify-end">
        <FilterButton />
        <Sort />
      </div>
      <div className="flex w-full justify-between font-medium mb-6  ">
        <Filter />
        <ProductContainer />
      </div>
    </div>
  );
};

export default MainGrid;
