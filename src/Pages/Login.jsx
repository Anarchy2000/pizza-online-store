import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../CSS/AuthPage.css";

//YUP error validation
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Too Short! Must be at least 8 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[\W_]/, "Must contain at least one special character")
    .required("Required"),
});

const Login = ({ onLogin }) => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          //simulate loading as submitting
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              onLogin(values);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Username: </label>
                <Field type="text" name="username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label>Password: </label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
