import { eventChannel } from "redux-saga";
export default function eventNetwork() {
    return eventChannel((emitter) => {
        const updateOfflineNetwork = () => {
            window.addEventListener("offline", function (e) {
                console.log("offline");
                return emitter({
                    type: "LISTEN_NETWORK",
                    data: window.navigator.onLine,
                });
            });
        };
        const updateOnlineNetwork = () => {
            window.addEventListener("online", function (e) {
                console.log("online");
                return emitter({
                    type: "LISTEN_NETWORK",
                    data: window.navigator.onLine,
                });
            });
        };
        updateOfflineNetwork();
        updateOnlineNetwork();
        return () => {
            window.removeEventListener("offline", updateOfflineNetwork);
            window.removeEventListener("online", updateOnlineNetwork);
        };
    });
}
