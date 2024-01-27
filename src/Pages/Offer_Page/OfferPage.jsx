
import { useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/Product_card/Product_card'

import './Offer_page.css'
import { selectAllProduct } from '../../features/product/ProductSlice'
import { useParams } from 'react-router-dom'

const OfferPage = () => {

    const {type} = useParams();

    const products = useSelector(selectAllProduct);

    let shorted_product;
    if( type === 'all' && products ){
        shorted_product = [...products].sort((a, b) => {
            return a.PriceDiscountPercentage - b.PriceDiscountPercentage;
        });
        shorted_product.reverse();
    }
    else{
        shorted_product = [...products].reverse();
    }


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

        {shorted_product && shorted_product.map((ele, ind) => (
            <ProductCard
            key={ind}
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
        ))}


    </section>

    {/* <section className="offer-pagination p1">
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
    </section> */}

    <Footer />

    </>
  )
}

export default OfferPage
