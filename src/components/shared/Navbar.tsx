import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleMobileNavMenu } from "../../redux/features/ui/uiSlice";
import { deleteAuth } from "../../redux/features/auth/authSlice";

export default function Navbar() {
  const { mobileNavMenuOpen } = useAppSelector((state) => state.ui);
  const { name } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            Book Catalogue
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => dispatch(toggleMobileNavMenu())}
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div
          className={" lg:flex flex-grow items-center"}
          id="example-navbar-warning"
        >
          <ul
            className={
              (mobileNavMenuOpen ? "flex" : "hidden") +
              " lg:flex flex-col lg:flex-row list-none ml-auto"
            }
          >
            <li className="nav-item">
              <Link
                to="/all-books"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                All Books
              </Link>
            </li>
            <li className="nav-item">
              {name ? (
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => {
                    dispatch(deleteAuth());
                    localStorage.removeItem("auth");
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Login/Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
