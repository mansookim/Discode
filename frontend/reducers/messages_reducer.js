import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";

const MessagesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      if (!action.res.messages) return state;
      return action.res.messages;
    case RECEIVE_CONVERSATION:
      if (!action.res.messages) return state;
      return action.res.messages;
    default:
      return state;
  }
}

export default MessagesReducer;
