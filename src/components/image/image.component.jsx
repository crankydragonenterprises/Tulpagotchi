import React from "react";

function CustomImage({sourceURI},{altText}, height) {
    return (
        <div className={`image-container-${height}`}>
            <img src={sourceURI} alt={altText}/>
        </div>
    )
}

export default CustomImage;