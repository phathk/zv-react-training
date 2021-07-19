import { ACTION_NAMES } from "./ActionNames";

export const addTask = (data) => {
    return {
        type: ACTION_NAMES.ADD_TASK,
        data,
    };
};

export const changeTaskStatus = (data) => {
    return {
        type: ACTION_NAMES.CHANGE_TASK_STATUS,
        data,
    };
};
