import React from "react";
import { useDispatch } from "react-redux";
import {
    addToCart,
    removeFromCart,
    clearFromCart,
} from "../../redux/cart/cartSlice";
import {
    Arrow,
    CheckoutItemContainer,
    CheckoutItemData,
    CheckoutItemImage,
    CheckoutItemImageContainer,
    CheckoutItemName,
    CheckoutItemProduct,
    CheckoutItemQuantity,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    const dispatch = useDispatch();
    const clearItemHandler = (item) => dispatch(clearFromCart(item));
    const addItemHandler = (item) => dispatch(addToCart(item));
    const removeItemHandler = (item) => dispatch(removeFromCart(item));

    return (
        <CheckoutItemContainer className="Checkout-container">
            <CheckoutItemProduct>
                <CheckoutItemImageContainer>
                    <CheckoutItemImage src={imageUrl} alt="item" />
                </CheckoutItemImageContainer>
                <CheckoutItemName>{name}</CheckoutItemName>
            </CheckoutItemProduct>
            <CheckoutItemData>
                <CheckoutItemQuantity>
                    <Arrow
                        role="button"
                        onClick={() => removeItemHandler(item)}
                    >
                        &#10094;
                    </Arrow>
                    <span className="value">{quantity}</span>
                    <Arrow role="button" onClick={() => addItemHandler(item)}>
                        &#10095;
                    </Arrow>
                </CheckoutItemQuantity>
            </CheckoutItemData>
            <CheckoutItemData>
                <span className="price">${price.toFixed(2)}</span>
            </CheckoutItemData>
            <CheckoutItemData>
                <span
                    className="remove-btn"
                    role="button"
                    onClick={() => clearItemHandler(item)}
                >
                    &#10005;
                </span>
            </CheckoutItemData>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
