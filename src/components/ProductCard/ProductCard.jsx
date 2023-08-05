// i. Image of the product
// ii. Name of the product
// iii. Short description
// iv. Price (some products should have discounted price)
// v. Ratings ‘stars’.
// vi. Add to cart button – a success alert to be displayed on click (e.g., ‘Product
// added to cart’)

import React from "react";
import "./ProductCard.css";
import { LiaCartPlusSolid } from "react-icons/lia";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";
const ProductCard = ({ url, name, details, stars, price, setIsItemAdded }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    addItemToCartAlert();
    dispatch(addItemToCart({ name, price }));
  };

  const addItemToCartAlert = () => {
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 1500);
  };
  return (
    <div className="flex flex-col product-item-card relative xs:min-w-[100%] sm:min-w-[45%] sm:max-w-[45%] sm:min-h-[240px] md:min-w-[45%] md:max-w-[45%] md:min-h-[380px] lg:min-w-[20%] lg:min-h-[360px] lg:max-w-[23%] box-shadow-card">
      <div
        className="w-full h-full flex justify-end"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div
          className="mr-6 mt-3 rounded-full border-3 absolute p p-1 cursor-pointer bg-gray-200 border-black hover:bg-white"
          onClick={handleAddToCart}
        >
          <LiaCartPlusSolid fontSize={24} />
        </div>
      </div>
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
