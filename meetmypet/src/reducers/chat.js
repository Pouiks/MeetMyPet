import {
    CHANGE_MESSAGE,
    ADD_MESSAGE,
    SAVE_MESSAGES
} from '../actions/chat';

const initialState = {
    messages: null,
    user:"",
    content : {
      content: "",
    }
    
};

const ChatReducer = (state = initialState, action) => {
switch (action.type){

    case CHANGE_MESSAGE:
        return {
            ...state,
            content : {
              ...state.content,
              content: action.currentMessage,
            }
            
        };
    case ADD_MESSAGE:
      const newMessage = {
        content: action.message,
        name: action.author,
        image: action.image,
        owner: true,
        }
      return {
        content : {
          content: "",
        },
        messages: [
          ...state.messages,
          newMessage,
        ],
      };
      case SAVE_MESSAGES :
        return {
          ...state,
          messages: action.messages
        }
    default: 
    return state;
}
}


export default ChatReducer ;