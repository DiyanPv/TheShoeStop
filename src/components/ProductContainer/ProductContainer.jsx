import React from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";
const ProductContainer = () => {
  return (
    <div className="flex flex-wrap gap-6 xs:justify-center justify-between w-[100%] xl:border-l-2 xl:pl-6  ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductContainer;
