import { Link } from "react-router-dom";
import './footer.css';
import customerService from "./footer-assets/customer-icon.svg";
import facebook from "./footer-assets/facebook-icon.svg";
import gmail from "./footer-assets/gmail-icon.svg";
import instagram from "./footer-assets/instagram-icon.svg"
import X from "./footer-assets/x-icon.svg";


const Footer = () => {

    return(
        <div className="footer">
            <div className="container">
                {/* <div className="left-half"> */}
                    <div className="sect sect-1">
                        <h4>Our Address</h4>
                        <p>47, Real Trench, Trench Town, Port Harcourt, Nigeria
                        (+234)  807 654 321
                        hybrid@bookstore.com 
                        </p>
                    </div>
                    <div className="sect sect-2">
                        <h4>Join The  Hybrid Worm</h4>
                        <p>A weekly newsletter from Hybrid Books where we share recommendations of the best books, exclusive discounts, and details of our online Book Club meetings.</p>
                        <button>Subscribe</button>
                    </div>
                {/* </div> */}

                {/* <div className="right-half"> */}
                    <div className="sect sect-3">
                        <h4>More</h4>
                        <ul className="links">
                            <Link>Blog</Link>
                            <Link>New Releases</Link>
                            <Link>Explore Genres</Link>
                            <Link>Download Free Books</Link>
                            <Link>Terms and Conditions</Link>
                        </ul>

                    </div>
                    <div className="sect sect-4">
                        <h4>Contact Us</h4>
                        <ul className="links">
                            <Link to="/"><img src={customerService} alt="" /> Customer Service</Link>
                            <Link to="/"><img src={X} alt="" />X</Link>
                            <Link to="/"><img src={instagram} alt="" />Instagram</Link>
                            <Link to="/"><img src={facebook} alt="" />Facebook</Link>
                            <Link to="/"><img src={gmail} alt="" />Gmail</Link>
                        </ul>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Footer;