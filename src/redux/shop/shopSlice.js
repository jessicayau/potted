import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isFetching: false,
    isLoaded: false,
    errorMessage: undefined,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.isFetching = true;
        },
        fetchProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.isFetching = false;
            state.isLoaded = true;
            state.errorMessage = undefined;
        },
        fetchProductsFailed: (state, action) => {
            state.isFetching = false;
            state.isLoaded = false;
            state.errorMessage = action.payload;
        },
    },
});

// selectors
export const selectProducts = (state) => state.shop.products;
export const selectIsFetching = (state) => state.shop.isFetching;
export const selectIsLoaded = (state) => state.shop.isLoaded;

export const selectBestsellers = createSelector(selectProducts, (products) =>
    products.filter((item) => item.bestseller)
);

// actions
export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailed } =
    shopSlice.actions;

export default shopSlice.reducer;
