import React from "react";
import NavigationBar from "./NavigationBar";
import ItemCard from "./ItemCard";

const Store = () => {

    const item1 = {
        name: 'thingy',
        image: 'https://images.squarespace-cdn.com/content/v1/595e500c78d171779ffdcfef/1610623731416-4QVJQVG47YYZL3V5BFGJ/ITEM-01.jpg?format=1500w',
        shortDescription: 'random item for you'
    }

    return (
        <div className="store">
            <NavigationBar inStore={true} />
            <h1>Store page</h1>
            <div className="store_window">
                <ItemCard item= {item1}/>
            </div>
        </div>
    )
}

export default Store