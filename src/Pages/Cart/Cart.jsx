import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import cross from "../../assets/icon/cross.png";
import delete_icon from "../../assets/icon/delete.png";

import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartAsync, selectCart } from "../../features/cart/CartSlice";
import { resetLastSubscription, setAmount, setProducts } from "../../features/Order/OrderSlice";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  // If Cart is Empty then take it into home page
  const Navigate = useNavigate();
  // useEffect(() => {
  //   if (cart && cart.length === 0) {
  //     Navigate("/");
  //   }
  // }, [cart, Navigate]);

  //Calculating the total price
  let totalPrice = 0;
  if (cart && cart.length === 1) {
    totalPrice = cart[0].product.SalePrice * cart[0].quantity;
  }
  if (cart && cart.length > 1) {
    totalPrice = cart.reduce((total, obj) => {
      let sum = obj.product.SalePrice * obj.quantity;
      if (typeof total === "number") {
        sum += total;
      } else {
        sum += total.product.SalePrice * total.quantity;
      }
      return sum;
    });
  }


  // extracting cart to order item 
  let orderItem = cart.map((ele) => {
    return { product: ele.product._id, quantity: ele.quantity};
  })

  // console.log({orderItem})

  return (
    <>
      <Navbar></Navbar>

      <div className="cart-heading p1">
        <div>
          <h1>My Cart Summary </h1>
          <p>{`(4 items in cart)`}</p>
        </div>
        <Link to={"/"}>
          <img src={cross} alt="" />
        </Link>
      </div>

      <div className="cart p1">
        <div className="left">
          {cart && cart.length === 0 && (
            <>
              <p style={{ color: "red", fontSize: "1.5rem" }}>
                No Items in Cart
              </p>
            </>
          )}
          {cart &&
            cart.map((ele) => (
              <div key={ele._id} className="box">
                <img
                  className="image"
                  onClick={() => Navigate(`/product/${ele.product._id}`)}
                  src={ele.product.ProductImage1}
                  alt=""
                />
                <div className="des">
                  <h4>{ele.product.ProductName}</h4>
                  <p>
                    Mala Quantity <span>{ele.quantity}</span>, Mala Size{" "}
                    <span>Small</span>
                  </p>
                  <p>Express Delivery</p>
                </div>
                <div className="price">
                  <h3>Rs. {ele.product.SalePrice * ele.quantity}</h3>
                  <p>With Discount</p>
                </div>
                <img
                  className="delete"
                  src={delete_icon}
                  alt=""
                  onClick={() => {
                    const token = localStorage.getItem("floant-auth-token");
                    dispatch(
                      deleteCartAsync({
                        productId: ele.product._id,
                        token: token,
                      })
                    );
                  }}
                />
              </div>
            ))}
        </div>
        <div className="right">
          <div className="cart-discount">
            <p>Get Extra 10% Discount if your total order is Rs. 2999</p>
          </div>
          <div className="box">
            <div>
              <h4>Additional Discount</h4>
              <h4>Not Applicable</h4>
            </div>
            <div>
              <h4>Grand Total</h4>
              <h4>Rs. {totalPrice}/-</h4>
            </div>
            {cart.length !== 0 && (
              <Link to={"/login/1"}>
                <button
                  onClick={() => {
                    dispatch(setProducts(orderItem))
                    dispatch(setAmount(totalPrice));
                    dispatch(resetLastSubscription());
                  }}
                >
                  Place Order
                </button>
              </Link>
            )}
            <Link to="/">{"(Shop More)"}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
