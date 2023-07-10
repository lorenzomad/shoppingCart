import React from "react";
import {Link} from "react-router-dom";


const NavigationBar = ({inStore, cart = []}) => {

    const calculateTotal = (cart) => {
        var total = cart.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.cost * currentValue.quantity);
        }, 0)
        return total
    }

    const totalCost = calculateTotal(cart)

    return (
        <nav className="navigation">
            <h1> BuyYourThing! </h1>
            <Link to="/"> Home </Link>    
            <Link to="/store"> Store </Link>
            {inStore ? (
                <div>
                    <h1>${ totalCost} </h1>
                    <button>Buy</button>
                </div>
            ) : <></>}
        </nav>
    )
}

export default NavigationBar