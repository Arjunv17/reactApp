import React from 'react'
import { Formik, Field } from 'formik';
import * as Yup from "yup";
import registerStyle from "./register.module.css"
import axios from 'axios';
import { Registers } from '../../services';
import Swal from 'sweetalert2';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from '../../helper'



const Register = () => {
    const navigate = useNavigate()

    return (
        <>
            <section className={registerStyle.bgImage}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={registerStyle.formTitle}>
                                <h2>Register Here!!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`${registerStyle.form_wrap} ${registerStyle.formSection}`}>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        password: "",
                                        phoneNumber: "",
                                        gender: "",
                                    }}
                                    validationSchema={
                                        Yup.object({
                                            name: Yup.string().max(25, "must be 3 char or less").required("Required"),
                                            email: Yup.string().email("invalid email address").required("Required"),
                                            password: Yup.string().max(25, "must be 5 char or less").required("Required"),
                                            phoneNumber: Yup.number("invalid number"),
                                            gender: Yup.string().max(10, "Please select one gender first").required("Required"),
                                        })
                                    }
                                    onSubmit={(values, { setSubmitting }) => {
                                        axios.post(Registers, {
                                            name: values.name,
                                            email: values.email,
                                            password: values.password,
                                            phoneNumber: values.phoneNumber,
                                            gender: values.gender,
                                        })
                                            .then(function (response) {
                                                fireToast('success', response.data.Result)
                                                navigate('/login')
                                            })
                                            .catch(function (error) {
                                                fireToast('error', error.response.data.Error)
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
                                    }) =>
                                        <form onSubmit={handleSubmit}>
                                            <div className={registerStyle.inputWrap}>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.name}
                                                />
                                                <div className={registerStyle.errorMsg}>
                                                    {errors.name && touched.name && errors.name}
                                                </div>
                                            </div>

                                            <div className={registerStyle.inputWrap}>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.email}
                                                />
                                                <div className={registerStyle.errorMsg}>
                                                    {errors.email && touched.email && errors.email}
                                                </div>
                                            </div>


                                            <div className={registerStyle.inputWrap}>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.password}
                                                />
                                                <div className={registerStyle.errorMsg}>
                                                    {errors.password && touched.password && errors.password}
                                                </div>
                                            </div>



                                            <div className={registerStyle.inputWrap}>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="phoneNumber"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    values={values.phoneNumber}
                                                />
                                                <div className={registerStyle.errorMsg}>
                                                    {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                                </div>
                                            </div>


                                            <div className={registerStyle.inputWrap}>
                                                <div role="group" aria-labelledby="my-radio-group">
                                                    <label>
                                                        <Field
                                                            className="form-control"
                                                            type="radio"
                                                            name="gender"
                                                            value="male"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            values={values.gender}
                                                        />
                                                        Male
                                                    </label>
                                                    <label>
                                                        <Field
                                                            className="form-control"
                                                            type="radio"
                                                            name="gender"
                                                            value="female"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            values={values.gender}
                                                        />
                                                        Female
                                                    </label>
                                                </div>




                                            </div>

                                            <button type="submit" disabled={isSubmitting}>
                                                Submit
                                            </button>
                                        </form>
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register