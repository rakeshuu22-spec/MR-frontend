import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
const Signup = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLaoding] = useState(false);

   const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,email,phone,password)
    setLaoding(true)
    navigate('/login')

  };

  return (
    <div className="bg-[#edf0de] w-full h-screen flex justify-center items-center p-6 overflow-hidden">

      <div className="bg-gray-500 w-full max-w-4xl h-[500px] flex rounded-xl overflow-hidden">

        <div className="bg-amber-300 w-1/2 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Rakesh
          </h2>
        </div>

        <div className="w-1/2 bg-white flex justify-center items-center">

          <form
            onSubmit={handleSubmit}
            className="w-full p-6"
          >

            <h1 className="text-2xl font-bold text-center mb-5">
              Create Acoount
            </h1>

            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">
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

            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">
                Phone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">
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
             {loading ? (
                <TailSpin
                  height="40"
                  width="40"
                  color="#0bab1d"
                  ariaLabel="loading"
                />
              ) : (
                "Sign Up"
              )}
            </button>

            <p className="text-center mt-4">
              <span className="text-xs text-gray-600">
                Already have an account?{" "}
              </span>

              <Link
                className="text-xs text-blue-600 font-medium hover:underline"
                to="/login"
              >
                Sign In
              </Link>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Signup;