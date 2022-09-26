import React, { useState } from 'react'
import style from '../Home/home.css'
import Images from '../../Assets'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";



const PageNotFound =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        setEmail(event.target.email.value)
        setPassword(event.target.password.value)
        try {
            await axios.post('https://my-ecommerce-apis.herokuapp.com/api/user/login', {
                email,
                password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <section className='pageNotFound mt-5'>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pageNotFoundWrap mt-5" >
                                <h1>Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default PageNotFound