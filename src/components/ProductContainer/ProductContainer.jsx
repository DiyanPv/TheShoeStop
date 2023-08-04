import React, { useState } from "react";
import "./ProductContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useEffect } from "react";
const ProductContainer = () => {
  const assets = useSelector((state) => state.product.products);
  //getting the products array based on currently selected category
  const itemsPerPage = 8;
  const loadMoreAmount = 4;

  const [visibleAssets, setVisibleAssets] = useState(
    assets.slice(0, itemsPerPage)
  );

  useEffect(() => {
    setVisibleAssets(assets.slice(0, itemsPerPage));
    //re-rendering assets on first page load and every redux products array change
  }, [assets]);

  const handleLoadMore = () => {
    const nextIndex = visibleAssets.length;
    const newVisibleAssets = assets.slice(
      nextIndex,
      nextIndex + loadMoreAmount
    );
    console.log(newVisibleAssets);

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
      {visibleAssets.length < assets.length && (
        <div className="w-full py-2 flex justify-center align-center">
          <Button
            variant="contained"
            color="primary"
            className="border-2 px-4 rounded-md hover:bg-gray text-xl"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}

      {visibleAssets.length <= 0 && (
        <div> Please choose a category above. </div>
      )}
    </div>
  );
};

export default ProductContainer;
