import React, { useState } from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import shoes from "../../data/shoes.json";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const itemsPerPage = 8;
  const loadMoreAmount = 4;
  const [visibleAssets, setVisibleAssets] = useState(
    shoes.women.slice(0, itemsPerPage)
  );

  const handleLoadMore = () => {
    const nextIndex = visibleAssets.length;
    const newVisibleAssets = shoes.women.slice(
      nextIndex,
      nextIndex + loadMoreAmount
    );
    setVisibleAssets((prevVisibleAssets) => [
      ...prevVisibleAssets,
      ...newVisibleAssets,
    ]);
  };

  return (
    <div className="flex flex-wrap gap-6 xs:justify-center justify-between w-[100%] xl:border-l-2 xl:pl-6">
      {visibleAssets.map((el, index) => (
        <ProductCard
          key={el.name + index}
          url={el.image}
          name={el.name}
          details={el.description}
          stars={el.stars}
          price={el.price}
        />
      ))}
      {visibleAssets.length <= shoes.women.length && (
        <div
          onClick={handleLoadMore}
          className="w-full font-serif text-xl py-2 flex justify-center align-center"
        >
          <button className="border-2 px-4 py-2 rounded-md hover:bg-gray">Load More</button>
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
