import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { getCatalog } from "./api";
import { Image } from "antd/lib";
import { Carousel } from "antd/lib";

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
    <>
      <section>
        {/* logo dork */}
        <div className=" flex justify-center -mt-10">
          <img
            src="./logo-dork.png"
            alt=""
            className=" lg:w-2/12 md:w-3/12 w-5/12 cursor-pointer"
          />
        </div>

        {/* carousel */}
        <Carousel autoplay>
          <div className=" w-full">
            <Image
              src="/caraousel1.jpeg"
              alt={"landing"}
              className=" w-full object-cover"
              loading="lazy"
              preview={false}
              width={"100%"}
              height={400}
            />
          </div>
          <div className=" w-full">
            <Image
              src="/caraousel2.jpeg"
              alt={"landing"}
              className=" w-full object-cover"
              loading="lazy"
              preview={false}
              width={"100%"}
              height={400}
            />
          </div>
        </Carousel>
      </section>

      {/* content landing */}
      <section className=" content-landing pt-20 px-14 ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 gap-3">
          {data?.map((data: any) => {
            return (
              <div className="">
                <div className="box-border border-yellow-950 border-[2px] rounded-[30px] p-5 shadow-2xl">
                  <Image
                    src={data?.attributes?.image?.data[0]?.attributes?.url}
                    alt=""
                    className=" w-full"
                    preview={false}
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
    </>
  );
};

export default ContentLanding;
