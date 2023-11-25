import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import blog_img from '../../assets/image/Blog1.svg'

import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/Product_card/Product_card';

import './One_blog.css'
import Footer from '../../Components/Footer/Footer';

import star2 from '../../assets/icon/Star2.svg';
import product1 from '../../assets/image/Product1.svg';


const OneBlog = () => {
  return (
    <>
    
    <Navbar />

    <section className="product-heading p1">
        <h3>Home  <strong>{">"}</strong><span>Blogs</span> <strong>{">"}</strong> <span>Maghai Paan Blog</span></h3>
    </section>

    <section className="one-blog p1">

        <div className="img" style={{ backgroundImage : `url(${blog_img})` }}>
            {/* <img src={blog_img} alt="" /> */}
        </div>

        <div className="content">

            <div className="heading">
                <div className="left">
                    <h2>The Hidden Power of  “Maghai Paan” more than just chew</h2>
                    <p>24-Jan-2021</p>
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
                    <p>Looking to add a touch of nature to your home or office? Our online nursery offers an impressive selection of plants for sale online. Whether you're a seasoned plant enthusiast or just starting your green journey, we have something for everyone.</p>
                </div>
                <div className="item">
                    <p><strong>Sub Points</strong></p>
                    <ol>
                        <li><p>Looking to add a touch of nature to your home or office? Our online nursery offers an impressive selection of plants for sale online. Whether you're a seasoned plant enthusiast or just starting your green journey</p></li>
                        <li><p>Looking to add a touch of nature to your home or office? Our online nursery offers an impressive selection of plants for sale online. Whether you're a seasoned plant enthusiast or just starting your green journey</p></li>
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
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><ProductCard image={product1} name='Product Name' clr="var(--main-green)" /></SwiperSlide>
        <SwiperSlide><ProductCard image={product1} name='Product Name' clr="var(--main-green)"/></SwiperSlide>
        <SwiperSlide><ProductCard image={product1} name='Product Name' clr="var(--main-green)"/></SwiperSlide>
        <SwiperSlide><ProductCard image={product1} name='Product Name' clr="var(--main-green)"/></SwiperSlide>
        <SwiperSlide><ProductCard image={product1} name='Product Name' clr="var(--main-green)"/></SwiperSlide>
      </Swiper>
    </section>
    
    <Footer />

    </>
  )
}

export default OneBlog