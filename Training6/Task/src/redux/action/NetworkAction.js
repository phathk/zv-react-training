import { ACTION_NAMES } from "./ActionNames";

export const changeNetworkStatus = (data) => {
    return { type: ACTION_NAMES.CHANGE_NETWORK_STATUS, data };
};
