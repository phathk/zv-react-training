import { all } from "redux-saga/effects";
import {
    listenNetwork,
    handleSubmitWatcher,
    checkIfSubmitTaskWatcher,
    checkIfSubmitReadyTaskWatcher,
} from "./taskSaga";
export default function* rootSaga() {
    yield all([
        listenNetwork(),
        handleSubmitWatcher(),
        checkIfSubmitTaskWatcher(),
        checkIfSubmitReadyTaskWatcher(),
    ]);
}
