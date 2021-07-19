import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { addTask } from "../../redux/action/TaskAction";
export default function Input() {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Formik
                initialValues={{ task: "", status: "draft" }}
                onSubmit={(values) => {
                    dispatch(addTask(values));
                }}
            >
                <Form className="inputField">
                    <Field
                        name="task"
                        id="task"
                        type="text"
                        placeholder="Add your new todo"
                    />
                    <button type="submit" defaultValue="Login">
                        <i className="fas fa-plus" />
                    </button>
                </Form>
            </Formik>
        </Fragment>
    );
}
