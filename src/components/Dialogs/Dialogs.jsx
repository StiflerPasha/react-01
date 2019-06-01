import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {

	 let dialogsElements = props.friends
		 .map(d => <DialogItem key={d.id} id={d.id} name={d.name} ava={d.ava}/>);
	 let messagesElements = props.messages
		 .map(m => <Message key={m.id} msg={m.msg}/>);

	 let onSendMessageClick = () => {
			props.sendMessageCreator();
	 };

	 let onNewMessageChange = (event) => {
			let body = event.currentTarget.value;
			props.updateNewMessageBodyCreator(body);
	 };

	 return (
		 <div className={classes.dialogs}>
				<div>
					 {dialogsElements}
				</div>
				<div>
					 <div>{messagesElements}</div>
					 <div>
							<div>
								 <textarea
									 onChange={onNewMessageChange}
									 placeholder="Enter your message"
									 value={props.newMessagesBody}>
								 </textarea>
							</div>
							<div>
								 <button onClick={onSendMessageClick}>Send</button>
							</div>
					 </div>
				</div>
		 </div>
	 );
};

export default Dialogs;