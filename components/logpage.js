import Head from "next/head";
import React from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";


const Login = () => {
  const handleLogin = () => {
    console.log("Login logic will be implemented here.");
  };
  return (
    <>
    <Head>
    <title>Taleem.choice</title>
    <link rel="icon" href="/favicon.png" />
  </Head>
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6  rounded-md lg:max-w-xl border flex  justify-center ">
  <ThemeChanger/>

      </div>
      <div className="w-full p-6  rounded-md shadow-xl lg:max-w-xl border ">
        
        <h1 className="text-3xl font-bold text-center">Taleem.Choice</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2   border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-bold "
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2  border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline font-bold"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
              Sign In
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="/"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">

            <svg
              xmlns="/"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
            <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h7V20h-4c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h4v-3c0-3.3,1.7-6,5-6h4c0.6,0,1,0.4,1,1v3
	          c0,0.6-0.4,1-1,1h-3.8c-0.1,0-0.2,0.1-0.2,0.2V15h5c0.3,0,0.6,0.2,0.8,0.4s0.2,0.6,0.1,0.9l-2,3C24.8,19.8,24.4,20,24,20h-3v12h2
          	c5,0,9-4,9-9V9C32,4,28,0,23,0z"/>
              </svg>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <svg
              xmlns="/"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M23,0H9C4,0,0,4,0,9v6v8c0,5,4,9,9,9h14c5,0,9-4,9-9v-8V9C32,4,28,0,23,0z M16,10c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6
	S12.7,10,16,10z M22,7c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S22,8.1,22,7z"/>
            </svg>
          </button>
        </div>

        <p className="mt-4 text-sm text-center ">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}


export default Login;