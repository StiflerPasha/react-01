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
            /*let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.newMessagesBody = "";
            stateCopy.messages.push(newMsg);
            return stateCopy;*/
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessagesBody: action.body
            }
            /*let stateCopy = {...state};
            stateCopy.newMessagesBody = action.body;
            return stateCopy;*/
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;