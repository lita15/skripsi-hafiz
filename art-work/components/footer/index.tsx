import { NextPage } from "next";
import { ReactElement } from "react";

export const FooterModule: NextPage = (): ReactElement => {
  return (
    <div
      // className=" bg-gray-600 mt-10 py-5 flex justify-between relative px-10 w-full bottom-0"
      className=" bg-black text-white mt-10 py-5 flex justify-between relative px-10 w-full bottom-0"
    >
      <div className=" font-[500] text-[16px]">ArtWork</div>
      <div className="">© 2024 Toughdork | HD</div>
    </div>
  );
};
