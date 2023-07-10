import React, {useState} from "react";
import NavigationBar from "./NavigationBar";
import ItemCard from "./ItemCard";

const Store = () => {

    const [cart, setCart] = useState([])

    const addToCart = (newItem) => {
        setCart([...cart, newItem])
    }

    const item1 = {
        name: 'thingy',
        image: 'https://images.squarespace-cdn.com/content/v1/595e500c78d171779ffdcfef/1610623731416-4QVJQVG47YYZL3V5BFGJ/ITEM-01.jpg?format=1500w',
        shortDescription: 'random item for you',
        cost: 10,
    }

    const item2 = {
        name: "other_thing",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSPGe58CefSSy_TvdXnwXsSN5pxYnQ_QU0EZUicoz&s",
        shortDescription: 'This is the other thing you were looking for',
        cost:1.5,
    }

    let items = [item1, item2]

    const itemsList = items.map((element) => {
        return (
            <ItemCard 
                item= {element}
                addToCart={addToCart}/>
        )
    })

    

    return (
        <div className="store">
            <NavigationBar inStore={true} cart={cart} />
            <h1>Store page</h1>
            <div className="store_window">
                {itemsList}
            </div>
        </div>
    )
}

export default Store