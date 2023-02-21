import React from "react";
import Card from "./Card";
import computer from '../pics/computer.png';
import telescope from '../pics/telescope.png';
import tube from '../pics/tube.png';
import '../styles/Banner/cards/cards.css'

const hArray = [
    'Certified Teacher',
    '2,769 online courses',
    '2,769 online courses'
]

const texts = [
    'The gradual accumulation of information about atomic and small-scale behaviour...',
    'The gradual accumulation of information about atomic and small-scale behaviour...',
    'The gradual accumulation of information about atomic and small-scale behaviour...'
]

class Cards extends React.Component{

    render(){
        return(
            <div className="banner__cards">
                <Card image={computer} alt='computer' h={hArray[0]} text={texts[0]} />
                <Card image={telescope} alt='telescope' h={hArray[1]} text={texts[1]} />
                <Card image={tube} alt='tube' h={hArray[2]} text={texts[2]} />
            </div>
        )
    }
}

export default Cards;