import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import {
    toggleCartHidden,
    selectCartItems,
    clearAllFromCart,
} from "../../redux/cart/cartSlice.js";
import {
    GoToCheckoutBtn,
    EmptyCartMessage,
    CartItemsContainer,
    CloseCartBtn,
    ClearCartBtn,
    CartOverviewContainer,
} from "./Cart.styles";

const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector(selectCartItems);

    const cartToggleHandler = () => {
        dispatch(toggleCartHidden());
    };

    const clearCartHandler = () => {
        dispatch(clearAllFromCart());
    };

    const goToCheckoutHandler = () => {
        history.push("/review");
        dispatch(toggleCartHidden());
    };

    return (
        <CartOverviewContainer>
            <CloseCartBtn
                title="close cart"
                role="button"
                onClick={cartToggleHandler}
            />
            {cartItems.length > 0 && (
                <ClearCartBtn role="button" onClick={clearCartHandler}>
                    Clear Cart
                </ClearCartBtn>
            )}
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
                )}
            </CartItemsContainer>
            {cartItems.length > 0 && (
                <GoToCheckoutBtn secondaryBtn onClick={goToCheckoutHandler}>
                    Proceed To Checkout
                </GoToCheckoutBtn>
            )}
        </CartOverviewContainer>
    );
};

export default Cart;
