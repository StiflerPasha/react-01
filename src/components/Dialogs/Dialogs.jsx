import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = props.messages.messages
        .map(m => <Message msg={m.msg}/>);

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (event) => {
       let body = event.currentTarget.value;
       props.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange}
                                   placeholder="Enter your message"
                                   value={props.newMessagesBody}>

                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;