import { React, useEffect } from 'react'
import footerLogo from "../assets/images/footerlogo.png"
import { NavLink, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY) != null) {
            if (location.pathname.includes("/user")) {
                if (window.innerWidth < 567) {
                    document.getElementsByTagName("footer")[0].style.display = "none";
                }
            }
            else {

                document.getElementsByTagName("footer")[0].style.display = "inherit";
            }

        }
    })


    return (
        <>
            <footer>

                <div className="footer-grid">

                    <div className="grid-item">

                        <div className="footer-logo">
                            <img src={footerLogo} alt="educator logo white" />
                        </div>

                        <p className="footer-text">
                            At GeekStacks, we believe in the power of technology, and we want to share our passion and knowledge with
                            you. Join us
                            and let us help you achieve your goals in the tech industry.
                        </p>

                        <div className="social-link">
                            <NavLink to="#">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </NavLink>
                            <NavLink to="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </NavLink>
                            <NavLink to="#">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </NavLink>
                            <NavLink to="#">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </NavLink>
                        </div>

                    </div>

                    <ul className="grid-item">

                        <h4 className="item-heading">Our Link</h4>

                        <li className="list-item">
                            <NavLink to="#home">Home</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="#about">About Us</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="training.html">Summer training</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="internship.html">Internship</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="https://certificates.geekstacks.com">Certificate</NavLink>
                        </li>

                    </ul>

                    <ul className="grid-item">

                        <h4 className="item-heading">Other Link</h4>

                        <li className="list-item">
                            <NavLink to="#">Instructor</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="#">FAQ</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="#">Event</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="#">Privacy Policy</NavLink>
                        </li>

                        <li className="list-item">
                            <NavLink to="#">Term & Condition</NavLink>
                        </li>

                    </ul>

                    <div className="grid-item">

                        <h4 className="item-heading">Subscribe Now</h4>

                        <div className="wrapper">
                            <input type="text" name="subscribe" placeholder="Email Address" />

                            <button className="send-btn">
                                <ion-icon name="paper-plane"></ion-icon>
                            </button>
                        </div>

                    </div>

                </div>

                <p className="copyright">
                    Copyright © 2022 <NavLink to="#">GeekStacks</NavLink>. All rights reserved.
                </p>

            </footer>

        </>
    )
}

export default Footer