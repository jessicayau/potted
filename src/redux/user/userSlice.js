import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        checkUserSession() {},
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.error = null;
        },
        loginFailed: (state, action) => {
            state.error = "Incorrect email and/or password";
        },
        emailLoginStart() {},
        googleLoginStart() {},
        signOutStart() {},
        signOutSuccess: (state) => {
            state.currentUser = null;
            state.error = null;
        },
        signOutFailed: (state, action) => {
            state.error = action.payload;
        },
        signUpStart() {},
        signUpFailed: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserError = (state) => state.user.error;

export const {
    checkUserSession,
    loginSuccess,
    loginFailed,
    emailLoginStart,
    googleLoginStart,
    signOutStart,
    signOutSuccess,
    signOutFailed,
    signUpStart,
    signUpFailed,
} = userSlice.actions;

export default userSlice.reducer;
