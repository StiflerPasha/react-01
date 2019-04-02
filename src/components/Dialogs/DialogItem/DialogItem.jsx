import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li>
            <NavLink
                to={path}
                activeClassName={classes.active}
            >{props.name}
            </NavLink>
        </li>
    );
};

export default DialogItem;