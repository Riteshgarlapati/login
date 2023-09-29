// pages/login.tsx
import React from "react";
import Image from "next/image";

const LoginPage= () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="h-max my-0 mt-24 md:mt-16 mb-24 md:mb-12">
          <Image
            width={1000}
            height={400}
            src="/images/HFest23_LogoCrop.png"
            alt="Logo"
            className=""
          />
        </div>
      <div className="border-yellow-500 border bg-none p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-gray-200 text-center mb-4 text-sm justify-center">The credentials are shared in discord</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="team_id"
              className="block text-gray-50 text-sm font-semibold mb-2"
            >
              Team ID
            </label>
            <input
              type="text"
              id="id"
              name="teamid"
              placeholder="Team ID"
              className="w-full border border-yellow-200 rounded py-2 px-3 text-black-700 text-sm bg-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-50 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full border border-yellow-200 rounded py-2 px-3 text-black-700 text-sm bg-gray-900"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
