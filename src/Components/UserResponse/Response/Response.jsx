import s from "../UserResponse.module.css";
import React from "react";

const Response = (props) => {
    return <div className={s.item}>{props.response},{props.id}</div>
};

export default Response;