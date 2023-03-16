import React from "react";
import list from "../BookCard/BookCard.module.css";
import { StoreContext } from "../../context/store-context";
import { useContext } from "react";

const BookCard = (props) => {
  const { id, image, title, author, price } = props.data;
  const { addToCart, cartItems } = useContext(StoreContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className={list.block}>
      <div className={list.inBlock}>
        <img className={list.bookImg} src={image} alt="" />
        <h4 className={list.h4}>{title}</h4>
        <h5 className={list.h5}>{author}</h5>
        <div className={list.priceAndBut}>
          <p className={list.cost}>{price} $</p>
          <button className={list.toCart} onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
