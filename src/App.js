import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
import { useClicker } from "./hooks";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
const { THEMES } = CONSTANTS;
const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Elon Musk",
    fname: "Elon",
    lname: "Musk",
    isSelected: false,
  });
  const themeArrState = useState(THEMES.LIGHT);
  const count = useClicker();
  return (
    <ThemeContext.Provider value={themeArrState}>
      <UserContext.Provider value={[user, setUser]}>
        <p> Count: {count}</p>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SignUp</NavLink>
              </li>
              <li>
                <NavLink to="/chat">Chat</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
export default App;
