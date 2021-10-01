import React, { useState } from 'react';
import { HeartIcon } from './Heart.styles';


const Heart = ({ ...props }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleClick = () => {
        setIsFavorite(prev => !prev);
    }

    return (
        <HeartIcon {...props} onClick={handleClick} fill={isFavorite ? "pink" : "white"} />
    )
}

export default Heart;
