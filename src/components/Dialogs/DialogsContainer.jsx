import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
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
  {sendMessageCreator,updateNewMessageBodyCreator})(Dialogs);

export default DialogsContainer;