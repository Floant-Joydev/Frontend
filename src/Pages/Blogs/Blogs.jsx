import { useSelector } from "react-redux";
import BlogCard from "../../Components/Blog_card/Blog_card";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Blogs.css";
import { selectAllBlogs } from "../../features/blog/BlogSlice";

const Blogs = () => {
  const blogs = useSelector(selectAllBlogs);

  return (
    <>
      <Navbar />

      <section className="product-heading p1">
        <h3>
          Home <strong>{">"}</strong>
          <span>Blogs</span>
        </h3>
      </section>

      <section className="blog-item p1">
        <div className="heading">
          <div className="content">
            <h2>Read Blogs For Plants</h2>
            <p>Here you can read plant related blogs</p>
          </div>
          {/* <button>View All</button> */}
        </div>
        <div className="blogs">
          {blogs && blogs.map((ele, ind) => {
            return (
              <BlogCard
                key={ind}
                image={ele.BlogImage}
                des={ele.BlogIntro}
                id={ele._id}
              />
            );
          })}

        </div>
      </section>

      {/* <section className="blog-item p1">
        <div className="heading">
          <div className="content">
            <h2>Read Blogs For Flowers</h2>
            <p>Here you can read flowers related blogs</p>
          </div>
          <button>View All</button>
        </div>
        <div className="blogs">
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
        </div>
      </section>

      <section className="blog-item p1">
        <div className="heading">
          <div className="content">
            <h2>Read Blogs For Boquet</h2>
            <p>Here you can read flowers related blogs</p>
          </div>
          <button>View All</button>
        </div>
        <div className="blogs">
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
        </div>
      </section>

      <section className="blog-item p1">
        <div className="heading">
          <div className="content">
            <h2>Other Important Blogs</h2>
            <p>Here you can read flowers related blogs</p>
          </div>
          <button>View All</button>
        </div>
        <div className="blogs">
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
          <Blog_card
            image={Blog_img}
            des="The Hidden Power of “Maghai Paan” more than just chew"
          />
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Blogs;
