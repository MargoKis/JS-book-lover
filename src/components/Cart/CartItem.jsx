import React from "react";
import item from "./Cart.module.css";
import { useContext } from "react";
import { StoreContext } from "../../context/store-context";

const CartItem = (props) => {
  const { id, image, title, price } = props.data;
  const { cartItems, removeFromCart, updateItemCount } =
    useContext(StoreContext);
  return (
    <>
      <div className={item.cartWrap}>
        <div className={item.cartItem}>
          <img className={item.bookImg} src={image} alt="" />

          <h4 className={item.h4}>{title}</h4>

          <p className={item.cost}>{price} $</p>

          <div className={item.count}>
            <button
              className={item.removeFromCart}
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>

            <input
              className={item.totalItems}
              value={cartItems[id]}
              onChange={(e) => updateItemCount(e.target.value, id)}
              type="number"
              min="1"
              max="30"
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
