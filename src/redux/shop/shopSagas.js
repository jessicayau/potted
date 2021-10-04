import { takeLatest, all, call, put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB, getCollectionArray } from "../../firebase/firebase.utils";
import {
    fetchProductsFailed,
    fetchProductsStart,
    fetchProductsSuccess,
} from "./shopSlice";

export function* fetchProductsAsync() {
    try {
        const collectionRef = collection(firestoreDB, "products");
        const collectionSnapshot = yield getDocs(collectionRef);
        const products = yield call(getCollectionArray, collectionSnapshot);
        yield put(fetchProductsSuccess(products));
    } catch (error) {
        yield put(fetchProductsFailed(error.message));
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(fetchProductsStart.type, fetchProductsAsync);
}

export function* shopSagas() {
    yield all([call(onFetchProductsStart)]);
}
