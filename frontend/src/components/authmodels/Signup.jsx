import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, register, setType } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleclick = () => {
    dispatch(setType("login"));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("Please add all fields");
    }
    dispatch(register(formData));
  };

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={onSubmit}>
      <h3 className="text-xl font-medium text-white">
        Register in to CodeBasic
      </h3>
      <label
        htmlFor="email"
        className="text-sm font-medium block mb-2 text-gray-300"
      >
        Email
      </label>
      <input
        onChange={onChange}
        type="email"
        name="email"
        id="email"
        className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        placeholder="name@gmail.com"
      />

      <label
        htmlFor="displayName"
        className="text-sm font-medium block mb-2 text-gray-300"
      >
        Display Name
      </label>
      <input
        onChange={onChange}
        type="name"
        name="name"
        id="name"
        className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        placeholder="James Smith"
      />

      <label
        htmlFor="password"
        className="text-sm font-medium block mb-2 text-gray-300"
      >
        Password
      </label>
      <input
        onChange={onChange}
        type="password"
        name="password"
        id="password"
        className="
                border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        placeholder="*********"
      />
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
      <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleclick}
        >
          Log in
        </a>
      </div>
    </form>
  );
}

export default Signup;
