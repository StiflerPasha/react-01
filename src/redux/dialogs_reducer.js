const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            state.newMessagesBody = "";
            state.messages.push({id: state.messages.length + 1, msg: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body;
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;