import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Variable.css";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import OfferPage from "./Pages/Offer_Page/OfferPage";
import Blogs from "./Pages/Blogs/Blogs";
import Blog from "./Pages/Blog/Blog";
import OneBlog from "./Pages/One_blog/One_blog";
import OneSubscription from "./Pages/One_subscription/One_subscription";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Address from "./Pages/Auth/Address";
import AddAddress from "./Pages/Auth/AddAddress";



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductAsync } from "./features/product/ProductSlice";
import { fetchAllBlogAsync } from "./features/blog/BlogSlice";
import { checkUserAsync, selectUser } from "./features/auth/authSlice";
import Cart from "./Pages/Cart/Cart";
import { fetchAllCartAsync } from "./features/cart/CartSlice";
import Payment from "./Pages/Auth/Payment.jsx";
import Order from "./Pages/Auth/Order.jsx";
import { fetchOrderAsync, fetchSubscriptionAsync } from "./features/Order/OrderSlice.js";
import Orders from "./Pages/Profile/Orders.jsx";
import Subscription from "./Pages/Profile/Subscription.jsx";
import SubscriptionSuccess from "./Pages/Auth/Subscription.jsx";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductAsync());
    dispatch(fetchAllBlogAsync());
  }, [dispatch])

  // Getting Data using token
  const token = localStorage.getItem('floant-auth-token')
  useEffect(() => {
    if( token !== undefined ){
      dispatch(checkUserAsync(token));
    }
  },[token, dispatch])

  // Fetching all Cart items after login
  const user = useSelector( selectUser );
  useEffect(() => {
    if( user ){
      dispatch(fetchAllCartAsync(token));
      dispatch(fetchOrderAsync());
      dispatch(fetchSubscriptionAsync());
    }
  }, [user, dispatch, token]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:flag" element={<Login />} />
          <Route path="/register/:flag" element={<Register />} />
          <Route path="/address" element={<Address />} />
          <Route path="/address/add" element={<AddAddress />} />
          <Route path="/address/add/:address_ind" element={<AddAddress />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order/:order_id" element={<Order />} />
          <Route path="/subscriptions/:order_id" element={<SubscriptionSuccess />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route
            path="/products/:product_group/:product_type"
            element={<Products />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/offer/:offer_id" element={<OfferPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogs_id" element={<Blog />} />
          <Route path="/blog/:blog_id" element={<OneBlog />} />
          {/* <Route path='/subscription' element={} /> */}
          <Route
            path="/subscription/:subscription_id"
            element={<OneSubscription />}
          />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
