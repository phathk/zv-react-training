import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskStatus } from "../../redux/action/TaskAction";
const NEXT_STATUS = {
    draft: "ready",
    error: "ready",
};
export default function List() {
    const tasks = useSelector((state) => {
        return state.task;
    });
    const dispatch = useDispatch();
    const renderTask = () => {
        return tasks?.map((item, index) => {
            return (
                <li key={index}>
                    {item.task} -{" "}
                    <span style={{ color: "tomato" }}>{item.status}</span>
                    {item.status !== "complete" && (
                        <span
                            className="icon"
                            onClick={() => {
                                const data = {
                                    task: item.task,
                                    status: NEXT_STATUS[item.status],
                                };
                                if (NEXT_STATUS[item.status]) {
                                    dispatch(changeTaskStatus(data));
                                }
                            }}
                        >
                            <i className="fas fa-trash"></i>
                        </span>
                    )}
                </li>
            );
        });
    };
    return <ul className="todoList">{renderTask()}</ul>;
}
