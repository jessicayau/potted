import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialState = {
    cartHidden: true,
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCartHidden: (state) => {
            state.cartHidden = !state.cartHidden;
        },
        addToCart: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = removeItemFromCart(
                state.cartItems,
                action.payload
            );
        },
        clearFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            );
        },
        clearAllFromCart: (state) => {
            state.cartItems = [];
        },
    },
});

// selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartHidden = (state) => state.cart.cartHidden;
export const selectCartItemsTotal = createSelector(
    selectCartItems,
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
);
export const selectCartTotal = createSelector(selectCartItems, (cartItems) =>
    cartItems.reduce(
        (accumulatedTotal, cartItem) =>
            accumulatedTotal + cartItem.quantity * cartItem.price,
        0
    )
);

// actions
export const {
    toggleCartHidden,
    addToCart,
    removeFromCart,
    clearFromCart,
    clearAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
