import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderTask from "./components/HeaderTask";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage';
const App = () => {
  return <BrowserRouter>
    <HeaderTask />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
  </BrowserRouter>;
};
export default App;
