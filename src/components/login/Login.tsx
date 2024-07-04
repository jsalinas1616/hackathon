import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss"; // Asegúrate de crear este archivo CSS para estilos personalizados.
import logoImage from "./assets/lambdaLegentsLogo.png";
import useBackgroundPosition from '../../hooks/useBackgroundPosition';


const Login: React.FC = () => {
  const backgroundPosition = useBackgroundPosition();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Dirección de correo inválida")
      .required("Requerido"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /[A-Z]/,
        "La contraseña debe contener al menos una letra mayúscula"
      )
      .matches(
        /[a-z]/,
        "La contraseña debe contener al menos una letra minúscula"
      )
      .matches(/[0-9]/, "La contraseña debe contener al menos un número")
      .matches(
        /[@$!%*?&#]/,
        "La contraseña debe contener al menos un carácter especial"
      )
      .required("Requerido"),
  });

  return (
    <div className="login-container" style={{ backgroundPosition: backgroundPosition }}>
      <div className="login-form">
        <img src={logoImage} alt="Logo" className="logo" />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field type="email" name="email" className="form-control" id="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field type="password" name="password" className="form-control" id="password" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn w-100 button-custom-primary" disabled={isSubmitting}>
                {isSubmitting ? "Ingresando..." : "Ingresar"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-3 text-center">
          <Link to="/forgot-password" className="me-2">
            Olvidaste el Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
