import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Login</h1>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;