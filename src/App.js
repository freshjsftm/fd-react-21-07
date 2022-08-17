import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FuncStopWatch from "./components/FuncStopWatch";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext } from "./contexts";
import UserCard from "./components/UserCard";
import CONSTANTS from "./constants";
const {THEMES} = CONSTANTS;
const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Elon Musk",
    fname: "Elon",
    lname: "Musk",
    isSelected: false,
  });
  const themeArrState = useState(THEMES.LIGHT);
  return (
    <ThemeContext.Provider value={themeArrState}>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/usercard" element={<UserCard />} />
              <Route path="/func" element={<FuncStopWatch />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
export default App;
