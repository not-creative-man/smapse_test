import React from "react";
import Image from "./Image";
import '../styles/Banner/button-container/button-container.css'
import '../styles/Banner/button-container/__button/__button.css'
import '../styles/Banner/button-container/__button/__button-wrapper/__button-wrapper.css'
import '../styles/Banner/button-container/__button/__button-wrapper/__button-text/__button-text.css'
import '../styles/Banner/button-container/learn-more-button/learn-more-button.css'
import '../styles/Banner/button-container/learn-more-button/__learn-more-button-text/__learn-more-button-text.css'
import '../styles/Banner/container/container.css'
import '../styles/Banner/text-wrapper/text-wrapper.css'

class BannerBack extends React.Component{

    render(){
        return(
            <div className="banner__container">
                <div className="banner__text-wrapper">
                    <h5>Online training</h5>
                    <h1>25K+ students trust us</h1>
                    <h4>Our goal is to make online education work <span className="nowrap">for everyone</span></h4>
                    <div className="banner__button-container">
                        <button className="button active-button banner__button">
                            <div className="banner__button-wrapper">
                                <span className="banner__button-text">Get Quote Now</span>
                            </div>
                        </button>
                        <button className="button banner__learn-more-button banner__button">
                            <div className="banner__button-wrapper">
                                <span className="banner__learn-more-button-text">Learn More</span>
                            </div>
                        </button>
                    </div>
                </div>
                <Image />
            </div>
        )
    }
}

export default BannerBack;