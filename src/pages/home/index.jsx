import React, { useState, useEffect } from 'react'
import style from '../Home/home.css'
import Images from '../../Assets'
import axios from 'axios';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getProductList } from '../../services';


const Index = () => {

    const [product, setProduct] = useState([]);
    function getList() {
        axios.get(getProductList)
            .then(function (response) {
                setProduct(response.data.Result)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    useEffect(() => {
        getList()

    }, [])

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


            <section className='pt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-toggle="tab" onClick={getList} data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Boys</button>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        {
                            product.map((item) => (
                                <div className="col-lg-4" key={item._id}>
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                            <div class="card">
                                                <img src="https://st3.depositphotos.com/1441511/18503/i/600/depositphotos_185032830-stock-photo-programming-man-working-on-computer.jpg " class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    <p class="card-text">{item.excerptText}</p>
                                                    <div className='btnWrap'>
                                                        <span><a href="#" class="btn btn-primary">Details</a></span>
                                                        <span><a href="#" class="btn btn-danger">${item.productPrice}</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            {/* <Outlet/> */}
        </>
    )
}

export default Index