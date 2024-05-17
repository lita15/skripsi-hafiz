import { NextPage } from "next";
import { ReactElement } from "react";

export const RegisterModule: NextPage = (): ReactElement => {
  return (
    <div className="">
      <section className=" grid lg:grid-cols-2 grid-col-1">
        <section className=" login-section lg:pt-36 md:px-36 px-10 pt-52">
          <h1 className=" text-[#3A3D3F] text-[36px]  font-[700]">Daftar</h1>
          <p className=" text-[#808A90] text-[14px] font-[400]">
            Sudah punya akun?{" "}
            <a
              href="/auth/login"
              className=" font-[700] text-gray-900 underline"
            >
              Masuk
            </a>
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
              />
            </div>
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
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
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 font-[600] bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              Daftar
            </button>
            <p className=" mt-2 text-center">
              Dengan melakukan pendaftaran, Anda setuju dengan
              <span className=" font-[700]"> syarat dan ketentuan</span>
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
