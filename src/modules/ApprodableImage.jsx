import React from "react";
import little from '../pics/lil-girl.png'
import '../styles/Approdable/image-wrapper/image-wrapper.css'

class ApprodableImage extends React.Component{

    render(){
        return(
            <div className="approdable__image-wrapper">
                <img src={little} alt="lil-girl" />
            </div>
        )
    }
}

export default ApprodableImage;