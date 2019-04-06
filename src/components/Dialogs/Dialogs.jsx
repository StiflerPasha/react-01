import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";

//TODO Dialogs Container

const Dialogs = (props) => {
    debugger;
    let state = props.store.getState();
    let dialogsElements = state.friends
        .map(d => <DialogItem id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = state.dialogsPage.messages
        .map(m => <Message msg={m.msg}/>);

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (event) => {
       let body = event.currentTarget.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
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