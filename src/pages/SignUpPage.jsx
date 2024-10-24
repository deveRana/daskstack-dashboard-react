import React, { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log({ email, username, password });
  };

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-12 py-16 rounded-lg shadow-lg min-w-96"
      >
        <h2 className="text-3xl font-bold mb-1 text-center">
          Create an Account
        </h2>
        <h2 className="text-sm  font-semibold mb-6 text-center text-gray-600">
          Create a account to continue
        </h2>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border border-gray-300 rounded bg-[#f5f6fa]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-semibold"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            className="w-full p-2 border border-gray-300 rounded bg-[#f5f6fa]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <div className="flex flex-row justify-between">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <a href="#" className="text-xs font-bold text-gray-400 ">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            required
            className="w-full p-2 border border-gray-300 rounded bg-[#f5f6fa]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="cursor-pointer mt-4 mb-10  text-sm text-gray-700">
          <p className="" onClick={handleCheckBox}>
            <i
              class={`fa-regular ${
                checkBox ? "fa-square-check" : "fa-square"
              } mr-2`}
            ></i>
            <span>I accept terms and conditions</span>
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
          <p className="mt-2 text-sm font-semibold text-gray-700 text-center">
            Already have an account?
            <a href="/login" className="ml-1 font-bold text-blue-500">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
