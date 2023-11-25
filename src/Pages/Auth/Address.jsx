import React, { useEffect } from "react";
import "./Auth.css";

import back from "../../assets/icon/back.png";
import secure from "../../assets/icon/secure.png";
import check from "../../assets/icon/check.png";
import { Link, useNavigate } from "react-router-dom";

// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./../../features/auth/authSlice";
import { useForm } from "react-hook-form";
import { selectProducts, selectSubscription, setAddress } from "../../features/Order/OrderSlice";

const Address = () => {

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const subscription = useSelector(selectSubscription)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectUser);
  const Navigate = useNavigate();

  // console.log(errors);

  useEffect(() => {
    if( products.length === 0 && subscription.product === undefined){
      Navigate('/')
    }
  }, [Navigate, products, subscription])

  return (
    <>
      <form
        className="auth-main"
        onSubmit={handleSubmit((data) => {
          dispatch( setAddress(user.address[+data.address]) );
          Navigate('/payment')
          
          // console.log(user.address[+data.address])
        })}
      >
        <section className="auth-heading">
          <div>
            <Link to={"/"}>
              <img src={back} alt="Back_here" />
            </Link>
            <p>Select Address</p>
          </div>
          <div>
            <img src={secure} alt="" />
            <p>100% Secure</p>
          </div>
        </section>

        <section className="auth-top p1">
          <div className="round">
            <img src={check} alt="" />
          </div>
          <p>Login</p>
          <div className="line"></div>
          <div className="round">
            <img src={check} alt="" />
          </div>
          <p>Address</p>
          <div className="line"></div>
          <div className="round"></div>
          <p>Payment</p>
        </section>

        <div className="addresses p1">
          {errors.address && (
            <p style={{ color: "red", textAlign: "start" }}>
              - {errors.address.message}
            </p>
          )}
          {user &&
            user.address.map((ele, ind) => (
              <div className="box" key={ind}>
                <input
                  type="radio"
                  value={ind}
                  id={ind}
                  {...register("address", {
                    required: "Select Atleast One Address",
                  })}
                />
                <label htmlFor="1" style={{ width: "18rem" }}>
                  <h1>{ele.name}</h1>
                  <p>{ele.address}</p>
                  <p>
                    {ele.town}, {ele.district},{" "}
                  </p>
                  <p>
                    {ele.state}-{ele.pincode}
                  </p>
                </label>
                <button onClick={() => Navigate(`/address/add/${ind}`)}>
                  Edit
                </button>
              </div>
            ))}

          <Link to={"./add"}>
            <button className="btn">
              <p>Add New Address</p>
            </button>
          </Link>
          <button className="btn2" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default Address;
