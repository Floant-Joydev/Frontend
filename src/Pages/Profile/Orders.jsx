import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import "./Profile.css";
import { useSelector } from "react-redux";
import { selectAllOrders } from "./../../features/Order/OrderSlice";

const Orders = () => {
  const orders = useSelector(selectAllOrders);

  return (
    <>
      <Navbar></Navbar>

      <div className="orders p1">
        <h1>All Orders</h1>

        {orders &&  (orders.length === 0 ) && 
        <p style={{color: "red", fontSize: "1.6rem"}}> No Items Found !!</p>
        }

        {orders && [...orders].reverse().map((ele, ind) => (
          <div className="orders-box" key={ind}>
            <h4>Order Id - #{ele._id}</h4>
            <p className="boo">Booking Date - 10.12.23</p>
            <main>
              <div className="left">
                {ele.products.map((product, ind) => (
                    <div className="item" key={ind}>
                    <img
                      src={product.product.ProductImage1}
                      alt=""
                      width={"80px"}
                    />
                    <p>{product.product.ProductName} (Medium) * <span style={{fontWeight: "600"}}>Qty - {product.quantity}</span></p>
                  </div>
                ))}
                
              </div>
              <div className="right">
                <div className="exp">
                  <p>Expected Delivery</p>
                  <h4>7 Working Days</h4>
                </div>
                <p className="price">Rs. {ele.totalAmount} /-</p>
                <div className="status">Pending</div>
              </div>
            </main>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
