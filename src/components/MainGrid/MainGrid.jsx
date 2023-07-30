import React from "react";
import FilterButton from "../Filter/FilterButton";
import Sort from "../Sort/Sort";
import ProductContainer from "../ProductContainer/ProductContainer";
import Filter from "../Filter/Filter";
const MainGrid = () => {
  return (
    <div className="sm:pl-4 sm:pr-4 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20">
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
