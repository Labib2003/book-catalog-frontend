import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="h-screen flex">
      <div className="bg-teal-500 w-1/4 flex align-middle p-10">
        <img
          src="/undraw_bibliophile_re_xarc.svg"
          alt="bibliophile"
          className="w-full object-contain"
        />
      </div>
      <div className="w-full grid place-items-center">
        <div className="w-1/4 p-10 rounded shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
