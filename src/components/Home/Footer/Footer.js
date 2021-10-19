import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css';

const facebookIcon = <FontAwesomeIcon className='fs-4 m-2' icon={faFacebook} />
const instagramIcon = <FontAwesomeIcon className='fs-4 m-2' icon={faInstagram} />
const linkedinIcon = <FontAwesomeIcon className='fs-4 m-2' icon={faLinkedin} />
const Footer = () => {
    return (
        <footer className="footer-container bg-light-dark">
            {/* Newsletter section */}
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center ">
                    <div className="col text-light text-uppercase pt-5 pb-5">
                        <small className="">Subscribe To Our</small>
                        <h2>Newsletter</h2>
                    </div>
                    <div className="col d-flex">
                        <input type="email" className="email-input rounded-start" placeholder="Your's Email Please" />
                        <button className="btn-subscribe rounded-end" >Subscribe</button>
                    </div>
                </div>
            </div>
            {/* links and Copyright section */}
            <div className="pt-5 pb-5 bg-heavy-dark">
                <div className='container'>
                    <div className="row justify-content-between">
                        {/* quick links */}
                        <div className='col'>
                            <h5 className="fw-bold text-light">Quick Links</h5>
                            <div className="text-start">
                                <NavLink className="quick-links text-light" to="/home">Home</NavLink>
                                <NavLink className="quick-links text-light" to="/services">Services</NavLink>
                                <NavLink className="quick-links text-light" to="/about">About Us</NavLink>
                                <NavLink className="quick-links text-light" to="/blog"> Blog</NavLink>
                                <NavLink className="quick-links text-light" to="/login"> Sign Up</NavLink>
                            </div>
                        </div>
                        {/* social media icon */}
                        <div className='col'>
                            <h5 className="fw-bold text-light">Contact Us</h5>
                            <div className="text-light">
                                {facebookIcon}
                                {instagramIcon}
                                {linkedinIcon}
                            </div>
                        </div>
                        {/* Copyright icon */}
                        <div className='col'>
                            <h2 className="fw-bold text-light">Natural Life Health Center</h2>
                            <h6 className="text-light"> Copyright &copy; 2021 | All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;