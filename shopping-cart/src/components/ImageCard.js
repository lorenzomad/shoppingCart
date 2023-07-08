import React from "react";

const ImageCard = ({content, altText, size}) => {
    return (
        <div className="card">
            <img 
            src={content} 
            alt={altText}
            style= {{size}} />            
        </div>
    )
}

export default ImageCard