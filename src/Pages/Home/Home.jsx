import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Navbar from "../../Components/Navbar/Navbar";

import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BlogCard from "./../../Components/Blog_card/Blog_card";
import Footer from "../../Components/Footer/Footer";
import Catagories from "../../Components/Catagories/Catagories";
import CustomerCard from "../../Components/Customer_card/Customer_card";
import ProductCard from "./../../Components/Product_card/Product_card";

import group from "../../assets/image/Mask group.svg";
import hero from "../../assets/image/Hero.svg";
import banner1 from "../../assets/image/banner1.svg";
import blog1 from "../../assets/image/Blog1.svg";
import { useSelector } from "react-redux";
import { selectAllProduct } from "../../features/product/ProductSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectAllBlogs } from "./../../features/blog/BlogSlice";

const Home = () => {
  const allProduct = useSelector(selectAllProduct);
  const blog = useSelector(selectAllBlogs);
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

  // Separating out in sections
  let newArrival;
  if (allProduct) {
    newArrival = [...allProduct].reverse();
  }

  let seedProduct;
  if (allProduct) {
    seedProduct = [...allProduct].filter((obj) => obj.Category === "Seeds");
  }

  let plantersProduct;
  if (allProduct) {
    plantersProduct = [...allProduct].filter(
      (obj) => obj.Category === "Planters"
    );
  }

  let plantProduct;
  if (allProduct) {
    plantProduct = [...allProduct].filter((obj) => obj.Category === "Plants");
  }

  return (
    <>
      <Navbar />

      <section className="hero-slider">
        <div className="frame">
          <img src={hero} alt="slider_image" />
          <img src={hero} alt="slider_image" />
          <img src={hero} alt="slider_image" />
          <img src={hero} alt="slider_image" />
          <img src={hero} alt="slider_image" />
          <img src={hero} alt="slider_image" />
        </div>
        <button>Shop Now</button>
      </section>

      <section className="cards p1">
        <div className="card">
          <div className="btn">
            <div className="offer">Best Deals</div>
            <button>Order Now</button>
          </div>
          <img src={group} alt="" />
        </div>

        <div className="card">
          <div className="btn">
            <div className="offer">Best Deals</div>
            <button>Order Now</button>
          </div>
          <img src={group} alt="" />
        </div>

        <div className="card">
          <div className="btn">
            <div className="offer">Best Deals</div>
            <button>Order Now</button>
          </div>
          <img src={group} alt="" />
        </div>

        <div className="card">
          <div className="btn">
            <div className="offer">Best Deals</div>
            <button>Order Now</button>
          </div>
          <img src={group} alt="" />
        </div>
      </section>

      <section className="new-arrivals p1">
        <div className="heading">
          <div className="left">
            <h2>Our New Arrivals</h2>
            <p>New Product With Affordable Price</p>
          </div>
          <Link to={`/products/Plants/All`}>
            <div className="right">view all</div>
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={windowSize > 1500 ? 4 : 3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {newArrival &&
            newArrival.slice(0, 6).map((ele) => {
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

      <section className="new-arrivals p1">
        <div className="heading">
          <div className="left">
            <h2>Puja Flowers with Monthly Subscription</h2>
            <p>here is a our subscription offer you get affordable</p>
          </div>
          <Link to={"products/Subscription/All"}>
            <div className="right">view all</div>
          </Link>
        </div>
        <div className="banner">
          <img src={banner1} alt="" />
          <div className="inner-content">
            <h4>About Our Subscription</h4>
            <p>
              we are first online marketplace for traditional flowers. we are
              first online marketplace for traditional flower we are first
              online marketplace for traditional flowers. we are first online
              marketplace for traditional flower we are first online marketplace
              for traditional flowers. we are first online marketplace for
              traditional flower
            </p>
            <h4>Main Features</h4>
            <p>
              we are first online marketplace for traditional flowers. we are
              first online marketplace for traditional flower we are first
              online marketplace for traditional flowers. we are first online
              marketplace for traditional flower we are first online marketplace
              for traditional flowers. we are first online marketplace for
              traditional flower
            </p>
            <div className="btn">
              <Link to={"products/Subscription/All"}>
                <button>Get Your Subscription Now</button>
              </Link>
            </div>
          </div>
          <img
            className="puja-ful"
            src="../src/assets/image/flowers1.svg"
            alt=""
          />
        </div>
      </section>

      <section className="new-arrivals p1">
        <div className="heading">
          <div className="left">
            <h2>Fragrant Flowers with affordable price</h2>
            <p>New Product With Affordable Price</p>
          </div>
          <Link to={`/products/Seeds/All`}>
            <div className="right">view all</div>
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={windowSize > 1500 ? 4 : 3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {seedProduct &&
            seedProduct.slice(0, 6).map((ele) => {
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

      <section className="new-arrivals p1">
        <div className="heading">
          <div className="left">
            <h2>Beautiful Bouquet with Fragrant</h2>
            <p>New Product With Affordable Price</p>
          </div>
          <Link to={`/products/Planters/All`}>
            <div className="right">view all</div>
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={windowSize > 1500 ? 4 : 3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {plantersProduct &&
            plantersProduct.slice(0, 6).map((ele) => {
              return (
                <SwiperSlide key={ele._id}>
                  <ProductCard
                    id={ele._id}
                    salePrice={ele.SalePrice}
                    discount={ele.PriceDiscountPercentage}
                    category={ele.Category}
                    rating={ele.Rating}
                    price={ele.Price}
                    image={ele.ProductImage1}
                    name={ele.ProductName}
                    clr="var(--main-green)"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>

      <section className="new-arrivals p1">
        <div className="heading">
          <div className="left">
            <h2>our Beautiful Plants Collections</h2>
            <p>Beautiful Plants with Affordable Price</p>
          </div>
          <Link to={`/products/Plants/All`}>
            <div className="right">view all</div>
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={windowSize > 1500 ? 4 : 3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {plantProduct &&
            plantProduct.slice(0, 6).map((ele) => {
              return (
                <SwiperSlide key={ele._id}>
                  <ProductCard
                    id={ele._id}
                    salePrice={ele.SalePrice}
                    discount={ele.PriceDiscountPercentage}
                    category={ele.Category}
                    rating={ele.Rating}
                    price={ele.Price}
                    image={ele.ProductImage1}
                    name={ele.ProductName}
                    clr="var(--main-green)"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>

      <section className="new-arrivals p1">
        <div className="heading">
          <div className="left">
            <h2>Blogs for Your Gardening Knowledge</h2>
            <p>A perfect way to learn gardening</p>
          </div>
          <Link to={`/blogs`}>
            <div className="right">view all</div>
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={windowSize > 1300 ? 3 : 2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {blog && blog.slice(0, 6).map((ele, ind) => {
            return (
              <SwiperSlide key={ind}>
                <BlogCard
                  image={ele.BlogImage}
                  des={ele.BlogIntro}
                  id={ele._id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <section className="customer p1">
        <div className="heading">
          <h2>What Customer think about us</h2>
          <p>Our permanent happily customers say’s</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={windowSize > 1000 ? 4 : 3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CustomerCard clr="var(--customer-ash)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-blue)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-brown)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-green)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-ash)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-blue)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-brown)" />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard clr="var(--customer-green)" />
          </SwiperSlide>
        </Swiper>
      </section>

      <Catagories />
      <Footer />
    </>
  );
};

export default Home;
