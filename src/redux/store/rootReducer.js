import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../user/userSlice";
import shopReducer from "../shop/shopSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "shop"],
};

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
