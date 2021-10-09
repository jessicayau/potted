import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
import { toggleCartHidden, selectCartItems, clearAllFromCart } from '../../redux/cart/cartSlice.js';
import { CartDropdownContainer, GoToCheckoutBtn, EmptyMessageContainer, CartItemsContainer, CloseCartBtn, ClearCartBtn } from './Cart.styles';

const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(selectCartItems);

    const cartToggleHandler = () => {
        dispatch(toggleCartHidden())
    }

    const clearCartHandler = () => {
        dispatch(clearAllFromCart())
    }

    const goToCheckoutHandler = () => {
        history.push('/review');
        dispatch(toggleCartHidden());
    }

    return (
        <CartDropdownContainer>
            <CloseCartBtn onClick={cartToggleHandler} />
            { cartItems.length > 0 && <ClearCartBtn onClick={clearCartHandler}>Clear Cart</ClearCartBtn>}
            <CartItemsContainer>
                {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <GoToCheckoutBtn onClick={goToCheckoutHandler}>Proceed To Checkout</GoToCheckoutBtn>
        </CartDropdownContainer>
    );
};

export default Cart;