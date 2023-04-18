import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../hoc/useAuth";
import item from "./Header.module.css";
import userPhoto from '../../img/user.png';
import cart from '../../img/cart.png';

const Navbar = ({ size }) => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className={item.wrapper}>
      <nav className={item.navbar}>
        <p className={item.bookstore}>JS book lover</p>
        <div className={item.imgCart}>
          <Link to="/cart">
            <img className={item.imgCart} src={cart} alt="cart" />
            <span>{size}</span>
          </Link>
        </div>
        <Link to="/JS-book-lover" className={item.signOut}>
          <button
            onClick={() => signout(() => navigate("/JS-book-lover", { replace: true }))}
            className={item.btn}
          >
            {" "}
            Sign-out
          </button>
        </Link>
        <div>
          <img
            src={userPhoto}
            className={(item.navIcon, item.userProfile)}
            alt="user icon"
          />
        </div>
        <p className={item.userName}>
          Name:{" "}
          {sessionStorage.getItem("name")
            ? sessionStorage.getItem("name")
            : "N"}
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
