import React from "react";

function Signup() {
  return (
    <html>
      <head>
        <title>Basement Sign Up</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Inter', sans-serif;
            }
          `}
        </style>
      </head>
      <body className="bg-gray-100">
        <section className="flex items-center justify-center min-h-screen mt-[20vh] mb-[20vh]">
          <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
            <div className="w-1/2 p-10">
              <div className="mb-8">
                <img
                  alt="Basement logo"
                  className="mb-4"
                  height="40"
                  src="media/logo/logo-bg-free.png"
                  width="100"
                />
                <h1 className="text-3xl font-bold mb-2">
                  Jobs fill your pocket, adventure fills your soul
                </h1>
                <p className="text-gray-600 mb-6">
                  Sign up to start the journey of your dreams
                </p>
                <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-lg mb-4">
                  <i className="fab fa-google mr-2"></i>
                  Sign in with Google
                </button>
                <div className="flex items-center mb-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name*
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email*
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Password*
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your password"
                      type="password"
                    />
                  </div>
                  <button className="w-full bg-black text-white py-2 rounded-lg font-semibold">
                    Create Account
                  </button>
                </form>
                <p className="text-gray-600 mt-4">
                  Already have an account?
                  <p className="text-indigo-500" href="#">
                    Login Here
                  </p>
                </p>
              </div>
            </div>
            <div className="w-1/2 rounded-r-lg overflow-hidden">
              <img
                alt="Background image"
                className="w-full h-full object-cover"
                height="800"
                src="https://storage.googleapis.com/a1aa/image/Tesk7U4O2izdPaxbDGyFjeNTbRt98QHNMqPTb3naiidwjxpTA.jpg"
                style={{ objectPosition: "center" }}
                width="600"
              />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}

export default Signup;
