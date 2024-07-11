import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/AuthPage.css";

//YUP validation checks
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  //password parameters that needs to be met
  password: Yup.string()
    .min(8, "Too Short! Must be at least 8 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[\W_]/, "Must contain at least one special character")
    .required("Required"),
});

const Register = ({ onRegister }) => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            username: "",
            email: "",
            password: "",
          }}
          //simulates a waiting time to show its submitting
          //after timeout takes you to login page
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              onRegister(values);
              resetForm();
              navigate("/login");
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Name: </label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div>
                <label>Surname: </label>
                <Field type="text" name="surname" />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="error"
                />
              </div>
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
                <label>Email: </label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
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
                Register
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
