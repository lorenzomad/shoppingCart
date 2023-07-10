import React, {useState} from "react";
import NavigationBar from "./NavigationBar";
import ItemCard from "./ItemCard";

const Store = () => {

    const item1 = {
        name: 'thingy',
        image: 'https://images.squarespace-cdn.com/content/v1/595e500c78d171779ffdcfef/1610623731416-4QVJQVG47YYZL3V5BFGJ/ITEM-01.jpg?format=1500w',
        shortDescription: 'random item for you',
        cost: 10,
        quantity:0
    }

    const [cart, setCart] = useState([])

    const addToCart = (newItem) => {
        setCart([...cart, newItem])
    }

    return (
        <div className="store">
            <NavigationBar inStore={true} cart={cart} />
            <h1>Store page</h1>
            <div className="store_window">
                <ItemCard 
                item= {item1}
                addToCart={addToCart}/>
            </div>
        </div>
    )
}

export default Store