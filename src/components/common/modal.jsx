import React from "react";
import PropTypes from "prop-types";
import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import loginStyle from "../../pages/Login//login.module.css";
import { toastConfig, fireToast } from "../../helper";
import axiosfun from "../../config";
import { updateCart } from "../../services";

const BasicModal = ({
  children,
  title,
  visible,
  setVisible,
  footer,
  data,
  fetch,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)} {...props}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody className="p-0">
          <Formik
            initialValues={{
                ...data
            // userPhoneNumber: data.userPhoneNumber,
            //   userName: data.userName,
            }} 
            validationSchema={Yup.object({
              userPhoneNumber: Yup.string().required("Required"),
              userName: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              axiosfun()
                .post(updateCart, {
                    userPhoneNumber: values.userPhoneNumber,
                    userName: values.userName,
                })
                .then(function (response) {
                  fireToast("success", response.data.Result);
                  setVisible(false)
                  fetch()
                })
                .catch(function (error) {
                  fireToast("error", error.response.data.Error);
                  setVisible(false)
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
              <form onSubmit={handleSubmit} className='m-5'>
                <div className={loginStyle.inputWrap}>
                  <input
                    className="form-control"
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  <div className={loginStyle.errorMsg}>
                    {errors.userName && touched.userName && errors.userName}
                  </div>
                </div>

                <div className={loginStyle.inputWrap}>
                  <input
                    className="form-control"
                    name="userPhoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userPhoneNumber}
                  />
                  <div className={loginStyle.errorMsg}>
                    {errors.userPhoneNumber &&
                      touched.userPhoneNumber &&
                      errors.userPhoneNumber}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>

              </form>
            )}
          </Formik>  
        </CModalBody>
        {footer && <CModalFooter >{footer}</CModalFooter> }
      </CModal>
    </>
  );
};

// BasicModal.propTypes = {
//   children: PropTypes.node,
//   title: PropTypes.string,
//   visible: PropTypes.bool,
//   setVisible: PropTypes.func,
//   footer: PropTypes.any,
// }

export default BasicModal;
