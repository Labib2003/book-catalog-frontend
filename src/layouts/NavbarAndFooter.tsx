import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

export default function NavbarAndFooter() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
