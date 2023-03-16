import item from "./Cart.module.css";
import { booksData } from "../data";
import { StoreContext } from "../../context/store-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(StoreContext);
  const totalAmount = getTotalAmount();
  return (
    <>
      <h2> Your purchases </h2>
      {booksData.map((val) => {
        if (cartItems[val.id] !== 0) {
          return <CartItem data={val} />;
        }
      })}

      {totalAmount > 0 ? (
        <div>
          <h3>Subtotal: {totalAmount.toFixed(2)}$</h3>
        </div>
      ) : (
        <h2 className={item.emptyCart}> Cart is empty :'( </h2>
      )}
    </>
  );
};

export default Cart;
