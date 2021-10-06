import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../user/userSlice";
import shopReducer from "../shop/shopSlice";
import cartReducer from "../cart/cartSlice";
import favoriteReducer from "../favorite/favoriteSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart", "favorite"],
};

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
