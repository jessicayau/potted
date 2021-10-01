import React from 'react';
import { CartItemContainer, ItemDetailsContainer, CartItemImage, Span } from './CartItem.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
       <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
            <ItemDetailsContainer>
                <Span>{name}</Span>
                <Span>
                    {quantity} x ${price.toFixed(2)}
                </Span>
            </ItemDetailsContainer>
        </CartItemContainer> 
    )
}

export default CartItem;