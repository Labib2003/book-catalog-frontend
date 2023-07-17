import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../shared/CustomButton";
import CustomInputField from "../shared/CustomInputField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { saveAuth } from "../../redux/features/auth/authSlice";

export default function LoginForm() {
  const [login, { error, isLoading, isError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-5">Login</h1>
      <Formik
        initialValues={{ email: "demo@account.com", password: "12345678" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be 8 characters long"),
        })}
        onSubmit={async (values) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const res: any = await login(values);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          dispatch(saveAuth(res?.data.data));
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          localStorage.setItem("token", res.data.data.accessToken);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          localStorage.setItem("auth", JSON.stringify(res.data.data));
          navigate("/");
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
          <CustomButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              "Login"
            )}
          </CustomButton>
          {isError && error && (
            <div className="text-red-500 font-semibold">
              {JSON.stringify(error)}
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
}
