import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forgotPassword.scss"; // Asegúrate de crear este archivo CSS para estilos personalizados.
import logoImage from "./assets/lambdaLegentsLogo.png";
import useBackgroundPosition from '../../hooks/useBackgroundPosition';

const ForgotPassword: React.FC = () => {
  const backgroundPosition = useBackgroundPosition();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Dirección de correo no valida")
      .required("Requerido"),
  });

  return (
    <div className="forgot-password-container" style={{ backgroundPosition: backgroundPosition }}>
      <div className="forgot-password-form">
        <img src={logoImage} alt="Logo" className="logo" />
        <Formik
          initialValues={{ email: "" }}
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
              <button type="submit" className="btn w-100 button-custom-primary" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-3 text-center">
          <Link to="/" className="me-2">
            Volver a Inicio
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
