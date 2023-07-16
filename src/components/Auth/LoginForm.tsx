import { Link } from "react-router-dom";
import CustomButton from "../shared/CustomButton";
import CustomInputField from "../shared/CustomInputField";

export default function LoginForm() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-5">Login</h1>
      <CustomInputField type="email" placeholder="Email" />
      <CustomInputField type="password" placeholder="Password" />
      <p className="text-slate-500 mb-3">
        Don't have an account?&nbsp;
        <Link to="register" className="text-orange-500 font-semibold">
          Register
        </Link>
      </p>
      <CustomButton>Login</CustomButton>
    </div>
  );
}
