import {RiFacebookLine, RiLinkedinFill} from 'react-icons/ri'
import './index.css'

const Footer = () => (
   <div className="footer-main-bg">
     <div className='footer-content'>
       <div className='footer-about-container'>
            <h1 className='footer-heading'>ABOUT US</h1>
            <p>
            Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.
            </p>
        </div>
        <ul className='footer-menu'>
            <h1 className='footer-heading'>MENUS</h1>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Carrer</li>
        </ul>
        <ul className='footer-menu'>
            <h1 className='footer-heading'>LEARN MORE</h1>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className='address-bg'>
            <h1 className='footer-heading'>ADDRESS</h1>
            <p>
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068
            <br/>Phone: 0804-717-8999
           <br/>Email: hi@rubixe.com
            </p>
            <h1 className='footer-heading'>SOCIAL MEDIA</h1>
            <button className='social-media-btn' type="button">
              <RiFacebookLine className='react-icon' />
            </button>
            <button className='social-media-btn' type="button">
              <RiLinkedinFill className='react-icon'/>
            </button>
        </div>
     </div>
     <div className='footer-copyright'>
        <p>© Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved</p>
     </div>
   </div>
)

export default Footer