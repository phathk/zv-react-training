import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Connection from "./Components/Connection/Connection";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";
import { useNetwork } from "./hooks/useNetwork";
export default function App() {
    const dispatch = useDispatch();
    const network = useNetwork();

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
