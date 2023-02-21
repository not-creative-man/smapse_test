import React from "react";
import '../styles/Header/Header.css'
import '../styles/Header/__logo/__logo.css'
import '../styles/Header/__navbar-link/__navbar-link.css'
import '../styles/Header/__arrow/__arrow.css'
import '../styles/Header/__join-us-wrapper/__join-us-wrapper.css'
import '../styles/Header/entry-buttons/entry-buttons.css'
import arrow from '../pics/arrow.png'

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="logo">
                    <h3 className="header__logo">BrandName</h3>
                </div>
                <div className="navbar">
                    <a href="#home" className="header__navbar-link">Home</a>
                    <a href="#product" className="header__navbar-link">Product</a>
                    <a href="#pricing" className="header__navbar-link">Pricing</a>
                    <a href="#contact" className="header__navbar-link">Contact</a>
                </div>
                <div className="entry-buttons">
                    <a href="#login-form" className="link-button header__link-button">Login</a>
                    <button className="button active-button header__join-us">
                        <div className="header__join-us-wrapper">
                            <span className="button-text">JOIN US</span>
                            <img src={arrow} alt="arrow" className="join-us__arrow"/> 
                        </div>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;
