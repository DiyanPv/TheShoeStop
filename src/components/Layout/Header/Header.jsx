import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
import { setCategory } from "../../../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../../assets/shoestop-logo.png";
import { Modal, Backdrop, Fade, Button } from "@mui/material"; // Import the Material-UI components for the modal

const Header = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

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
          <AiOutlineSearch className="lg:text-2xl" />
        </div>
        <div className="container-logo isHoverable lg:text-3xl">
          <a href="/">
            <img
              alt="no-img"
              src={logo}
              className="logo-image sm:h-[100px] md:h-[150px] lg:h-[170px]"
            />
          </a>
        </div>
        <div className="cart-main isHoverable" onClick={toggleCart}>
          <AiOutlineShoppingCart className="lg:text-3xl" />
        </div>
      </div>

      <div className="navigation-menu-main bg-gradient-green">
        {itemTypes.map((el) => {
          return (
            <p
              className="isHoverable lg:text-xl"
              key={el}
              onClick={initialSorting}
            >
              {el}
            </p>
          );
        })}
      </div>

      {/* Material-UI Modal */}
      <Modal
        className="flex items-center justify-center"
        open={isCartOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          {/* The content of the modal */}
          <div className="modal-content sm:w-[70%] md:w-[80%] lg:w-[50%] bg-white py-2 px-4 rounded-md">
            <h2>Shopping Cart</h2>
            <p>Content of your shopping cart goes here.</p>
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
