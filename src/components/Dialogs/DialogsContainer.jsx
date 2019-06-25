import {sendMessage, updateNewMessageBody} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	 return {
			friends: state.friends,
			messages: state.dialogsPage.messages,
			newMessagesBody: state.dialogsPage.newMessagesBody,
	 }
};

const DialogsContainer = connect(mapStateToProps,
	{sendMessage, updateNewMessageBody})(Dialogs);

export default DialogsContainer;