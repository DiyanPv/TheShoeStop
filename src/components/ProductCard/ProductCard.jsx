// i. Image of the product
// ii. Name of the product
// iii. Short description
// iv. Price (some products should have discounted price)
// v. Ratings ‘stars’.
// vi. Add to cart button – a success alert to be displayed on click (e.g., ‘Product
// added to cart’)

import React from "react";
import "./ProductCard.css";
import { AiOutlineStar } from "react-icons/ai";
const ProductCard = ({ url, name, details, stars, price }) => {
  return (
    <div className="flex flex-col product-item-card relative xs:min-w-[100%] sm:min-w-[45%] sm:max-w-[45%] sm:min-h-[240px] md:min-w-[45%] md:max-w-[45%] md:min-h-[380px] lg:min-w-[20%] lg:min-h-[360px] lg:max-w-[23%] box-shadow-card">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: `no-repeat`,
        }}
      ></div>
      <div className="flex-col text-xs py-2 px-2 w-full ">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold">{name}</h2>
            <p>{details}</p>
            <h2 className="font-medium">${price}</h2>
          </div>

          <div className="flex items-center">
            {stars}/5 <AiOutlineStar fontSize={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
