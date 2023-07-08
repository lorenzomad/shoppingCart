import React from "react";

const ImageCard = ({content, altText}) => {
    return (
        <div className="card">
            <img src={content} alt={altText}></img>
        </div>
    )
}

export default ImageCard