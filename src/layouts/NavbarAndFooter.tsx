import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { AuthState, saveAuth } from "../redux/features/auth/authSlice";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { toast } from "react-toastify";
import { getBooks } from "../redux/features/book/bookSlice";

export default function NavbarAndFooter() {
  const { bookFilter } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const { data, isSuccess, isError, error, isFetching } =
    useGetBooksQuery(bookFilter);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getBooks(data?.data));
    }
    if (isError) {
      toast.error(error?.message);
    }
  }, [isSuccess, isError, isFetching]);

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
