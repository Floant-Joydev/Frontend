import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/Product_card/Product_card';

import './One_blog.css'
import Footer from '../../Components/Footer/Footer';

import star2 from '../../assets/icon/Star2.svg';
import product1 from '../../assets/image/Product1.svg';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllBlogs } from '../../features/blog/BlogSlice';
import { selectAllProduct } from '../../features/product/ProductSlice';


const OneBlog = () => {

  const location = useLocation();
  const allBlog = useSelector(selectAllBlogs);
  const param = useParams();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

  let blog = null
  if( allBlog ){
    let index = allBlog.findIndex((obj) => obj._id === param.blog_id );
    blog = allBlog[index];
  }

  // console.log(blog)

  const allProduct = useSelector(selectAllProduct);
  let newArrival;
  if (allProduct) {
    newArrival = [...allProduct].reverse();
  }
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

    <section className="product-heading p1">
        <h3>Home  <strong>{">"}</strong><span>Blogs</span> <strong>{">"}</strong> <span>{blog.BlogName}</span></h3>
    </section>

    <section className="one-blog p1">

        <div className="img" style={{ backgroundImage : `url(${blog.BlogImage})` }}>
            {/* <img src={blog_img} alt="" /> */}
        </div>

        <div className="content">

            <div className="heading">
                <div className="left">
                    <h2>{blog.BlogName}</h2>
                    <p>{blog.createdAt.slice(0,10)}</p>
                </div>
                <div className="right">
                    <div className="stars">
                        <img src={star2} alt="" />
                        <img src={star2} alt="" />
                        <img src={star2} alt="" />
                        <img src={star2} alt="" />
                        <img src={star2} alt="" />
                    </div>
                    <p>24 Reviews</p>
                </div>
            </div>

            <div className="body">

                <div className="item">
                    <p><strong>Introduction</strong></p>
                    <p>{blog.BlogIntro}</p>
                </div>
                <div className="item">
                    <p><strong>Sub Points</strong></p>
                    <ol>
                        <li><p>{blog.BlogPara}</p></li>
                    </ol>
                </div>

            </div>

        </div>

    </section>

    <section className="new-arrivals p1">
      <div className="heading">
        <div className="left">
          <h2>Our New Arrivals</h2>
          <p>New Product With Affordable Price</p>
        </div>
        <div className="right">
          view all
        </div>
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
    
    <Footer />

    </>
  )
}

export default OneBlog