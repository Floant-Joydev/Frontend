import Blog_img from '../../assets/image/Blog1.svg'

import Navbar from '../../Components/Navbar/Navbar'
import Blog_card from '../../Components/Blog_card/Blog_card'

import './Blog.css'
import Footer from '../../Components/Footer/Footer'

const Blog = () => {
  return (
    <>

    <Navbar />

    <section className="product-heading p1">
        <h3>Home  <strong>{">"}</strong><span>Blogs</span> <strong>{">"}</strong> <span>Plants Blogs</span></h3>
    </section>

    <section className="blog-item p1">
        <div className="heading">
            <div className="content">
                <h2>Read Blogs For Plants</h2>
                <p>Here you can read plant related blogs</p>
            </div>
            <button>View All</button>
        </div>
        <div className="blogs">

            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />

            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />

            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />
            <Blog_card image={Blog_img} des='The Hidden Power of “Maghai Paan” more than just chew' />

        </div>
    </section>

    <Footer />

    </>
  )
}

export default Blog