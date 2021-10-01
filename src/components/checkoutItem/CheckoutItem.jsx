import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cartActions';
import { Arrow, CheckoutItemContainer, CheckoutItemData, CheckoutItemImage, CheckoutItemImageContainer, CheckoutItemName, CheckoutItemProduct, CheckoutItemQuantity } from './CheckoutItem.styles';

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item;
    // const dispatch = useDispatch();
    // const clearItemHandler = item => dispatch(clearItemFromCart(item));
    // const addItemHandler = item => dispatch(addItem(item));
    // const removeItemHandler = item => dispatch(removeItem(item))
    const clearItemHandler = () => {
        console.log("clear")
    }

    const addItemHandler = () => {
        console.log("add")
    }

    const removeItemHandler = () => {
        console.log("remove")
    }

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
                    <Arrow onClick={() => removeItemHandler(item)}>&#10094;</Arrow>
                        <span className="value">{quantity}</span>
                    <Arrow onClick={() => addItemHandler(item)}>&#10095;</Arrow>
                </CheckoutItemQuantity>
            </CheckoutItemData>
            <CheckoutItemData>
            <span className="price">${price.toFixed(2)}</span>
            </CheckoutItemData>
            <CheckoutItemData>
            <span className="remove-btn" onClick={() => clearItemHandler(item)}>&#10005;</span>
            </CheckoutItemData>
        </CheckoutItemContainer>
    )
}


export default CheckoutItem;
