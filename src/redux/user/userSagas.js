import { takeLatest, put, all, call } from "redux-saga/effects";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc } from "firebase/firestore";
import {
    auth,
    createUserProfileDoc,
    getCurrentUser,
    signInWithGoogle,
} from "../../firebase/firebase.utils";
import {
    checkUserSession,
    loginFailed,
    loginSuccess,
    emailLoginStart,
    googleLoginStart,
    signOutFailed,
    signOutStart,
    signOutSuccess,
    signUpStart,
    signUpFailed,
} from "./userSlice";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDoc,
            userAuth,
            additionalData
        );
        const userSnapshot = yield getDoc(userRef);
        yield put(
            loginSuccess({
                id: userSnapshot.id,
                displayName: userSnapshot.data().displayName,
                email: userSnapshot.data().email,
            })
        );
    } catch (error) {
        yield put(loginFailed(error.code));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(loginFailed(error.code));
    }
}

export function* loginWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(loginFailed(error.code));
    }
}

export function* loginWithGoogle() {
    try {
        const { user } = yield signInWithGoogle();
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(loginFailed(error.code));
    }
}

export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(user);
        yield getSnapshotFromUserAuth(user, { displayName });
    } catch (error) {
        yield put(signUpFailed(error.code));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error.code));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(checkUserSession.type, isUserAuthenticated);
}

export function* onEmailLoginStart() {
    yield takeLatest(emailLoginStart.type, loginWithEmail);
}

export function* onGoogleLoginStart() {
    yield takeLatest(googleLoginStart.type, loginWithGoogle);
}

export function* onSignOutStart() {
    yield takeLatest(signOutStart.type, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(signUpStart.type, signUp);
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onEmailLoginStart),
        call(onGoogleLoginStart),
        call(onSignUpStart),
    ]);
}
