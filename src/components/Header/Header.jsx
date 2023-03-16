import React from "react";
import item from "../Header/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={item.wrapper}>
        <nav className={item.navbar}>
          <p className={item.bookstore}>JS book lover</p>
        </nav>
      </div>
    </>
  );
}
