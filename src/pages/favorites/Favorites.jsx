import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorite/favoriteSlice";
import ProductCard from "../../components/productCard/ProductCard";
import {
    FavoriteProductsContainer,
    FavoritesContainer,
    FavoritesTitle,
    EmptyMessage,
} from "./Favorites.styles";

const Favorites = () => {
    const favoritesList = useSelector(selectFavorites);

    return (
        <FavoritesContainer>
            <FavoritesTitle>Favorites</FavoritesTitle>
            {favoritesList.length < 1 ? (
                <EmptyMessage>
                    Your favorites list is empty. Keep browsing!
                </EmptyMessage>
            ) : (
                <FavoriteProductsContainer>
                    {favoritesList.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </FavoriteProductsContainer>
            )}
        </FavoritesContainer>
    );
};

export default Favorites;
