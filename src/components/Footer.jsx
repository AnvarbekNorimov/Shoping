import { IconFacebook, IconInstagram, IconLinkedin, IconLogo, IconProject, IconTwitter, IconYoutube } from "../assets/img/IconProject"
import AppStore from '../assets/img/AppStore.svg'
import GooglePLay from '../assets/img/GoogelPlay.svg'
const Footer = () => {
  return (
    <footer>
        <div className=" footer ">
            <ul>
                <li>
               <IconProject/>
                <IconLogo/>
                </li>
                <li className="Footer-logo__title">
                    Best information about the company gies here but now lorem ipsum is
                </li>
                <li className="Footer-logo__icon">
                    <IconFacebook/>
                    <IconTwitter/>
                    <IconLinkedin/>
                    <IconInstagram/>
                    <IconYoutube/>
                </li>
            </ul>

            <ul>
                <li className="footer-title">About</li>
                <li className="footer-text">About Us</li>
                <li className="footer-text">Find store</li>
                <li className="footer-text">Categories</li>
                <li className="footer-text">Blogs</li>
            </ul>
            <ul>
                <li className="footer-title">Partnership</li>
                <li className="footer-text">About Us</li>
                <li className="footer-text">Find store</li>
                <li className="footer-text">Categories</li>
                <li className="footer-text">Blogs</li>
            </ul>
            <ul>
                <li className="footer-title">Information</li>
                <li className="footer-text">Help Center</li>
                <li className="footer-text">Money Refund</li>
                <li className="footer-text">Shipping</li>
                <li className="footer-text">Contact us</li>
            </ul>
            <ul>
                <li className="footer-title">For users</li>
                <li className="footer-text">Login</li>
                <li className="footer-text">Register</li>
                <li className="footer-text">Settings</li>
                <li className="footer-text">My Orders</li>
            </ul>
            <ul>
                <li className="footer-title">Get app</li>
                <li className="footer-title__icon"><img src={AppStore} alt="App Store" /></li>
                <li className="footer-title__icon"><img src={GooglePLay} alt="Google Play" /></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer