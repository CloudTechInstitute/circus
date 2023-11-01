import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const formInitialValues = {
  username: "",
  password: "",
};
export const Login = () => {
  const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Please enter password"),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-none d-lg-block"></div>
        <div className="col-lg-4 col-sm-12 col-md-12 mt-5">
          <div className="row">
            <div className="col-12">
              <div className="p-2 m-2">
                <h2 className="text-danger">Login</h2>
              </div>
            </div>
          </div>
          <div className="p-2 m-2">
            <div className="flex justify-content-center align-items-center">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter email address or username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  autoComplete="off"
                />
                {touched.username && errors.username ? (
                  <small className="text-danger">{errors.username}</small>
                ) : null}
                <input
                  type="password"
                  placeholder="enter password"
                  className="form-control mb-2"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <small className="text-danger">{errors.password}</small>
                ) : null}
                <button className="form-control btn btn-danger" type="submit">
                  Login
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
