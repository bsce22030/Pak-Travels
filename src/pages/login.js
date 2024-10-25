import React from "react";

function Login() {
  return (
    <div
      className="bg-blue-100 h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('media/pictures/hero.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-8 left-8 flex items-center">
        <img
          alt="Ebolt Logo"
          className="w-10 h-10"
          height="40"
          src="media/logo/logo-main.png"
          width="50"
        />
        <span className="ml-2 text-xl font-semibold">TripKaro</span>
      </div>
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 p-4 rounded-full">
            <i className="fas fa-sign-in-alt text-2xl"></i>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">
          Sign in with email
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Make a new doc to bring your words, data, and teams together. For free
        </p>
        <form>
          <div className="mb-4 relative">
            <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="mb-4 relative">
            <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              type="password"
            />
            <a
              className="text-sm text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"
              href="#"
            >
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-200">
            Get Started
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">Or sign in with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-white border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-google text-xl text-gray-600"></i>
          </button>
          <button className="bg-white border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-facebook-f text-xl text-gray-600"></i>
          </button>
          <button className="bg-white border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-apple text-xl text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
