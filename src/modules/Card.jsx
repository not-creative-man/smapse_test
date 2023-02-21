import React from "react";
import '../styles/Banner/cards/card/card.css'
import '../styles/Banner/cards/card/__card-wrapper/__card-wrapper.css'
import '../styles/Banner/cards/card/__card-wrapper/__horizontal-rule/__horizontal-rule.css'
import '../styles/Banner/cards/card/__card-wrapper/__text/__text.css'

class Card extends React.Component{
    render(){
        return(
            <div className="banner__card">
                <div className="banner__card-wrapper">
                    <img src={this.props.image} alt={this.props.alt} />
                    <h3>{this.props.h}</h3>
                    <div className="card__horizontal-rule"></div>
                    <p className="card__text">{this.props.text}</p>
                </div>
            </div>
        );
    };
}

export default Card;