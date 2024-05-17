import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export const NavbarModule: NextPage = (): ReactElement => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/auth/login");
  };
  const handleRegister = () => {
    router.push("/auth/register");
  };

  return (
    <div className=" bg-gray-600 top-0 w-full z-50 fixed">
      <div className=" flex flex-row justify-between px-10 md:px-10 md:py-5 py-3 items-center">
        <section className=" nav-logo flex items-center gap-5">
          <img src="./logo.png" alt="" width={50} height={"auto"} />
          <div className=" flex gap-5 text-white font-inter font-[700] text-[18px]">
            <div className="">Katalog</div>
            <div className="">ArtWork</div>
          </div>
        </section>
        <section className=" nav-auth flex gap-5 text-white">
          <button
            className=" font-inter font-[700] bg-gray-900 px-6 py-2 rounded-[20px]"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className=" font-inter font-[700] bg-gray-900 px-6 py-2 rounded-[20px]"
            onClick={handleRegister}
          >
            Register
          </button>
        </section>
      </div>
    </div>
  );
};
