import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import "./Profile.css";
import { useSelector } from "react-redux";
import { selectAllSubscription } from "./../../features/Order/OrderSlice";
import { selectAllProduct } from "../../features/product/ProductSlice";

const Subscription = () => {
  const orders = useSelector(selectAllSubscription);
  const products = useSelector(selectAllProduct);

  const Month = ["January","February","March","April","May","June","Julay","August","September", "October", "November", "December"];

  // let product = {};
  // if(orders){
  //   let ind = products.findIndex((obj) => obj._id === )
  //   product =
  // }

  return (
    <>
      <Navbar></Navbar>

      <div className="orders p1">
        <h1>All Subscriptions</h1>

        {orders && orders.length === 0 && (
          <p style={{ color: "red", fontSize: "1.6rem" }}> No Items Found !!</p>
        )}

        {orders &&
          [...orders].reverse().map((ele, ind) => {

            const index = products.findIndex((obj) => obj._id === ele.product);
            const product = products[index];
            // console.log(ele)
            let first ;
            let second;

            // finding first subscription
            for( let i=0; i<Month.length; i++){
              const month = Month[i];
              const prop = ele?.selectedDates[month] ;

              let flag = false;
              if( prop && prop.length !== 0 ){
                for( let j=1; j<prop.length; j++){
                  if( prop[j] === true ){
                    first = `${j} ${Month[i]}`;
                    flag = true;
                    break;
                  }
                }
              }
              if(flag ){
                break;
              }
            }

            //finding second Subscription
            for( let i=Month.length; i>=0; i--){
              const month = Month[i];
              const prop = ele?.selectedDates[month] ;
              let flag = false;
              if( prop && prop.length !== 0 ){
                for( let j=prop.length; j>=0; j--){
                  if( prop[j] === true ){
                    second = `${j} ${Month[i]}`;
                    flag = true;
                    break;
                  }
                }
              }
              if(flag ){
                break;
              }
            }

            // console.log(first);
            // console.log(second);

            return (
              <div
                className="orders-box"
                key={ind}
                style={{ backgroundColor: "white", border: "2px solid black" }}
              >
                <h4 style={{ color: "green" }}>Order Id - #{ele._id}</h4>
                <p className="boo" style={{ color: "green" }}>
                  Booking Date - {ele.createdAt.slice(0,10)}
                </p>
                <main>
                  <div className="left">
                    <div className="item" key={ind}>
                      <img src={product.ProductImage1} alt="" width={"80px"} />
                      <p>
                        {product.ProductName} Subcription ({ele.MalaSize}) *{" "}
                        <span style={{ fontWeight: "600" }}>Qty - {ele.Quantity}</span>
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="exp">
                      <p>Delivery Time</p>
                      <h4>{ele.Time}</h4>
                    </div>
                    <p className="price">Rs. {ele.totalAmount} /-</p>
                    <p style={{color: "red", marginLeft: "10px"}}>{first} - {second} <span style={{color: "black"}}>({ele.totalDays} Days)</span></p>
                  </div>
                </main>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Subscription;
