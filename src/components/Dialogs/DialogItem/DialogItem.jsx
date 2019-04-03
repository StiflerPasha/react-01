import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog_item}>
            <img src={props.ava} alt=""/>
            <NavLink
                to={path}
                activeClassName={classes.active}
            >{props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;