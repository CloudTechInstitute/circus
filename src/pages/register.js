import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const regFormValues = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  cpassword: "",
};
export const Register = () => {
  const RegisterSchema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    email: yup
      .string()
      .email("enter a vaild email address")
      .required("email address is required"),
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
    cpassword: yup.string().required("Enter your password again"),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: regFormValues,
      validationSchema: RegisterSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-none d-lg-block"></div>
        <div className="col-lg-4 col-sm-12 col-md-12 mt-5">
          <div className="p-4 m-2">
            <div className="">
              <div className="row">
                <div className="col-12">
                  <div className="p-2 m-2">
                    <h2 className="text-danger">Register</h2>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control mb-2 "
                  placeholder="Enter fullname"
                  name="fullname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                />
                {touched.fullname && errors.fullname ? (
                  <small className="text-danger mt-0">{errors.fullname}</small>
                ) : null}
                <input
                  type="text"
                  className="form-control mb-2 "
                  placeholder="Enter email address"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <small className="text-danger">{errors.email}</small>
                ) : null}
                <input
                  type="text"
                  className="form-control mb-2 "
                  placeholder="Enter custom username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {touched.username && errors.username ? (
                  <small className="text-danger">{errors.username}</small>
                ) : null}
                <input
                  type="password"
                  placeholder="enter password"
                  className="form-control mb-2 "
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <small className="text-danger">{errors.password}</small>
                ) : null}
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="form-control mb-2 "
                  name="cpassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpassword}
                />
                {touched.cpassword && errors.cpassword ? (
                  <small className="text-danger">{errors.cpassword}</small>
                ) : null}
                <button className="form-control btn btn-danger" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4 d-none d-lg-block"></div>
      </div>
    </div>
  );
};
