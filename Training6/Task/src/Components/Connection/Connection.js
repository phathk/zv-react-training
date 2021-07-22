import React from "react";
import { useSelector } from "react-redux";

export default function Connection() {
    const network = useSelector((state) => {
        return state.channelStatus;
    });

    return (
        <div
            className="wrapper"
            style={{
                margin: "0",
                maxWidth: "225px",
                position: "fixed",
                top: "0",
                right: "0",
            }}
        >
            Connection Status:{" "}
            {network ? (
                <i className="fa fa-circle" style={{ color: "#3DED97" }}></i>
            ) : (
                <i className="fa fa-circle" style={{ color: "tomato" }}></i>
            )}
        </div>
    );
}
