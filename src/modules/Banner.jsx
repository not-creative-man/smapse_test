import React from "react";
import Cards from "./Cards";
import BannerBack from "./BannerBack";


class Banner extends React.Component{

    render(){
        return(
            <div className="banner">
                <BannerBack />
                <Cards />    
            </div>
        )
    }
}

export default Banner;