import React, { useState, useEffect } from 'react'
import style from '../Home/home.css'
import Images from '../../Assets'
import axios from 'axios';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getCart } from '../../services';
import { Link, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from '../../helper'
import  axiosInstance  from '../../config'

const Cart = () => {

    const [showCart, setShowCart] = useState([]);
    const navigate = useNavigate()
    function getCartItems() {
        axiosInstance.get(getCart)
            .then(function (response) {
                setShowCart(response.data)
                fireToast('success', response.data.Result)
            })
            .catch(function (error) {
                fireToast('error', 'This Item is not add in cart')
            });
    }

    useEffect(() => {
        getCartItems()
    }, [])

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
                                            <th scope="col">UserName</th>
                                            <th scope="col">ProductName</th>
                                            <th scope="col">ProductPrice</th>
                                            <th scope="col">FinalPrice</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            showCart.map((item) => (
                                                <tr key={item._id}>
                                                    <th scope="row">1</th>
                                                    <td>{item.userName}</td>
                                                    <td>{item.productName}</td>
                                                    <td>{item.productPrice}</td>
                                                    <td>{item.finalPrice}</td>
                                                    <td>{item.productQuantity}</td>
                                                </tr>
                                            ))
                                        }
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