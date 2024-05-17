import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Popover } from "antd/lib";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

export const NavbarModule: NextPage = (): ReactElement => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      setToken(null);
      router.push("/");
    }
  };

  return (
    <div className=" bg-gray-600 w-full z-50 sticky top-0">
      <div className=" flex flex-row justify-between px-10 md:px-10 md:py-5 py-3 items-center">
        <section className=" nav-logo flex items-center gap-5">
          <img src="./logo.png" alt="" width={50} height={"auto"} />
          <div className=" flex gap-5 text-white font-inter font-[700] text-[18px]">
            <button className="" onClick={() => router.push("/")}>
              Katalog
            </button>
            <button
              className=""
              onClick={() => {
                router.push("/artWork");
              }}
            >
              ArtWork
            </button>
          </div>
        </section>
        <section className=" nav-auth flex gap-5 text-white items-center">
          {token ? (
            <>
              <Popover
                content={
                  <>
                    <Link
                      href={"/profile"}
                      className="flex gap-2 w-40 items-center transition-all ease-in-out cursor-pointer hover:bg-gray-500 px-3 py-1.5 rounded-md shadow-sm"
                    >
                      <AiOutlineUser className="text-xl text-black" />
                      <p className="font-medium text-black font-gothic text-[14px]">
                        Profile
                      </p>
                    </Link>
                    <section
                      className="flex gap-2 w-40 items-center transition-all ease-in-out cursor-pointer hover:bg-gray-500 px-3 py-1.5 rounded-md shadow-sm"
                      onClick={handleLogout}
                    >
                      <BiLogOutCircle className=" text-xl text-black" />
                      <p className="font-medium text-black font-gothic text-[13px]">
                        Log Out
                      </p>
                    </section>
                  </>
                }
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
              >
                <h2 className=" font-[500] cursor-pointer">Halo, gais</h2>
              </Popover>
            </>
          ) : (
            <>
              <button
                className=" font-inter font-[700] bg-gray-900 px-6 py-2 rounded-[20px]"
                onClick={() => {
                  router.push("/auth/login");
                }}
              >
                Login
              </button>
              <button
                className=" font-inter font-[700] bg-gray-900 px-6 py-2 rounded-[20px]"
                onClick={() => {
                  router.push("/auth/register");
                }}
              >
                Register
              </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
};
