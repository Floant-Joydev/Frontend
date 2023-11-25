import React, { useEffect } from "react";
import "./Auth.css";

import back from "../../assets/icon/back.png";
import secure from "../../assets/icon/secure.png";
import check from "../../assets/icon/check.png";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { createOrderAsync, createSubscriptionAsync, selectAddress, selectLastOrderId, selectLoading, selectProducts, selectSubscription, selectTotalAmount, setPaymentMethod } from "../../features/Order/OrderSlice";

const Payment = () => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const products = useSelector(selectProducts);
  const subscription = useSelector(selectSubscription)
  const address = useSelector( selectAddress );
  const totalAmount = useSelector( selectTotalAmount );

  const loading = useSelector(selectLoading);
  const lastOrderId = useSelector( selectLastOrderId );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if( products.length === 0 && subscription.product === undefined){
      Navigate('/')
    }
  }, [Navigate, products, subscription])

  useEffect(() => {
    if( lastOrderId !== null ){
      if(subscription.product !== undefined){
        Navigate(`/subscriptions/${lastOrderId}`)
      }
      else{
        Navigate(`/order/${lastOrderId}`);
      }
    }
  }, [lastOrderId, Navigate, subscription]);


  return (
    <>
      <div className="auth-main">
        <section className="auth-heading">
          <div>
            <Link to={'/'}><img src={back} alt="Back_here" /></Link>
            <p>Floant Payment Gateway</p>
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
          <div className="round">
            <img src={check} alt="" />
          </div>
          <p>Payment</p>
        </section>

        <form className=" payment" onSubmit={handleSubmit((data) => {
            // console.log(data);
            if( data.payment === 'Cash' ){
              dispatch(setPaymentMethod(data.payment));
              if( subscription.product !== undefined ){
                dispatch(createSubscriptionAsync({...subscription, address, paymentMethod: data.payment, status: "pending"}))
              }
              else{     
                dispatch(createOrderAsync({products, address, totalAmount, status: "pending", paymentMethod: data.payment }))
              }
              
            }
            else{
              toast.info('Online payment coming soon, Try with Cash On Delivary')
            }
        })}>
          <p style={{ fontSize: "1.2rem" }}>
            Please Select Payment Method to Complete Order
          </p>

          <div className="pay-box" style={{flexDirection: 'row'}}>
            <div className="pay-item" style={{ flexDirection: "row" }}>
              <input
                type="radio"
                id="payment"
                value={'Cash'}
                {...register("payment", {required: "Select One Payment Method "})}
              />
              <label htmlFor="">
                <h4>Cash On Dalivery</h4>
                <p>&#8377; {totalAmount}</p>
              </label>
            </div>
            <div className="pay-item" style={{ flexDirection: "row" }}>
              <input
                type="radio"
                id="payment"
                value={'Online'}
                {...register("payment", {required: "Select One Payment Method "})}
              />
              <label htmlFor="">
                <h4>Online Payment</h4>
              <p>&#8377; {totalAmount}</p>
              </label>
            </div>
          </div>
          {errors.payment && (
            <p style={{ color: "red", textAlign: "start", padding: '0rem 2rem' }}>
              - {errors.payment.message}
            </p>
          )}
          <button type="submit" style={{width: "60%", marginLeft: "20%" }}>{(loading === "idle")? "Continue" : "Placeing Order ..."}</button>
        </form>
      </div>
    </>
  );
};

export default Payment;
