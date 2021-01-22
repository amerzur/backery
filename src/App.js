import logo from "./logo.svg";
import "./App.css";
import axios from "./axios-orders";
import React from "react";
import { useState, Fragment } from "react";
import Anime, { anime } from "react-anime";

function App() {
  const [dark, toggleDarkMode] = useState(false);
  const [falling, fallMailBox] = useState(false);

  function doorClickedHanlder(e) {
    if (dark) {
      alert(" sorry we are closed now 💤!");
    } else {
      axios
        .post("/")
        .then(function(res) {
          alert("order made! \nresult in JSON :" + JSON.stringify(res.data));
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
 
  let darkHTML = "";

  if (dark) {
    darkHTML = (
      <div>
        <div class="twinkling"></div> <div class="stars"></div>
        <div class="sleeping">
          <span>z</span>
          <span>z</span>
          <span>z</span>
        </div>
      </div>
    );
  } else {
    darkHTML = "";
  }
  return (
    <Fragment>
      {darkHTML}

      <div className={"App-header d-flex" + (dark ? "  night" : " day")}>
        <div className="frame d-flex flex-column">
          <div class="weather">
            {dark ? "" : <div id="rays" class="rays"></div>}
            <div
              className={dark ? "moon" : "sun"}
              onClick={() => toggleDarkMode(!dark)}
            ></div>
          </div>

          <div id="triangle-up"></div>
          <div
            id="square"
            className="d-flex justify-content-around flex-column"
          >
            <div id="label" className="mx-auto">
              COOKIE BAKERY
            </div>

            <div className="d-flex flex-row justify-content-around">
              <div className={"window " + (dark ? " night" : " day")}></div>
              <div className={"window " + (dark ? " night" : " day")}></div>
            </div>

            <div className="d-flex flex-row justify-content-around">
              <div
                id="door"
                className="mx-auto"
                onClick={() => doorClickedHanlder()}
              >
                <div id="door-hand"></div>
              </div>
              <div className="mail-container">
                <div
                  id="mail-box"
                  className={falling ? "falling" : ""}
                  onClick={() => fallMailBox(true)}
                >
                  <div id="mail-box-header"></div>
                  Mailbox
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
