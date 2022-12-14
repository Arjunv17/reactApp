import React, { useState, useEffect } from "react";
import loginStyle from "../Login/login.module.css";
import Images from "../../Assets";
import axios from "axios";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getProductList, addToCart, globalSearch } from "../../services";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from "../../helper";
import axiosfun from "../../config";
import Button from "../props";

const Index = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  function getList() {
    axiosfun()
      .get(getProductList)
      .then(function (response) {
        setProduct(response.data.Result);
        fireToast("success", response.statusText);
      })
      .catch(function (error) {
        fireToast("error", "Data Not Found");
      });
  }

  useEffect(() => {
    getList();
  }, []);



  return (
    <>
      <section className="banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className="bannerSlider">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={Images.banner1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={Images.banner2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pImage">
                  <img src="" alt="profileImage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Formik
                initialValues={{
                  title: "",
                }}
                validationSchema={Yup.object({
                  title: Yup.string(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  axiosfun()
                    .post(globalSearch, {
                      title: values.title,
                    })
                    .then(function (response) {
                      setProduct(response.data.Result);
                      fireToast("success", response.data.Response);
                      navigate("/");
                    })
                    .catch(function (error) {
                      fireToast("error", error.response.data.Error);
                      navigate("/login");
                    });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className={loginStyle.inputWrap}>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.title}
                      />
                      <div className={loginStyle.errorMsg}>
                        {errors.title && touched.title && errors.title}
                      </div>
                    </div>

                    <button type="submit">Submit</button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Button type="button" className="btn-primary">
                Click
              </Button>
            </div>
          </div>

          <div className="row">
            {product.map((item) => (
              <div className="col-lg-4" key={item._id}>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="card">
                      <img
                        src="https://st3.depositphotos.com/1441511/18503/i/600/depositphotos_185032830-stock-photo-programming-man-working-on-computer.jpg "
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.excerptText}</p>
                        <div className="btnWrap">
                          <span>
                            {" "}
                            <Formik
                              initialValues={{
                                quantity: "",
                              }}
                              validationSchema={Yup.object({
                                quantity: Yup.number(
                                  "Select any quantity"
                                ).required("Required"),
                              })}
                              onSubmit={(values, { setSubmitting }) => {
                                axiosfun()
                                  .post(addToCart, {
                                    quantity: values.quantity,
                                    productId: item._id,
                                  })
                                  .then(function (response) {
                                    fireToast("success", response.data.Result);
                                    navigate("/cart");
                                  })
                                  .catch(function (error) {
                                    fireToast(
                                      "error",
                                      error.response.data.Error
                                    );
                                    navigate("/");
                                  });
                              }}
                            >
                              {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                              }) => (
                                <form onSubmit={handleSubmit}>
                                  <div className="inputWrap">
                                    <input
                                      className="form-control"
                                      type="number"
                                      name="quantity"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      values={values.quantity}
                                    />
                                    <div className="errorMsg">
                                      {errors.quantity &&
                                        touched.quantity &&
                                        errors.quantity}
                                    </div>
                                  </div>
                                  <Button
                                    type="submit"
                                    className="btn-info"
                                    padding="5px 25px"
                                  >
                                    Cart
                                  </Button>
                                </form>
                              )}
                            </Formik>
                          </span>
                          <span>
                            <a href="#" class="btn btn-danger">
                              ${item.productPrice}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Outlet/> */}
    </>
  );
};

export default Index;
