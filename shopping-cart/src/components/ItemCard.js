import React, { useState } from "react";
import ImageCard from "./ImageCard";

// item is an object with the props:
// name, image, shortDescription, cost
const ItemCard = ({item, addToCart}) => {

    const [quantity, setQuantity] = useState(0)

    const size = { width: '200px', height:'200px'}
    return (
        <div className="item_card">
            <h3>{item.name}</h3>
            <ImageCard content={item.image} altText={item.name} size={size}/>
            <p>{item.shortDescription}</p> 
            <p>${item.cost}</p>
            <form onSubmit={e => {
                e.preventDefault();
                addToCart({...item, quantity: quantity});
                }
            }>
                <input 
                type="number" 
                defaultValue={0} 
                onChange={e => {setQuantity(e.target.value)}} /> 
               
                <input type="submit" value="Add to cart" /> 
            </form>
        </div>
    )
}

export default ItemCard