import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  const {
    type,
    data: { users, messages },
  } = action;
  switch(type){
    case "DATA_RESPONSE_SUCCESS":{
      //map userslink
      const usersLinkMap = new Map();
      users.forEach((user)=>usersLinkMap.set(user.id, user));
      const messagesWithUser = messages.map((message)=>{
        const newMessageWithUser = {
          ...message,
          author:usersLinkMap.get(message.userId)
        }
        return newMessageWithUser;
      })
      const newState={
        ...state,
        users,
        messages: messagesWithUser
      };
      return newState;
    }
    default: return state;
  }
};

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, { users: [], messages: [] });

  useEffect(() => {
    fetch("/chat.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DATA_RESPONSE_SUCCESS", data }));
    //.catch((error) => dispatch({ type: "DATA_RESPONSE_ERROR", error }));
  }, []);

  return (
    <div>
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
