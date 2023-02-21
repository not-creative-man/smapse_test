import React from "react";
import big from '../pics/big-girl.png'
import '../styles/Banner/image-wrapper/image-wrapper.css'
import '../styles/Banner/image-wrapper/__image/__image.css'

class Image extends React.Component{

    render(){
        return(
            <div className="banner__image-wrapper">
                <img className="banner__image" src={big} alt="big-girl" />
            </div>
        )
    }
}

export default Image;