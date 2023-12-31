
import { useState, useEffect } from 'react'
import main_product from '../../assets/image/subscription-ful.svg'


import Navbar from '../../Components/Navbar/Navbar'

import './One_subscription.css'
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setAmount, setSubscriptionProduct } from '../../features/Order/OrderSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAllProduct } from '../../features/product/ProductSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

let date = new Date();


const OneSubscription = () => {

    const currMonth = date.getMonth();
    const currYear = date.getFullYear();
    const currDay = date.getDate();
    const mArr = ["January","February","March","April","May","June","Julay","August","September", "October", "November", "December"]

    const[dateType, setDateType] = useState('Custom');
    const[isCalender, setisCalender] = useState(false);


    let newArr = new Array(new Date(currYear, currMonth+1, 0 ).getDate()).fill(false);

    const [liTag, setlitag] = useState(newArr);

    let new2Arr = new Array(new Date(currYear, currMonth, 1).getDay()).fill(false);
    const [prevTag, setprevTag] = useState(new2Arr);

    const [month, setMonth] = useState(currMonth);
    const [year, setYear] = useState(currYear);

    const [days, setDays] = useState(0);
    const [startDay, setstartDay] = useState("Start Date");

    
    const [selectedDate, setSelectedDate] = useState({});
    const [lastDateofLastMonth, setlastDateofLastMonth] = useState(0);


    const selectDate = () => {

        if( selectedDate[mArr[month]] === undefined ){
            const totalDays = new Date(year, month+1, 0).getDate();
            selectedDate[mArr[month]] = new Array(totalDays+1).fill(false);
        }

        if( dateType === 'Daily' ){

            let count = 0;
            for( let i=1; i<=(new Date(year, month+1, 0 ).getDate()); i++ ){
                if( month === currMonth && i > currDay &&  selectedDate[mArr[month]][i] === false){
                    selectedDate[mArr[month]][i] = true;
                    count++;
                }
                else if( month > currMonth && selectedDate[mArr[month]][i] === false){
                    selectedDate[mArr[month]][i] = true;
                    count++;
                }
            }
            setDays( days + count );

        }

        if( dateType === 'Altenate' ){

            let count = 0;
            let select = true;
            for( let i=1; i<=(new Date(year, month+1, 0 ).getDate()); i++ ){
                
                if( month === currMonth && i > currDay ){
                    if( select === true ){
                        if(selectedDate[mArr[month]][i] === false ){
                            count ++;
                            selectedDate[mArr[month]][i] = true;
                        }
                    }
                    else{
                        if( selectedDate[mArr[month]][i] === true ){
                            count--;
                            selectedDate[mArr[month]][i] = false;
                        }
                    }
                }
                else if( month > currMonth ){
                    if( select === true ){
                        if(selectedDate[mArr[month]][i] === false ){
                            count ++;
                            selectedDate[mArr[month]][i] = true;
                        }
                    }
                    else{
                        if( selectedDate[mArr[month]][i] === true ){
                            count--;
                            selectedDate[mArr[month]][i] = false;
                        }
                    }
                }

                select = (!select);

            }
            setDays( days + count );

        }

    }

    const renderCalender = () => {

        let lastDateofMonth = new Date(year, month+1, 0).getDate();
        let latDateofLastMonth = new Date(year, month, 0).getDate();
        let firstDateofMonth = new Date(year, month, 1).getDay();

        setlastDateofLastMonth(latDateofLastMonth - firstDateofMonth + 1);

        newArr = new Array(lastDateofMonth).fill(false);
        setlitag(newArr);
        
        new2Arr = new Array(firstDateofMonth).fill(false);
        setprevTag(new2Arr);

        // let newli = "";



        // for( let i=firstDateofMonth; i>0; i--){
        //     newli += `<li className=" inactive " >${latDateofLastMonth-i+1}</li>`;
        // }

    }

    const doneHandle = () =>{

        setisCalender(false);

        if( days < 15 ){
            alert("You have to select minimum 15 Days for your Subscription.")
        }
        else{

            let isDone = false;

            for( let i=0; i<mArr.length; i++){
                if( selectedDate[mArr[i]] !== undefined ){
                    for( let j=0; j<selectedDate[mArr[i]].length; j++ ){
                        if( selectedDate[mArr[i]][j] === true ){

                            let str = "";
                            str += j.toString();
                            str += " ";
                            str += mArr[i];

                            setstartDay(str);
                            isDone = true;
                            break;
                        }
                    }
                }
                if( isDone ) break;
            }

        }

    }

    // console.log(selectedDate)

    



    useEffect(() => {
        renderCalender();
        selectDate();


    }, [month, year, dateType]);


    const {subscription_id} = useParams();
    const products = useSelector(selectAllProduct);

    let ind = -1;
    let product = {};
    if( products ){
        ind = products.findIndex((obj) => obj._id === subscription_id);
        product = products[ind];
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const [Quantity, setQuantity] = useState(1);

    // console.log(Quantity)

    const dispatch = useDispatch();
    const Navigate = useNavigate();


    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (product) {
          setSelectedImage(product.ProductImage1);
        }
    }, [product]);

  return (
    <>

    <Navbar />

    <section className="product-heading p1">
        <h3>Home  <strong>{">"}</strong><span>Subscription</span> <strong>{">"}</strong> <span>{product.ProductName} Subscription</span></h3>
    </section>

    <section className="subs-heading p1">
        <h2>Traditional {product.ProductName} flowers Subscription</h2>
        <p>we are first online marketplace for traditional flowers</p>
    </section>

    <section className="product-body p1">

        <div className="left">
            <img src={selectedImage} alt="" />

            <div className="sub-image">
                <img src={product.ProductImage1} alt="" onClick={() => setSelectedImage(product.ProductImage1)}/>
                <img src={product.ProductImage2} alt="" onClick={() => setSelectedImage(product.ProductImage2)}/>
                <img src={product.ProductImage3} alt="" onClick={() => setSelectedImage(product.ProductImage3)}/>
                <img src={product.ProductImage4} alt="" onClick={() => setSelectedImage(product.ProductImage4)}/>
            </div>

        </div>

    
        <div className="subs-right">

            <div className="qnt">
                <div className="item">
                    <h4>Marigold Mala</h4>
                    <div className='box'>
                        <div>
                            <p>Quantity</p>
                            <select onChange={(e) => setQuantity(+e.target.value)}>
                                <option value="01" >01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                            </select>
                        </div>
                        <div>
                            <p>Mala Size</p>
                            <select {...register('MalaSize', {required: "Select MalaSize"})} >
                                <option value="Small" >Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <div className="item">
                    <h4>Loose Flower</h4>
                    <div className='box'>
                        <div>
                            <p>Quantity</p>
                            <select name="" id="">
                                <option value="">10gm</option>
                                <option value="">20gm</option>
                                <option value="">30gm</option>
                            </select>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="date">
                <div className="item">
                    <h4>Date & Time Customization</h4>
                    <div>
                        <div className="box">
                            <p>Choose Your Dates</p>
                            <button
                            onClick={() => setisCalender( true )}
                            >{startDay}</button>
                        </div>
                        <div className="box">
                            <p>Delivery Time</p>
                            <select {...register('Time', {required: "Select Time"})}>
                                <option value="06:30 AM To 08:00 AM">06:30 AM To 08:00 AM</option>
                                <option value="08:00 AM To 11:00 AM">08:00 AM To 11:00 AM</option>
                                <option value="06:00 PM To 08:00 PM">06:00 PM To 08:00 PM</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="amount">
                <div className="item">
                    <h4>Amount Description</h4>
                    <div className="box">
                        <div className="line">
                            <p>Marigold Mala  {Quantity}x{Math.round(product.SalePrice/30)}</p>
                            <p>Rs. {(Quantity*Math.round(product.SalePrice/30))}</p>
                        </div>
                        {/* <div className="line">
                            <p>Loose Flower 50g</p>
                            <p>Rs. 25</p>
                        </div> */}
                        <div className="line">
                            <p>No. of days</p>
                            <p>Days {days}</p>
                        </div>
                        <div className="line">
                            <p>Delivery Charges</p>
                            <p>Free</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="discount">
                <select name="" id="">
                    <option value="">Apply Discount Coupon...</option>
                </select>
                <button>Apply</button>
            </div> */}

            <div className="total">
                <h4>Total</h4>
                <h4>Rs. {days*(Quantity*Math.round(product.SalePrice/30))}</h4>
            </div>

            <div className="btn">
                 <button onClick={handleSubmit((data) => {
                    if(days < 15 ){
                        toast.error('Select Atleast 15 Days For Subscription')
                    }
                    else{
                        dispatch(setAmount(days*(Quantity*Math.round(product.Price/30))))
                        dispatch(setSubscriptionProduct({...data, totalDays: days, totalAmount: days*(Quantity*Math.round(product.Price/30)), product: product._id, Quantity: Quantity, selectedDates: selectedDate }));
                        Navigate('/address');
                    }
                    
                 })}>Subscribe Now</button>
            </div>

        </div>
        
    </section>

    {isCalender && <div className="full-body"
    >
        <div className="calender">
            <div className="head">
                <h2>{mArr[month]} {year}</h2>

                 <div className='set_date'>
                    <div>
                        <input type="radio" name='setDate' value="Custom" 
                        checked={(dateType === 'Custom')? true : false}
                        onChange={(e) => setDateType(e.target.value)} />
                        <label htmlFor="Custom">Custom</label>
                    </div>
                    <div>
                        <input type="radio" name='setDate' value="Daily" 
                        checked={(dateType === 'Daily')? true : false}
                        onChange={(e) => setDateType(e.target.value)}
                        />
                        <label htmlFor="Daily">Daily</label>
                    </div>
                    <div>
                        <input type="radio" name='setDate' value="Altenate" 
                        checked={(dateType === 'Altenate')? true : false}
                        onChange={(e) => setDateType(e.target.value)}
                        />
                        <label htmlFor="Alternate">Alternate Days</label>
                    </div>
                </div>
            </div>
            <div className="week">
                <ul>
                    <li className='red'>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                </ul>
            </div>
            <div className="days">
                <ul>
                    {
                        prevTag.map((ele,ind) =>{
                            
                            return(
                                <li className="inactive" key={ind} >{lastDateofLastMonth+ind}</li>
                            )
                        })
                    }
                    {
                        liTag.map((ele, i) => {
                            return( (i+1 <= currDay && month === currMonth) || month < currMonth )?
                            (
                                <li className="inactive" >{i+1}</li>
                            ) :
                            (
                                <li
                                className={(selectedDate[mArr[month]] !== undefined && selectedDate[mArr[month]][i+1] === true )? "selected" : " "}
                                onClick={() => {

                                    if( dateType === 'Custom' ){
                                        let hereMonth = mArr[month];
                                        if( selectedDate[hereMonth] !== undefined && selectedDate[hereMonth][i+1] === true ){
                                            setDays(days-1);
                                            selectedDate[hereMonth][i+1] = false;
                                            return;
                                        }
                                        if( selectedDate[hereMonth] !== undefined ){
                                            selectedDate[hereMonth][i+1] = true;
                                            setDays(days+1);
                                        }
                                        else{
                                            const totalDays = new Date(year, month+1, 0).getDate();
                                            selectedDate[hereMonth] = new Array(totalDays+1).fill(false);
                                            selectedDate[hereMonth][i+1] = true;
                                            setDays(days+1);
                                        }
                                    }

                                }}
                                >{i+1}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="count">
                <div>
                    <p>Days Count</p>
                    <p>{days}</p>
                </div>
                <button
                 onClick={() => doneHandle()}
                >Done</button>
            </div>

            <button className='prev'
            onClick={() =>{
                if( month > 0 ){
                    setMonth(month-1);
                }
            }}
            >{"<"}</button>
            <button className='next'
            onClick={() =>{
                if( month < 11 ){
                    setMonth(month+1);
                }
            }}
            >{">"}</button>

        </div>
    </div>}

    <section className="about p1">
        <h4>About Product</h4>
        <p>{product.AboutProduct}</p>
    </section>

    <Footer />
    
    </>
  )
}

export default OneSubscription