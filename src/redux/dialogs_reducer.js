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