import React, { useState, useEffect } from 'react'
import style from '../Home/home.css'
import loginStyle from '../Checkout/checkout.css'
import Images from '../../Assets'
import axios from 'axios';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CheckoutPay } from '../../services';
import axiosfun from '../../config'
import { Formik, Field } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from '../../helper'

const Checkout = () => {

    const navigate = useNavigate()


    return (
        <>
            <section className='cartBody m-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${loginStyle.form_wrap} ${loginStyle.formSection}`}>
                                <Formik
                                    initialValues={{
                                        number: "",
                                        exp_month: "",
                                        exp_year: "",
                                        cvc: "",
                                        amount: "",
                                        currency: "INR"
                                    }}
                                    validationSchema={
                                        Yup.object({
                                            number: Yup.number().required("Required"),
                                            exp_month: Yup.number().required("Required"),
                                            exp_year: Yup.number().required("Required"),
                                            cvc: Yup.number().required("Required"),
                                            amount: Yup.number().required("Required"),
                                        })
                                    }
                                    onSubmit={(values, { setSubmitting }) => {
                                        axiosfun().post(CheckoutPay, {
                                            number: values.number,
                                            exp_month: values.exp_month,
                                            exp_year: values.exp_year,
                                            cvc: values.cvc,
                                            amount: values.amount,
                                            currency: "INR"
                                        })
                                            .then(function (response) {
                                                fireToast('success', response.data.Result)
                                                localStorage.setItem('token', response.data.token)
                                                navigate('/')
                                            })
                                            .catch(function (error) {
                                                fireToast('error', error.response.data.Error)
                                                navigate('/checkout')
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
                                        <form onSubmit={handleSubmit} className="p-5 ">
                                            <div className={loginStyle.inputWrap}>
                                                <label htmlFor="">Account Number</label>
                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    name="number"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.number}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.number && touched.number && errors.number}
                                                </div>
                                            </div>

                                            <div className={loginStyle.inputWrap}>
                                                <label htmlFor="">MONTH</label>
                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    name="exp_month"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.exp_month}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.exp_month && touched.exp_month && errors.exp_month}
                                                </div>
                                            </div>

                                            <div className={loginStyle.inputWrap}>
                                                <label htmlFor="">EXPIRE</label>
                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    name="exp_year"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.exp_year}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.exp_year && touched.exp_year && errors.exp_year}
                                                </div>
                                            </div>

                                            <div className={loginStyle.inputWrap}>
                                            <label htmlFor="">CVC</label>

                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    name="cvc"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.cvc}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.cvc && touched.cvc && errors.cvc}
                                                </div>
                                            </div>

                                            <div className={loginStyle.inputWrap}>
                                                <label htmlFor="">Amount</label>
                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    name="amount"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.amount}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.amount && touched.amount && errors.amount}
                                                </div>
                                            </div>



                                            <button type="submit" disabled={isSubmitting}>
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Checkout