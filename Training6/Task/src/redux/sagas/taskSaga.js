import { take, put, call, takeEvery, select, delay } from "redux-saga/effects";
import eventNetwork from "./eventChannel";
import { ACTION_NAMES } from "../action/ActionNames";
export function* listenNetwork() {
    const channel = yield call(eventNetwork);
    while (true) {
        const data = yield take(channel);
        yield put({
            type: ACTION_NAMES.CHANGE_NETWORK_STATUS,
            data: {
                channelStatus: data.data,
            },
        });
    }
}
function* handleSubmit(action) {
    try {
        yield delay(2000);
        const status = ["error", "complete"];
        const nextStatus = status[Math.floor(Math.random() * status.length)];
        yield put({
            type: ACTION_NAMES.CHANGE_TASK_STATUS_SUCCESS,
            data: {
                task: action.data.task,
                status: nextStatus,
            },
        });
    } catch (error) {}
}
export function* handleSubmitWatcher() {
    yield takeEvery(
        (action) =>
            (action.type === ACTION_NAMES.CHANGE_TASK_STATUS_SUCCESS ||
                action.type === ACTION_NAMES.CHANGE_TASK_STATUS) &&
            action.data.status === "submitting",
        handleSubmit
    );
}
function* checkIfSubmitTask(action) {
    const network = yield select((state) => state.channelStatus);
    if (action.data.status === "ready" && network) {
        yield put({
            type: ACTION_NAMES.CHANGE_TASK_STATUS_SUCCESS,
            data: {
                task: action.data.task,
                status: "submitting",
            },
        });
    }
}
export function* checkIfSubmitTaskWatcher() {
    yield takeEvery(
        (action) =>
            action.type === ACTION_NAMES.CHANGE_TASK_STATUS &&
            action.data.status === "ready",
        checkIfSubmitTask
    );
}
function* checkIfSubmitReadyTask(action) {
    if (action.data.channelStatus) {
        const readyTasks = yield select((state) =>
            state.task.filter(({ status }) => status === "ready")
        );
        for (let i = 0; i < readyTasks.length; i += 1) {
            yield put({
                type: ACTION_NAMES.CHANGE_TASK_STATUS,
                data: {
                    task: readyTasks[i].task,
                    status: "submitting",
                },
            });
        }
    }
}
export function* checkIfSubmitReadyTaskWatcher() {
    yield takeEvery(ACTION_NAMES.CHANGE_NETWORK_STATUS, checkIfSubmitReadyTask);
}
