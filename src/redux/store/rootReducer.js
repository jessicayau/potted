import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../user/userSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const rootReducer = combineReducers({
    user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
