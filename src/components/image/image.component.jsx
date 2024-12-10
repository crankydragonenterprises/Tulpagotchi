import React from "react";

import './image.styles.scss';

function CustomImage({id, sourceURI, altText, height }) {
    return (
        <div className={'image-container'}>
            <img key={id} src={sourceURI} alt={altText} height={height}/>
        </div>
    )
}

export default CustomImage;