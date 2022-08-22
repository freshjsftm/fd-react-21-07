import React, { useReducer, useEffect } from "react";
import { loadChat } from "../../api";
import Error from "../Error";
import reducer from "./reducer";
import CONSTANTS from "../../constants";
const { CHAT_ACTIONS } = CONSTANTS;

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    messages: [],
    error: null,

  });

  useEffect(() => {
    
    loadChat()
      .then((data) =>
        dispatch({ type: CHAT_ACTIONS.DATA_RESPONSE_SUCCESS, data })
      )
      .catch((error) =>
        dispatch({ type: CHAT_ACTIONS.DATA_RESPONSE_ERROR, error })
      );
  }, []);

  return (
    <div>
      {state.error && <Error />}
      <h1>Chat:</h1>
      {state.messages.map((message) => (
        <article key={message.id}>
          <h2>author: {message.author.name}</h2>
          <p>{message.body}</p>
        </article>
      ))}
    </div>
  );
};

export default Chat;
