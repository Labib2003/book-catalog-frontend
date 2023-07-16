import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function NavbarAndFooter() {
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
