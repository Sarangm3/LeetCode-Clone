import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout, reset } from "../../features/auth/authSlice";
import { setOpen } from "../../features/auth/authSlice";

function DashboardNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const headleClick = () => {
    dispatch(setOpen(true));
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center sm:px-12 px-2 md:px-24 bg-dark-layer-1 text-dark-gray-7">
      <div className="flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center justify-center gap-2 h-20">
          <img src="/coding.svg" alt="codeBasic" className="h-1/4" />
          GoalSetter
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          {!user && (
            <Link to="/auth">
              <button
                className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded"
                onClick={headleClick}
              >
                Sign In
              </button>
            </Link>
          )}
          {user && (
            <div className="curser-pointer group relative">
              <img
                src="/avatar.png"
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
              <div
                className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && (
            <button
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
              onClick={onLogout}
            >
              <FiLogOut />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
