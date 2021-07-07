import { put, call, takeEvery } from "redux-saga/effects";
import { ACTION_NAMES } from "../action/ActionNames";
import { login, fetchUsers, fetchUser } from "../../utils/Interceptors";
function* LoginUser(action) {
    try {
        const result = yield call(login, action);
        const data = result.data;
        if (data.error !== "Incorrect password or email") {
            yield put({ type: ACTION_NAMES.LOGIN_USER_SUCCESS, data: data });
            window.location.replace("/home");
        }
    } catch (err) {
        console.error(err);
    }
}
export function* LoginUserWatch() {
    yield takeEvery(ACTION_NAMES.LOGIN_USER, LoginUser);
}
function* getAllUsersInfo(action) {
    try {
        const result = yield call(fetchUsers, action);
        const data = result.data.users;
        yield put({ type: ACTION_NAMES.GET_ALL_USERS_INFO_SUCCESS, data });
    } catch (err) {
        console.error(err);
    }
}

export function* getAllUsersInfoWatch() {
    yield takeEvery(ACTION_NAMES.GET_ALL_USERS_INFO, getAllUsersInfo);
}
function* GetAccountInfo(action) {
    try {
        const result = yield call(fetchUser, action);
        const data = result.data;
        yield put({ type: ACTION_NAMES.GET_ACCOUNT_INFO_SUCCESS, data });
    } catch (err) {
        console.error(err);
    }
}
export function* GetAccountInfoWatcher() {
    yield takeEvery(ACTION_NAMES.GET_ACCOUNT_INFO, GetAccountInfo);
}
