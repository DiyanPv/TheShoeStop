import React, { useState } from "react";
import "./Header.css";
import { setCategory, resetItems } from "../../../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import logo from "../../../assets/shoestop-logo.png";
import Cart from "../../Cart/Cart";
const Header = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const resetproducts = () => {
    dispatch(resetItems([]));
  };

  const initialSorting = (e) => {
    const sort = e.target.innerText;
    dispatch(setCategory(sort.toLowerCase()));
  };

  const itemTypes = ["Women", "Men", "Children", "Arrivals"];

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  // Function to handle the modal close event
  const handleClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="main-header">
        <div className="isHoverable">
          <GiConverseShoe className="lg:text-2xl" />
        </div>
        <div className="container-logo isHoverable lg:text-3xl">
          <img
            onClick={resetproducts}
            alt="no-img"
            src={logo}
            className="logo-image sm:h-[100px] md:h-[150px] lg:h-[170px]"
          />
        </div>
        <div className="cart-main isHoverable" onClick={toggleCart}>
          <AiOutlineShoppingCart className="lg:text-3xl" />
        </div>
      </div>

      <div className="navigation-menu-main bg-gradient-green">
        {itemTypes.map((el) => {
          return (
            <p
              className="isHoverable lg:text-2xl"
              key={el}
              onClick={initialSorting}
            >
              {el}
            </p>
          );
        })}
      </div>
      {isCartOpen && <Cart handleClose={handleClose} />}
    </div>
  );
};

export default Header;
