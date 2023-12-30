import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import star from "../../assets/icon/Star.svg";
import product_stamp from "../../assets/image/product_stamp.png";

import ProductCard from "../../Components/Product_card/Product_card";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProduct } from "../../features/product/ProductSlice";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectUser } from "../../features/auth/authSlice";
import { createCartAsync } from "../../features/cart/CartSlice";
import {
  resetLastSubscription,
  setAmount,
  setProducts,
} from "../../features/Order/OrderSlice";

const Product = () => {
  const allProduct = useSelector(selectAllProduct);
  const user = useSelector(selectUser);
  const param = useParams();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  //Finding the selected Product from all Product
  let product;
  if (allProduct) {
    const productInd = allProduct.findIndex(
      (obj) => obj._id === param.product_id
    );
    product = allProduct[productInd];
  }

  //Finding similer category product
  let similerProduct;
  if (allProduct) {
    similerProduct = allProduct.filter(
      (obj) => obj.Category === product.Category
    );
  }

  //selecting the images from the bottom
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    if (product) {
      setSelectedImage(product.ProductImage1);
    }
  }, [product]);

  // Positioning the screen in the top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [location.pathname]);

  // Adjesting the quantity and size
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar />

      {product && (
        <>
          {" "}
          <section className="product-heading p1">
            <h3>
              Home <strong>{">"}</strong>
              <span>{product.SubCategory}</span>
            </h3>
          </section>
          <section className="product-body p1">
            <div className="left">
              <img src={selectedImage} alt="" />

              <div className="sub-image">
                <img
                  src={product.ProductImage1}
                  alt=""
                  onClick={() => setSelectedImage(product.ProductImage1)}
                />
                <img
                  src={product.ProductImage2}
                  alt=""
                  onClick={() => setSelectedImage(product.ProductImage2)}
                />
                <img
                  src={product.ProductImage3}
                  alt=""
                  onClick={() => setSelectedImage(product.ProductImage3)}
                />
                <img
                  src={product.ProductImage4}
                  alt=""
                  onClick={() => setSelectedImage(product.ProductImage4)}
                />
              </div>
            </div>

            <div className="right">
              <div className="name">
                <h1>{product.ProductName}</h1>
                <div className="rating">
                  <p>
                    {product.Rating === "Choose Rating"
                      ? "4.9"
                      : product.Rating}{" "}
                    <span>
                      <img src={star} alt="" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="price">
                <div className="offer">
                  <p>Save {product.PriceDiscountPercentage}%</p>
                </div>
                <p>
                  <span>Rs. {product.Price}</span> Rs. {product.SalePrice}
                </p>
              </div>
              <p className="price-contenet" style={{ fontWeight: "100" }}>
                (MRP Inclusive of all taxes)
              </p>
              <div className="size">
                <p className="select-heading">Select Plant Size</p>
                <div>
                  <button
                    className={size === "Small" ? "active" : ""}
                    onClick={() => setSize("Small")}
                  >
                    Small
                  </button>
                  <button
                    className={size === "Medium" ? "active" : ""}
                    onClick={() => setSize("Medium")}
                  >
                    Medium
                  </button>
                  <button
                    className={size === "Large" ? "active" : ""}
                    onClick={() => setSize("Large")}
                  >
                    Large
                  </button>
                </div>
              </div>
              <p className="select-heading">Quantity</p>
              <div className="quantity">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((prev) => prev - 1);
                    }
                  }}
                >
                  -
                </button>
                <h3>{quantity}</h3>
                <button
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="stamp">
                <img src={product_stamp} alt="" />
              </div>

              <div className="btn">
                <button
                  onClick={() => {
                    if (user) {
                      const token = localStorage.getItem("floant-auth-token");
                      dispatch(
                        createCartAsync({
                          productId: product._id,
                          quantity: quantity,
                          size: size,
                          token: token,
                        })
                      );
                    } else {
                      Navigate("/login/0");
                    }
                  }}
                >
                  Add to Cart
                </button>
                <Link to={"/login/1"}>
                  <button
                    onClick={() => {
                      dispatch(
                        setProducts([
                          { product: product._id, quantity: quantity },
                        ])
                      );
                      dispatch(setAmount(product.SalePrice));
                      dispatch(resetLastSubscription());
                    }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className="product-footer p1">
            <h2>About Product</h2>
            <p>{product.AboutProduct}</p>
          </section>
          <section className="new-arrivals p1">
            <div className="heading">
              <div className="left">
                <h2>Our Similer Arrivals</h2>
                <p>New Product With Affordable Price</p>
              </div>
              <Link to={`products/${product.Category}/All`}>
                <div className="right">view all</div>
              </Link>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={windowSize > 1500 ? 4 : (windowSize > 420) ? 3: 2}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {similerProduct &&
                similerProduct.slice(0, 6).map((ele) => {
                  return (
                    <SwiperSlide key={ele._id}>
                      <ProductCard
                        id={ele._id}
                        salePrice={ele.SalePrice}
                        discount={ele.PriceDiscountPercentage}
                        rating={ele.Rating}
                        price={ele.Price}
                        image={ele.ProductImage1}
                        name={ele.ProductName}
                        category={ele.Category}
                        clr="var(--main-green)"
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </section>
          <Footer />{" "}
        </>
      )}
    </>
  );
};

export default Product;
