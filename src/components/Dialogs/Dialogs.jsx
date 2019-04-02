import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.messages.map(m => <Message msg={m.msg}/>);


    return (
        <div className={classes.dialogs}>
            <div>
                <ul>
                    {dialogsElements}
                </ul>
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;