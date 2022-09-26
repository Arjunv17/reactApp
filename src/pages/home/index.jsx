import React, { useState } from 'react'
import style from '../Home/home.css'
import Images from '../../Assets'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";



const Index =  () => {

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
            <section className='banner'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="bannerSlider">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={Images.banner1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Images.banner2} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        {/* <Outlet/> */}
        </>
    )
}

export default Index