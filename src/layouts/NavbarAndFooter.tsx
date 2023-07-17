import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { AuthState, saveAuth } from "../redux/features/auth/authSlice";

export default function NavbarAndFooter() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authString = localStorage.getItem("auth");
    if (authString) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const auth: AuthState = JSON.parse(authString) as AuthState;
      dispatch(saveAuth(auth));
    } else {
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
      window.location.href = "/auth";
    }
  }, [dispatch]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
