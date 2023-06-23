import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout, reset } from "../../features/auth/authSlice";
import { setOpen } from "../../features/auth/authSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";

function DashboardNavbar({ problemPage }) {
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
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between ${
          !problemPage ? "max-w-[1100px] mx-auto" : ""
        }`}
      >
        <Link href="/" className="flex flex-1 items-center gap-2 h-20">
          <img src="/coding.svg" alt="codeBasic" className="h-1/4" />
          GoalSetter
        </Link>
        {/* if it is in problem page then  */}
        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="flex items-center justify-center rounded dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer">
              <FaChevronLeft />
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>ProblemList</p>
            </Link>
            <div className="flex items-center justify-center rounded dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer">
              <FaChevronRight />
            </div>
          </div>
        )}
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
