import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import PicDummy from "../../public/img-dummy.jpeg";
import Image from "next/image";
import { getCatalog } from "./api";

const ContentLanding: NextPage = (): ReactElement => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogData = await getCatalog();
        setData(catalogData?.data);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className=" pt-0 px-14 bg-gray-300">
      <div className=" flex justify-center">
        <img src="./logo-dork.png" alt="" width={220} />
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-6 grid-cols-1 lg:gap-10 md:gap-5 gap-3">
        {data?.map((data: any) => {
          return (
            <div className="">
              <div className="box-border border-yellow-950 border-[2px] rounded-[30px] p-5 shadow-2xl">
                <Image
                  src={data?.attributes?.image?.data[0]?.attributes?.url}
                  alt=""
                  width={50}
                  height={50}
                  className=" w-full"
                />
              </div>
              <h1 className=" mt-3 font-[600] text-[18px] font-inter capitalize text-center">
                {data?.attributes?.name}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentLanding;
