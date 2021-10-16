import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectFavorites,
    addToFavorites,
    removeFromFavorites,
} from "../../redux/favorite/favoriteSlice";
import { HeartIcon } from "./FavoriteIcon.styles";

const FavoriteIcon = ({ item, ...props }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();
    const existingFavorite = favorites.find(
        (product) => product.id === item.id
    );

    const toggleFavoriteHandler = () => {
        if (existingFavorite) {
            setIsFavorite(false);
            dispatch(removeFromFavorites(item));
        } else {
            setIsFavorite(true);
            dispatch(addToFavorites(item));
        }
    };

    useEffect(() => {
        if (existingFavorite) {
            setIsFavorite(true);
        }
    }, [existingFavorite]);

    return (
        <HeartIcon
            {...props}
            fill={isFavorite ? "pink" : "white"}
            role="img"
            title="favorite icon"
            onClick={toggleFavoriteHandler}
        />
    );
};

export default FavoriteIcon;
