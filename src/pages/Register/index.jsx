import { React, useRef, useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import registerStyle from "./register.module.css";
import axios from "axios";
import { Registers, adminRegisters } from "../../services";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toastConfig, fireToast } from "../../helper";
import axiosfun from "../../config";

const Register = () => {
  const navigate = useNavigate();

  //       let url;
  //   const onImageChange = async (event) => {
  //       event.preventDefault();
  //       console.log(event.target.pic, "e target name upload image side");
  //       console.log(event.target.pic.file, "e target files upload image side");
  //       let files = event.target.pic.file;

  //       if (event.target.pic.file && event.target.pic.file[0]) {
  //          url+=URL.createObjectURL(files);
  //           console.log(URL.createObjectURL(files),"file url created")
  //       }
  //     };
  //     console.log(url,"imagess array under fn blank down side")

  // const [image, setAboutImage] = useState({
  //   blob: null,
  //   src: "",
  // });

  // const onImageChange = async (event) => {
  //   event.preventDefault();
  //   if (event.target.files && event.target.files) {
  //     let files = event.target.files;
  //     const ggf = window.URL.createObjectURL(
  //       new Blob(files, { type: "image/jpeg" })
  //     );

  //     setAboutImage(ggf);
  //   }
  // };

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
              <div
                className={`${registerStyle.form_wrap} ${registerStyle.formSection}`}
              >
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    pic: [],
                    phoneNumber: "",
                    gender: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .max(25, "must be 3 char or less")
                      .required("Required"),
                    email: Yup.string()
                      .email("invalid email address")
                      .required("Required"),
                    password: Yup.string()
                      .max(25, "must be 5 char or less")
                      .required("Required"),
                    phoneNumber: Yup.number("invalid number"),
                    pic: Yup.array().min(1, "select at least 1 file"),
                    gender: Yup.string()
                      .max(10, "Please select one gender first")
                      .required("Required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    let data = new FormData();
                    for (const key of Object.keys(values)) {
                      if (key != "pic") {
                        data.append(key, values[key]);
                      }
                    }
                    values.pic.forEach((photo, index) => {
                      data.append(`pic`, values.pic[index]);
                    });
                    axios
                      .post(adminRegisters, data)
                      .then(function (response) {
                        fireToast("success", response.data.Result);
                        navigate("/login");
                      })
                      .catch(function (error) {
                        fireToast("error", error.response.data.Error);
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
                    setFieldValue,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>
                      </div>

                      <div className={registerStyle.inputWrap}>
                        <input
                          className="form-control"
                          type="file"
                          name="pic"
                          onChange={(event) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            setFieldValue("pic", myFiles);
                          }}
                          onBlur={handleBlur}
                          values={values.pic}
                        />
                        <div className={registerStyle.errorMsg}>
                          {errors.pic && touched.pic && errors.pic}
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
                          {errors.phoneNumber &&
                            touched.phoneNumber &&
                            errors.phoneNumber}
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
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
