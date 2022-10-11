import React from 'react'
import { Formik, Field } from 'formik';
import * as Yup from "yup";
import loginStyle from "./login.module.css"
import axios from 'axios';
import { Logins } from '../../services'
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from '../../helper'
import axiosfun from '../../config';

const Login = () => {
    const navigate = useNavigate()

    return (
        <>
            <section className={loginStyle.bgImage}>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={loginStyle.formTitle}>
                                <h2>Login Here!!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${loginStyle.form_wrap} ${loginStyle.formSection}`}>
                                <Formik
                                    initialValues={{
                                        email: "",
                                        password: ""
                                    }}
                                    validationSchema={
                                        Yup.object({
                                            email: Yup.string().email("invalid email address").required("Required"),
                                            password: Yup.string().max(25, "must be 5 char or less").required("Required")
                                        })
                                    }
                                    onSubmit={(values, { setSubmitting }) => {
                                        axiosfun().post(Logins, {
                                            email: values.email,
                                            password: values.password
                                        })
                                            .then(function (response) {
                                                fireToast('success', response.data.Result)
                                                localStorage.setItem('token', response.data.token)
                                                navigate('/')
                                            })
                                            .catch(function (error) {
                                                fireToast('error', error.response.data.Error)
                                                navigate('/login')
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
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.email}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.email && touched.email && errors.email}
                                                </div>
                                            </div>

                                            <div className={loginStyle.inputWrap}>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.password}
                                                />
                                                <div className={loginStyle.errorMsg}>
                                                    {errors.password && touched.password && errors.password}
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

export default Login