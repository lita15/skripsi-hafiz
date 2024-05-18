import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { login } from "./api";
import Router from "next/router";

export const LoginModule: NextPage = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      identifier: email,
      password,
    };
    try {
      const response = await login(data);
      localStorage.setItem("token", JSON.stringify(response.jwt));
      localStorage.setItem("user", JSON.stringify(response.user));
      Router.push("/");
    } catch (error) {
      console.error("login failed", error);
      // Handle registration error
    }
  };
  return (
    <div className="">
      <section className=" grid lg:grid-cols-2 grid-col-1">
        <section className=" login-section lg:pt-44 md:px-36 px-10 pt-60">
          <h1 className=" text-[#3A3D3F] text-[36px]  font-[700]">
            Selamat Datang!
          </h1>
          <p className=" text-[#808A90] text-[14px] font-[400]">
            Log in to experience more of our website.{" "}
          </p>
          <form className=" mt-5">
            <div className="mb-4 ">
              <label
                htmlFor="email1"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email1"
                name="email1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password1"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password1"
                name="password1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full mt-4 font-[600] bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Submit
            </button>
            <p className=" mt-2 text-center">
              Belum punya akun?{" "}
              <a className=" font-[700] underline" href="/auth/register">
                Daftar
              </a>
            </p>
          </form>
        </section>
        <div className=" lg:block hidden">
          <img src="/img-login.jpeg" alt="" className=" w-full h-screen" />
        </div>
      </section>
    </div>
  );
};
