import React from "react";
import "./Counter.css";
const Counter = ({ sortedBy, loadedItems }) => {
  return (
    <div className=" flex mt-6 sm:mb-10 md:mb-6  ml-2 mr-2 xs:mb-6 justify-between sm:pl-4 sm:pr-4 md:pl-10 md:pr-10 lg:pt-10 lg:pl-20 lg:pr-20 items-end">
      <p className="counter-product-name">{sortedBy}</p>
      <p className="counter-product-quantity">{loadedItems} Products</p>
    </div>
  );
};

export default Counter;
