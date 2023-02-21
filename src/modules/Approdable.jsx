import React from "react";
import ApprodableImage from "./ApprodableImage";
import ApprodableText from "./ApprodableText";
import '../styles/Approdable/Approdable.css'

class Approdable extends React.Component{

    render(){
        return(
            <div className="approdable">
                <ApprodableImage />
                <ApprodableText />
            </div>
        )
    }
}

export default Approdable;