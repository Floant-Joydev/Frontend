import React from "react";
import "./Auth.css";

import back from "../../assets/icon/back.png";
import secure from "../../assets/icon/secure.png";
import forget from "../../assets/icon/forget.png";

import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>
      <div className="auth-main">
        <section className="auth-heading">
          <Link to="/login">
            <div>
              <img src={back} alt="Back_here" />
              <p>Back to Login</p>
            </div>
          </Link>
          <div>
            <img src={secure} alt="" />
            <p>100% Secure</p>
          </div>
        </section>

        <form className="p1">
          <div className="img">
            <img src={forget} alt="" />
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              Re-trive Your Password
            </p>
          </div>

          <div>
            <label htmlFor="email">E-Mail Id</label>
            <input type="text" id="email" />
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
