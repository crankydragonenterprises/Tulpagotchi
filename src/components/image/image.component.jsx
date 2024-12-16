import React from "react";

import './image.styles.scss';
import { useNavigate } from "react-router-dom";

function CustomImage({id, sourceURI, altText, height, dragon }) {
    const navigate = useNavigate();
    return (
        <div className={'image-container'}>
            <img key={id} src={sourceURI} alt={altText} height={height} onClick={() => navigate(dragon.id)}/>
        </div>
    )
}

export default CustomImage;