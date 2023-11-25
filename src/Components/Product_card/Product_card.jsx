
import { Link } from 'react-router-dom'
import './Produc_card.css'


const ProductCard = ({id, discount, rating, salePrice, price, image, name, clr, category}) => {
  return (
    <div className='product-card'>
        <img src={image} style={{height: "20rem"}} alt="" />
        <div className='discount'>{discount}% off</div>
        <div className="name">
            <h3>{name}</h3>
            <div className="rating">
                <p>{rating}</p><img src="../src/assets/icon/Star.svg" alt="" />
            </div>
        </div>
        <div className="price">
            <h4>&#8377;{salePrice}{(category === 'Subscription')? " /Month": ""} <span>&#8377;{price}</span></h4>
        </div>
        <p><strong>Expected Delivery</strong>  3days</p>
        <Link to={(category === 'Subscription')? `/subscription/${id}` : `/product/${id}`}><button style={{backgroundColor: clr, cursor: "pointer"}}>{(category === 'Subscription')? `View Subscription` : `View Product`}</button></Link>
    </div>
  )
}

export default ProductCard