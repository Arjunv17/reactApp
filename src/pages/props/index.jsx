import React, { useState ,useEffect } from "react";
import style from "../Home/home.css";
import Images from "../../Assets";
import axios from "axios";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Button = ({ className, children,padding, ...props }) => {
  const [fontColor, setFontColor] = useState(" ");
  const [backgrouondColor, setbackgrouondColor] = useState(" ");

  useEffect(() => {
    var btnfontColor = localStorage.getItem("btnFontColor");
    var btnBgColor = localStorage.getItem("btnBackgroundColor");
    btnfontColor && setFontColor(btnfontColor);
    btnBgColor && setbackgrouondColor(btnBgColor);
  }, []);

  console.log(props,"prp")
  return (
    <button
      className={`btn btn-hover ${className && className}`}
      {...props}
      style={{
        color: fontColor ? `${fontColor}` : "fff",
        backgroundColor: backgrouondColor ? `${backgrouondColor}` : "#8A3DF0",
        padding  
      }}
    >
      {children}
    </button>
  );
};
export default Button;
