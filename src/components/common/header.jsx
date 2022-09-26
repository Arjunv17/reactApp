import React, { useEffect, useState } from 'react'
import style from '../../styles/style.css'
import Images from '../../Assets'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isLog, setIsLog] = useState("");
    const isLogged = localStorage.getItem('token')

    useEffect(() => {
        setIsLog(isLogged);
    });

    return (
        <>
            <section className={style.navMain}>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
                                <a class="navbar-brand" href="#">
                                    <img src={Images.logoImage} />
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        {
                                            isLogged ?
                                                <>
                                                    <li className={`nav-item active ${style.headerLink}`}>
                                                        <Link to="/" >Home</Link>
                                                    </li>
                                                    <li class={`nav-item ${style.headerLink}`}>
                                                        <Link to="/register" >Register</Link>
                                                    </li>
                                                </> : <>
                                                    <li class={`nav-item ${style.headerLink}`}>
                                                        <Link to="/register" >Register</Link>
                                                    </li>
                                                    <li class={`nav-item ${style.headerLink}`}>
                                                        <Link to="/login" >Login</Link>
                                                    </li>
                                                </>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar