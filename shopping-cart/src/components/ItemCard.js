import React from "react";
import ImageCard from "./ImageCard";

// item is an object with the props:
// name, image, shortDescription
const ItemCard = ({item}) => {

    const size = { width: '200px', height:'200px'}
    return (
        <div className="item_card">
            <h3>{item.name}</h3>
            <ImageCard content={item.image} altText={item.name} size={size}/>
            <p>{item.shortDescription}</p> 
        </div>
    )
}

export default ItemCard