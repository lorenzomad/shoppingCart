import React from "react";
import {Link} from "react-router-dom";


const NavigationBar = ({inStore}) => {
    return (
        <nav className="navigation">
            <h1> BuyYourThing! </h1>
            <Link to="/"> Home </Link>    
            <Link to="/store"> Store </Link>
            {inStore ? (
                <div>
                    <h1>Items Number</h1>
                    <button>Buy</button>
                </div>
            ) : <></>}
        </nav>
    )
}

export default NavigationBar