import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
    console.log(email ,password)
  };

  return (
    <div className="bg-[#edf0de] w-full min-h-screen flex justify-center items-center p-6">
      
      <div className="bg-gray-500 w-full max-w-4xl min-h-[500px] flex rounded-xl overflow-hidden">

        <div className="bg-amber-300 w-1/2 flex items-center justify-center">
          <h2 className="text-3xl font-bold">
            Rakesh
          </h2>
        </div>

        <div className="w-1/2 bg-white flex justify-center items-center">
          
          <form
            onSubmit={handleSubmit}
            className="w-full p-6 rounded-xl"
          >

            <h1 className="text-2xl font-bold text-center mb-6">
              Login
            </h1>

            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>


            <p className="text-center mt-4">
              <span className="text-xs text-gray-600">
                Don't have an account?{" "}
              </span>

              <Link
                className="text-xs text-blue-600 font-medium hover:underline"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;