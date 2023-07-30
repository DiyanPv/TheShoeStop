import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../../assets/shoestop-logo.png";
const Header = () => {
  const itemTypes = ["Women", "Men", "Children", "Arrivals"];
  return (
    <div>
      <div className="main-header">
        <div className="isHoverable">
          <AiOutlineSearch className="lg:text-2xl" />
        </div>
        <div className="container-logo isHoverable lg:text-3xl ">
          <img
            src={logo}
            className="logo-image sm:h-[100px] md:h-[150px] lg:h-[170px]"
          />
        </div>
        <div className="cart-main isHoverable">
          <AiOutlineShoppingCart className="lg:text-3xl" />
        </div>
      </div>

      <div className="navigation-menu-main">
        {itemTypes.map((el) => {
          return <p className="isHoverable lg:text-xl">{el}</p>;
        })}
      </div>
    </div>
  );
};

export default Header;
