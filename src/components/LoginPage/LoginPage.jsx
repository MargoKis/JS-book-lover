import React from "react";
import sign from "./LoginPage.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hoc/useAuth";
import validation from "./validation";
import Header from "../Header/Header";

export default function LoginPage() {
  const [userName, setUserName] = useState({
    name: "",
  });

  const [error, setError] = useState({});

  function handleChange(e) {
    setUserName({ ...userName, [e.target.name]: e.target.value });
  }

  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/books-list";

  const { signin } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(userName));
    const form = e.target;
    const user = form.name.value.length;
    signin(user, () => navigate(fromPage, { replace: true }));
  }

  return (
    <>
      <Header />

      <div className={sign.container}>
        <img
          className={sign.imgAvatar}
          src="./user.png"
          alt="your avatar should be here"
        />

        <form onSubmit={handleSubmit} className={sign.form}>
          <div className={sign.userName}>
            <label for="name">Full name </label>
            <input
              className={sign.input}
              value={userName.name}
              onChange={handleChange}
              autoComplete="off"
              name="name"
              type="text"
              placeholder="min 4 - max 16 letters"
            />
            {error.name}
          </div>

          <button
            type="submit"
            className={sign.button}
            disabled={userName.name.length < 4 || userName.name.length > 16}
          >
            Sign-in
          </button>
        </form>
      </div>
    </>
  );
}
