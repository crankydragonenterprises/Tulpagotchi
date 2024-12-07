import React from "react";

function CustomImage({sourceURI, altText, height }) {
    return (
        <div className={'image-container'}>
            <img src={sourceURI} alt={altText} height={height}/>
        </div>
    )
}

export default CustomImage;