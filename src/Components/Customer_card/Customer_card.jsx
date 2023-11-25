
import './Customer_card.css'

import avtaer1 from '../../assets/icon/Avtar1.svg'
import star2 from '../../assets/icon/Star2.svg'

const CustomerCard = ({clr}) => {
  return (
    <>
    <div className="cust-card" style={{border: `2px solid ${clr}`}}>
        <img src={avtaer1} alt="" />
        <h2>Anurag Mishra</h2>
        <p>“Top nursery for plant lovers, free from all the furniture clothing and other grot found in large garden centres. This is the place to go when you want to buy plants and get advice about growing them.”</p>
        <div className="star">
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
            <img src={star2} alt="" />
        </div>
        <div className="empty" style={{ backgroundColor: clr}}>
        </div>
        <div className="after" style={{backgroundColor: clr}}></div>
    </div>
    </>
  )
}

export default CustomerCard