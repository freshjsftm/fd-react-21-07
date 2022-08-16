import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FuncStopWatch from "./components/FuncStopWatch";
import HomePage from "./pages/HomePage";
import { UserContext } from "./contexts";
import UserCard from "./components/UserCard";

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Elon Musk",
    fname: "Elon",
    lname: "Musk",
    isSelected: false,
  });
  const [theme, setTheme] = useState(true);
  const handlerTheme = ()=>{setTheme(!theme)}
  return (
    <div style={{backgroundColor:(theme?'#fff':'#222'), color:(theme?'#222':'#fff')}}>
      <UserContext.Provider value={[user, setUser]}>
        <button onClick={handlerTheme}>switch theme</button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/usercard" element={<UserCard />} />
            <Route path="/func" element={<FuncStopWatch />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};
export default App;
