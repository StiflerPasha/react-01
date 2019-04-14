import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (body) => {
       props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    friends={state.friends}
                    messages={state.dialogsPage.messages}
                    newMessagesBody={state.dialogsPage.newMessagesBody}/>
};

export default DialogsContainer;