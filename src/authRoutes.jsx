import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";

const AuthRoutes = () => {
    const [isLog, setIsLog] = useState("");

    const isLogged = localStorage.getItem('token')

    useEffect(() => {
        setIsLog(isLogged);
    });
    return (
        <>

            <div>{isLogged ? <Outlet /> : <Navigate to="/login" />}</div>
        </>
    );


}

export default AuthRoutes