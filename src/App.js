import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import WindowSize from "./components/WindowSize";
import UsersLoader from "./components/UsersLoader";
import StopWatch from "./components/StopWatch";
import SignInForm from "./components/forms/SignInForm";
import PageNotFound from "./pages/PageNotFound";
import Error from "./components/Error";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          Site
          <nav>
            <ul>
              <li>
                <Link to="/">users loader</Link>
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
                <ul>
                  <li>
                    <Link to="/cabinet/error">error</Link>
                  </li>
                  <li>
                    <Link to="/cabinet/spinner">spinner</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<UsersLoader />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/resize" element={<WindowSize />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cabinet/" element={<Cabinet />}>
            <Route path="error" element={<Error />} />
            <Route path="spinner" element={<Spinner />} />
          </Route>
        </Routes>
        <footer>@2022</footer>
      </BrowserRouter>
    </>
  );
};

const Cabinet = () => {
  return (
    <>
      <h1>Cabinet</h1>
      <ul>
        <li>
          <Link to="/cabinet/error">error</Link>
        </li>
        <li>
          <Link to="/cabinet/spinner">spinner</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default App;
