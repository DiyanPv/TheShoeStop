// i. Image of the product
// ii. Name of the product
// iii. Short description
// iv. Price (some products should have discounted price)
// v. Ratings ‘stars’.
// vi. Add to cart button – a success alert to be displayed on click (e.g., ‘Product
// added to cart’)

import React from "react";
import "./ProductCard.css";
const ProductCard = (imageUrl) => {
  const dynamicImage =
    "https://static.nike.com/a/images/t_default/4dec6834-9921-4a6b-a76f-e7735ed9326f/nikecourt-zoom-pro-mens-hard-court-tennis-shoes-c5mPwW.png";
  return (
    <div className="flex flex-col product-item-card relative xs:min-w-[100%] sm:min-w-[45%] sm:max-w-[45%] sm:min-h-[150px] md:min-w-[45%] md:max-w-[45%] md:min-h-[220px] lg:min-w-[23%] lg:min-h-[220px] lg:max-w-[30%] ">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${dynamicImage})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: `no-repeat`,
        }}
      ></div>
      <div className="flex-col text-xs py-2 px-2 w-full ">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold">Nike Air Max</h2>
            <p>Details</p>
            <h2 className="font-medium">2,000 USD</h2>
          </div>

          <div className="flex items-center">4.5/5</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
