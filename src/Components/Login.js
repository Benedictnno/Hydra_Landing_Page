import React, { useContext } from "react";
import { Appcomponet } from "../App";

const Login = () => {
  const { login, setSignUp,setLogin, signUp } = useContext(Appcomponet);
  return (
    <section className="form-section">
      {signUp && !login && (
        <form className="login_form">
          <button onClick={() => setSignUp(false)} className="close">
            Close
          </button>
          <div className="form">
            <label htmlFor="name">FirstName:</label>
            <input type="text" />
          </div>
          <div className="form">
            <label htmlFor="">lastName:</label>
            <input type="text" />
          </div>
          <div className="form">
            <label htmlFor="">Email:</label>
            <input type="email" />
          </div>
          <div className="form">
            <label htmlFor="">Password:</label>
            <input type="password" />
          </div>
          <button type="submit" className="submit">Submit</button>

          <p className="form_text">
            If You already have an account
            <span
              onClick={() => {
                return setLogin(true), setSignUp(false);
              }}
              className="login"
            >
              Login
            </span>
          </p>
        </form>
      )}
      {login && !signUp && (
        <form className="login_form">
          <button onClick={() => setLogin(false)} className="close">
            Close
          </button>
          <div className="form">
            <label htmlFor="">Email :</label>
            <input type="email" />
          </div>
          <div className="form">
            <label htmlFor="">Password :</label>
            <input type="password" />
          </div>
          <button type="submit" className="submit">Submit</button>
          <span
            onClick={() => {
              return setLogin(false) ,setSignUp(true);
            }}
            className="login"
          >
            SignUp
          </span>
        </form>
      )}
    </section>
  );
};

export default Login;
