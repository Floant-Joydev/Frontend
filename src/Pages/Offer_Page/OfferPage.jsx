
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/Product_card/Product_card'

import left_array from '../../assets/icon/left_array.svg'
import right_array from '../../assets/icon/right_array.svg'

import product1 from '../../assets/image/Product1.svg'
import product3 from '../../assets/image/Product3.svg'
import product4 from '../../assets/image/Product4.svg'
import product2 from '../../assets/image/product2.svg'

import './Offer_page.css'

const OfferPage = () => {
  return (
    <>
    
    <Navbar />

    <section className="product-heading p1">
        <h3>Home  <strong>{">"}</strong><span>Offers</span></h3>
    </section>

    <section className="offer-heading p1">
        <h2>Festival Sale is here</h2>
        <div className="filter">
            <p>250 Product Found</p>
            <select name="" id="">
                <option value="sort by">sort by</option>
            </select>
        </div>
    </section>

    <section className="offer-body p1">

        <ProductCard image={product1} name='Product Name' clr="var(--main-green)" />
        <ProductCard image={product1} name='Product Name' clr="var(--main-green)" />
        <ProductCard image={product1} name='Product Name' clr="var(--main-green)" />
        <ProductCard image={product1} name='Product Name' clr="var(--main-green)" />

        <ProductCard image={product4} name='Anthurium - Ottawa' clr="var(--main-brown" />
        <ProductCard image={product4} name='Anthurium - Ottawa' clr="var(--main-brown" />
        <ProductCard image={product4} name='Anthurium - Ottawa' clr="var(--main-brown" />
        <ProductCard image={product4} name='Anthurium - Ottawa' clr="var(--main-brown" />

        <ProductCard image={product3} name='Anthurium - Ottawa' clr="var(--main-green)"/>
        <ProductCard image={product3} name='Anthurium - Ottawa' clr="var(--main-green)"/>
        <ProductCard image={product3} name='Anthurium - Ottawa' clr="var(--main-green)"/>
        <ProductCard image={product3} name='Anthurium - Ottawa' clr="var(--main-green)"/>

        <ProductCard image={product2} name='Anthurium - Ottawa' clr="var(--main-brown" />        
        <ProductCard image={product2} name='Anthurium - Ottawa' clr="var(--main-brown" />        
        <ProductCard image={product2} name='Anthurium - Ottawa' clr="var(--main-brown" />        
        <ProductCard image={product2} name='Anthurium - Ottawa' clr="var(--main-brown" />        



    </section>

    <section className="offer-pagination p1">
        <div className="pages">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>... 45</p>
        </div>
        <div className="btn">
            <button className="previous"><img src={left_array} alt="" /></button>
            <button className="after">Next Page <img src={right_array} alt="" /></button>
        </div>
    </section>

    <Footer />

    </>
  )
}

export default OfferPage
