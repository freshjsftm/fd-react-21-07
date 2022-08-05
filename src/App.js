import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import WindowSize from "./components/WindowSize";
import StopWatch from "./components/StopWatch";
import SignInForm from "./components/forms/SignInForm";
import PageNotFound from "./pages/PageNotFound";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
import Cabinet from "./pages/CabinetPage";
import CounterPage from "./pages/CounterPage";
import LoaderPage from './pages/LoaderPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          Site
          <nav>
            <ul>
              <li>
                <Link to="/">loader</Link>
              </li>
              <li>
                <Link to="/stopwatch">stopwatch</Link>
              </li>
              <li>
                <Link to="/signin">sign in</Link>
              </li>
              <li>
                <Link to="/resize">resize</Link>
              </li>
              <li>
                <Link to="/cabinet/">cabinet</Link>
              </li>
              <li>
                <Link to="/counter">counter</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<LoaderPage />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/resize" element={<WindowSize />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/cabinet/" element={<Cabinet />}>
            <Route path="error" element={<Error />} />
            <Route path="spinner" element={<Spinner />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <footer>@2022</footer>
      </BrowserRouter>
    </>
  );
};

export default App;
