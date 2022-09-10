import "./App.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Breed from "./components/Breed";
import RandomPic from "./components/RandomPic";

function App() {
  const adminUser = {
    username: "kuldeep",
    password: "kuldeep",
  };

  const [user, setUser] = useState({ username: "" });
  const [style, setStyle] = useState("sidenav conCsshide");
  const [styleopen, setStyleopen] = useState("displayopen");
  const [styleclose, setStyleclose] = useState("displayclose");
  const [styleMcontainer, setStyleMcontainer] = useState("AfterClose");
  const Login = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({
        username: details.username,
      });
    } else {
      alert("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ username: "" });
  };

  const openStyle = () => {
    setStyle("sidenav conCssshow");
    setStyleopen("displayclose");
    setStyleclose("displayopen");
    setStyleMcontainer("AfterOpen");
  };
  const closeStyle = () => {
    setStyle("sidenav conCsshide");
    setStyleopen("displayopen");
    setStyleclose("displayclose");
    setStyleMcontainer("AfterClose");
  };
  return (
    <div className="App">
      {user.username !== "" ? (
        <div className="welcome">
          <div className="welcomehead">
            <div className="burgger_btn">
              <a className={styleopen} href={openStyle} onClick={openStyle}>
                <span>&#9776;</span>
              </a>
              <a className={styleclose} href={closeStyle} onClick={closeStyle}>
                <span>&times;</span>
              </a>
            </div>
            <h2 className="title">
              Welcome, <span>{user.username}</span>
            </h2>
            <button className="logoutbtn" onClick={Logout}>
              Logout
            </button>
          </div>
          <div className="welcomesection">
            <BrowserRouter>
              <div id="mySidenav" class={style}>
                <Link to="/" exact>
                  Breed
                </Link>
                <Link to="/RandomI">Random Image</Link>
              </div>

              <div class={styleMcontainer}>
                <Routes>
                  <Route path="/" element={<Breed />} exact></Route>
                  <Route path="/RandomI" element={<RandomPic />}></Route>
                </Routes>
              </div>
            </BrowserRouter>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}
export default App;
