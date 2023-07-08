import React from "react";
import {Link} from "react-router-dom";


const NavigationBar = () => {
    return (
        <nav className="navigation">
            <h1> BuyYourThing! </h1>
            <Link to="/"> Home </Link>    
            <Link to="/store"> Store </Link>
        </nav>
    )
}

export default NavigationBar