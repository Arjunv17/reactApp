import React, { useState } from "react";
import style from "../Home/home.css";
import Images from "../../Assets";
import axios from "axios";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const PropsFunction = (props) => {
  const [userName, setUserName] = useState("Cool Dude");

  return (
    <>
      <section className="pageNotFound mt-5">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="pageNotFoundWrap mt-5">
                <h1>Your Name Is  { props.testName } {userName}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropsFunction;
