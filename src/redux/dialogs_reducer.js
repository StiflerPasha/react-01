const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
	 messages: [
			{id: 1, msg: "Hi"},
			{id: 2, msg: "How are you?"},
			{id: 3, msg: "Yo man!"},
	 ],
	 newMessagesBody: "",
};

const dialogsReducer = (state = initialState, action) => {
	 switch (action.type) {
			case SEND_MESSAGE: {
				 let newMsg = {
						id: state.messages.length + 1,
						msg: state.newMessagesBody
				 };
				 return {
						...state,
						messages: [...state.messages, newMsg],
						newMessagesBody: ""
				 }
			}
			case UPDATE_NEW_MESSAGE_BODY: {
				 return {
						...state,
						newMessagesBody: action.body
				 }
			}
			default:
				 return state;
	 }
};

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;