import React from "react";
import '../styles/Approdable/text-wrapper/text-wrapper.css'
import '../styles/Approdable/text-wrapper/__hr/__hr.css'
import '../styles/Approdable/text-wrapper/__text/__text.css'
import '../styles/Approdable/text-wrapper/error-message/error-message.css'
import '../styles/Approdable/text-wrapper/form/__subscribe-button/__subscribe-button.css'
import '../styles/Approdable/text-wrapper/form/__subscribe-input/__subscribe-input.css'

class ApprodableText extends React.Component{

    render(){
        return(
            <div className="approdable__text-wrapper">
                <div className="approdable__hr"></div>
                <h2>Approdable Packages</h2>
                <p className="text approdable__text">Problems trying to resolve the conflict between <span className="nowrap">the two major</span> realms of Classical physics: <span className="nowrap">Newtonian mechanics</span></p>
                <div className="approdable__learn-more-button">
                    <a href="#learn-more" className="link-button approdable__link-button">
                        <span>Learn More <span>&gt;</span></span>
                    </a>
                </div>
                <form id="approdable__form" className="approdable__form">
                    <input className="approdable__subscribe-input" type="text" name="subscription" placeholder="Subscribe: type your email" id="subscribe-input"/>
                    <button className="active-button approdable__subscribe-button" id="subscribe-button" type="submit">Subscribe</button>
                </form>
                <div className="approdable__error">
                    <span className="approdable__error-message" id="error-message">Введен неверный формат почты!</span>
                </div>

            </div>
        )
    }
}

export default ApprodableText;