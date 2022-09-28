import React, { useState, useEffect } from 'react'
import style from '../Home/home.css'
import Images from '../../Assets'
import axios from 'axios';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getProductList } from '../../services';

const Cart = () => {
    // const navigate = useNavigate()

    return (
        <>
            <section className='cartBody'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="cartWrap">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart