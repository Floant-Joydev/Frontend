import logo from "../../assets/image/Logo.svg";
import Shoping_cart from "../../assets/icon/Shopping cart.svg";
import Search from "../../assets/icon/Search.svg";
import Account_circle from "../../assets/icon/Account circle.svg";
import Down_array from "../../assets/icon/Down_Array.svg";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../../features/auth/authSlice";
import { useState } from "react";
import { selectCart } from "../../features/cart/CartSlice";

const category = [
  {
    id: 1,
    name: "Plants",
    subCategory: [
      "Indoor Plants",
      "Flowering Plants",
      "Air Purifing PLants",
      "Hanging Plants",
      "Low Maintainence Plants",
      "Oxygen Plants",
      "Lucky Plants",
      "Fruit Plants",
      "Bonsai Plants",
      "Cacti & Succulents",
      "Aromatic Plants",
      "Combo Plants",
    ],
  },
  {
    id: 2,
    name: "Seeds",
    subCategory: [
      "Flower Seeds",
      "Vegetable Seeds",
      "Microgreen Seeds",
      "Fruit Seeds",
      "Herb Seeds",
      "Tree & Grass Seeds",
    ],
  },
  {
    id: 3,
    name: "Planters",
    subCategory: [
      "Plastic Planters",
      "Ceramic Planters",
      "Plant Stands",
      "Seeding Tray",
    ],
  },
  {
    id: 4,
    name: "Plants Care",
    subCategory: ["Garden Tools", "Gurder Stones", "Soil & Fertilizer"],
  },
  {
    id: 5,
    name: "Subscription",
    subCategory: [
      "Marigold",
      "Rose",
      "Chamanthi",
      "Jasmine",
      "Lotus",
      "Mix Flowers",
    ],
  },
];

const Navbar = () => {
  const loginUser = useSelector(selectUser);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [hide, setHide] = useState(true);

  // Passing to login page accouding to need
  const handleLogin = () => {
    if (!loginUser) {
      Navigate("/login/0");
    } else {
      if (hide) {
        setHide(false);
      } else {
        setHide(true);
      }
    }
  };

  // Checking cart Item NUmber
  const cart = useSelector( selectCart );
  let cartLength = 0;
  if( cart ){
    cartLength = cart.length;
  }


  return (
    <>
      <section className="top p1">
        <p>E-mail ID: support@floant.com</p>
        <p>Get 10% OFF on Your First Order</p>
        <p>Call us on: +91 8851362827</p>
      </section>

      <section className="middle p1">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="search">
          <input type="text" placeholder="Search for Plants, Flowers" />
          <button type="submit">Search</button>
          <img src={Search} alt="" />
        </div>
        <div className="cart-icon">
          <Link to={"/cart"}>
            <img src={Shoping_cart} alt="" />
          </Link>
          <div className="cart-number">{cartLength}</div>
        </div>
        <div>
          <button className="btn" onClick={handleLogin}>
            <img src={Account_circle} alt="" />
            {loginUser != null ? `${loginUser.email.slice(0, 8)}...` : "Login"}
          </button>
          <ul className={hide ? "hide" : ""}>
            <Link to={'/orders'}><li>My Orders</li></Link>
            <hr />
            <Link to={'/subscriptions'}><li>My Subcription</li></Link>
            <hr />
            <li
              onClick={() => {
                dispatch(logoutUser());
                setHide(true);
              }}
            >
              logout
            </li>
            <hr />
          </ul>
        </div>
      </section>

      <section className="navbar p1">
        <ul>
          {category.map((ele, index) => (
            <Link to={`/products/${ele.name}/All`} key={index}>
            <li key={ele.id}>
              {ele.name} <img src={Down_array} alt="" />
              <div className="sub-navbar">
                <ul>
                  {ele.subCategory.map((obj, ind) => (
                    <Link to={`/products/${ele.name}/${obj}`} key={ind}>
                      <li style={{ color: "white" }}>{obj}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
            </Link>
          ))}
          <Link to={''}><li>Offers</li></Link>
          <Link to={'/blogs'}><li>Blogs</li></Link>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
