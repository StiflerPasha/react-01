import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
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

const Message = (props) => {
    return (
        <div className={classes.message}
        >{props.msg}
        </div>
    );
};

const Dialogs = () => {
    let dialogs = [
        {id: "1", name: "Pasha"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "John"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Smith"},
        {id: "6", name: "Valera"},
    ];

    let messages = [
        {id: "1", msg: "Hi"},
        {id: "2", msg: "How are you?"},
        {id: "3", msg: "Yo man!"},
    ];


    let dialogsElements = dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <Message msg={m.msg}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <ul className={classes.dialog}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={classes.messages_items}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;