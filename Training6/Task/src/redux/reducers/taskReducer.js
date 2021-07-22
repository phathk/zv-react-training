import { initialState } from "../state/state";
import { ACTION_NAMES } from "../action/ActionNames";
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_NAMES.ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.data],
            };
        case ACTION_NAMES.CHANGE_NETWORK_STATUS:
            return {
                ...state,
                channelStatus: action.data.channelStatus,
            };
        case ACTION_NAMES.CHANGE_TASK_STATUS:
            return {
                ...state,
                task: state.task.map((item) => {
                    if (item.task === action.data.task) {
                        return {
                            ...item,
                            status: action.data.status,
                        };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
}
