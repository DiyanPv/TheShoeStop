import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  clearCart,
} from "../../redux/slices/cartSlice";
const Cart = ({ handleClose }) => {
  const cartData = useSelector((state) => state.cart.cartitems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const addItem = (item) => {
    dispatch(addCartItem(item));
  };

  const hasItems = cartData.length > 0;
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartData.map((item) => (
        <li
          key={item.name + item.price + Math.random()}
          className={classes.cartItem}
        >
          <span className={classes.itemName}> {item.name}</span>
          <span className={classes.itemamount}>x{item.amount}</span>
          <span className={classes.itemName}>Price: ${item.price}</span>
          <div>
            <button
              className={`${classes[`button--alt`]} ${classes.btn}`}
              onClick={() => {
                removeItem(item);
              }}
            >
              -
            </button>
            <button
              className={`${classes[`button--alt`]} ${classes.btn}`}
              onClick={() => {
                addItem(item);
              }}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      {hasItems ? (
        <>
          <div className={classes.total}>
            <span>Total Amount: </span>
            <span>{`$${totalAmount.toFixed(2)}`}</span>
          </div>
        </>
      ) : (
        `Your cart is empty!`
      )}
      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={handleClose}>
          Cancel
        </button>
        {hasItems && (
          <button
            className={classes[`button--alt`]}
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
