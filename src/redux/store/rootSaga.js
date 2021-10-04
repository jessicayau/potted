import { all, call } from "redux-saga/effects";
import { userSagas } from "../user/userSagas";
import { shopSagas } from "../shop/shopSagas";

export default function* rootSaga() {
    yield all([call(userSagas), call(shopSagas)]);
}
