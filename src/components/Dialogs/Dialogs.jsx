import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import photo from "../../assets/images/ava.jpg"

const Dialogs = (props) => {

	 const dialogsElements = props.friends
		 .map(d => <DialogItem key={d.id} id={d.id} name={d.name} ava={d.photos.small || photo}/>);

	 const messagesElements = props.messages
		 .map(m => <Message key={m.id} msg={m.msg}/>);

	 const onSendMessageClick = () => {
			props.sendMessage();
	 };

	 const onNewMessageChange = (event) => {
			let body = event.currentTarget.value;
			props.updateNewMessageBody(body);
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