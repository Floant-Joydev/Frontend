import React, { useEffect } from "react";
import "./Auth.css";

import { useDispatch } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";

import order_image from "../../assets/icon/Order.png";
import { resetLastOrder } from "../../features/Order/OrderSlice";

const Order = () => {

  const {order_id} = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  
  useEffect(() => {
    dispatch(resetLastOrder())
  },[dispatch])

  return (
    <>
      <div className="auth-main">
        <form className="order-page">
          <img src={order_image} alt="" />
          <h1>Order Successfull</h1>
          <p>You can see all details about order in My Orders Page</p>

          <h4>Order Id - #{order_id}</h4>
          <button style={{width: "60%"}} onClick={() => Navigate('/orders')}> My Orders </button>
          <Link to={'/'} style={{textDecoration: "underline", color: "blue"}}> Shop More </Link>
        </form>
      </div>
    </>
  );
};

export default Order;
