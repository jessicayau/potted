import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../user/userSlice";
import shopReducer from "../shop/shopSlice";
import cartReducer from "../cart/cartSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart"],
};

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
