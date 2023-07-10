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
            <h1 className="logo"> BuyYourThing! </h1>
            <ul>
                <li><Link to="/"> Home </Link></li>    
                <li><Link to="/store"> Store </Link></li>
                {inStore ? (
                    <li><div>
                        <h1>${ totalCost} </h1>
                        <button>Buy</button>
                    </div></li>
                ) : <></>}
            </ul>
        </nav>
    )
}

export default NavigationBar