import { Link } from "react-router-dom";
import CustomButton from "../shared/CustomButton";
import CustomInputField from "../shared/CustomInputField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-5">Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be 8 characters long"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
        enableReinitialize
      >
        <Form>
          <div className="mb-3">
            <Field
              name="email"
              as={CustomInputField}
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-500 font-semibold"
            />
          </div>
          <div className="mb-3">
            <Field
              name="password"
              as={CustomInputField}
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-500 font-semibold"
            />
          </div>
          <p className="text-slate-500 mb-3">
            Don't have an account?&nbsp;
            <Link to="register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>
          <CustomButton type="submit">Login</CustomButton>
        </Form>
      </Formik>
    </div>
  );
}
