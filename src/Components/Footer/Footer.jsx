import Logo from '../../assets/image/Logo.svg'
import insta from '../../assets/icon/insta.svg'
import whattsapp from '../../assets/icon/whattsapp.svg'
import youtube from '../../assets/icon/youtube.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twiter.svg'
import massenger from '../../assets/icon/messenger.svg'
import googelplay from "../../assets/icon/googleplay.svg"
import appstore from '../../assets/icon/appstore.svg'

import './Footer.css'

const Footer= () => {
  return (
    <>

    <footer>
        <div className="footer p1">
            <div className="set">
                <img src={Logo} alt="" />
                <p><strong>Social Media Connects</strong></p>
                <ol>
                    <li><img src={insta} alt="" /></li>
                    <li><img src={whattsapp} alt="" /></li>
                    <li><img src={youtube} alt="" /></li>
                    <li><img src={facebook} alt="" /></li>
                    <li><img src={twitter} alt="" /></li>
                    <li><img src={massenger} alt="" /></li>
                </ol>
            </div>
            <div className="set">
                <h4>Home</h4>
                <ul>
                    <li>Career</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>FAQ’s</li>
                </ul>
            </div>
            <div className="set">
                <h4>Privacy Policy</h4>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Cancel & Refund</li>
                    <li>Shipping Policy</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className="set">
                <h4>Get In Touch</h4>
                <ul>
                    <li>Call: +91 9856565896</li>
                    <li>E-Mail: support@floant.com</li>
                </ul>
            </div>
            <div className="set">
                <h3>Download our Application</h3>
                <div>
                    <img src={googelplay} alt="" />
                    <img src={appstore} alt="" />
                </div>
            </div>
        </div>
        <p className='main-para'>Copyright 2023 Floant All Rights Reserved</p>
    </footer>
    
    </>
  )
}

export default Footer