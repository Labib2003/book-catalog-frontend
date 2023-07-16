import { Link } from "react-router-dom";
import CustomButton from "../shared/CustomButton";
import CustomInputField from "../shared/CustomInputField";

export default function RegisterForm() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-800 mb-5">Register</h1>
      <CustomInputField type="email" placeholder="Email" />
      <CustomInputField type="password" placeholder="Password" />
      <CustomInputField type="password" placeholder="Confirm Password" />
      <p className="text-slate-500 mb-3">
        Already have an account?&nbsp;
        <Link to="/auth" className="text-orange-500 font-semibold">
          Login
        </Link>
      </p>
      <CustomButton>Register</CustomButton>
    </div>
  );
}
