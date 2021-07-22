import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Connection from "./Components/Connection/Connection";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";
export default function App() {
    const dispatch = useDispatch();
    const network = useSelector((state) => {
        return state.channelStatus;
    });

    useEffect(() => {
        dispatch({ type: "LISTEN_NETWORK", values: network });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [network]);
    return (
        <div>
            <Connection />
            <div className="wrapper">
                <header>Event Channel </header>
                <Input />
                <List />
            </div>
        </div>
    );
}
