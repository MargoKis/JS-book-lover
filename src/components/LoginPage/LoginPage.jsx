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

// import React from "react";
// import sign from "./LoginPage.module.css";
// import validation from './validation'
// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../hoc/useAuth";

// export default function LoginPage() {

//   const [values, setValues] = useState({
//     login: "",
//     password: ""
//   })

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value
//     })
//   }

//   const location = useLocation();
//   const navigate = useNavigate()
//   const fromPage = location.state?.from?.pathname;
//   const {signin} = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(validation(values))
//     const form = e.target;
//     const user = form.login.value.length && form.password.value.length;
//     signin(user, () => navigate(fromPage, {replace: true}))
//   }

//   return (
//     <>
//     {fromPage}
//     <div className={sign.container}>
//       <img
//         className={sign.imgAvatar}
//         src="./user.png"
//         alt="your avatar should be here"
//       />

//       <form onSubmit={handleSubmit} className={sign.form}>
//         <div className={sign.userName}>
//           <label for="login">Login</label>
//           <input
//           autoComplete='off'
//           name="login"
//           type="text"
//           value={values.login}
//           onChange={handleChange}
//           placeholder='min 4 - max 16'
//           />
//         </div>
//         {errors.login && <p className={sign.error}>{errors.login}</p>}

//         <div className={sign.userName}>
//           <label for="password">Password</label>
//           <input
//           autoComplete='off'
//           name="password"
//           type="password"
//           value={values.password}
//           onChange={handleChange}
//           placeholder='min 6 - max 18'
//           />
//         </div>
//         {/* {errors.password && <p className={sign.error}>{errors.password}</p>} */}

//         <button
//         type='submit'
//         className={sign.button}
//         disabled={(values.login.length < 4 || values.login.length > 16) && (values.password.length < 6 || values.password.length > 18)}
//         >
//         Sign-in
//         </button>

//       </form>

//     </div>
//     </>
//   );
// }
