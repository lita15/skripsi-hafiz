import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { getCatalog, getCatalogById } from "./api";
import { Image, Modal } from "antd/lib";
import { Carousel } from "antd/lib";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import { SiShopee } from "react-icons/si";
import ReactMarkdown from "react-markdown";

const ContentLanding: NextPage = (): ReactElement => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState<any>();
  const [point, setPoint] = useState();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogData = await getCatalogById(point);
        setDetail(catalogData?.data);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchData();
  }, [point]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (data: any) => {
    setIsModalOpen(true);
    setPoint(data);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section>
        {/* logo dork */}
        <div className=" flex justify-center md:-mt-10 -mt-12">
          <img
            src="./logo-dork.png"
            alt=""
            className=" lg:w-3/12 md:w-3/12 w-7/12 cursor-pointer"
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
              height={600}
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
              height={600}
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
                <div
                  onClick={() => showModal(data?.id)}
                  className="box-border border-yellow-950 border-[2px] rounded-[30px] p-5 shadow-2xl cursor-pointer"
                >
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
          <Modal
            title="Detail Katalog"
            open={isModalOpen}
            onOk={handleOk}
            closeIcon={false}
            width={1000}
            cancelButtonProps={{ style: { display: "none" } }}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-5">
              <Carousel arrows>
                <Image
                  src={detail?.attributes?.image?.data[0]?.attributes?.url}
                  alt="cek"
                  className="rounded-[30px] w-full"
                  preview={false}
                />
                <Image
                  src={detail?.attributes?.image?.data[0]?.attributes?.url}
                  alt="cek"
                  className="rounded-[30px] w-full"
                  preview={false}
                />
              </Carousel>

              <div className="">
                <h1 className=" font-[600] text-[24px] font-inter">
                  {detail?.attributes?.name}
                </h1>
                <hr />
                <h2 className=" mt-5 text-[16px] text-black font-[500]">
                  Creation by{" "}
                  {detail?.attributes?.user?.data?.attributes?.username}
                </h2>
                {/* <p className=" mt-3 text-[16px]">
                  {detail?.attributes?.description}
                </p> */}
                <ReactMarkdown className="mt-3 text-[16px]">
                  {detail?.attributes?.description}
                </ReactMarkdown>
                <p className=" mt-10 mb-2">Social Media :</p>
                <div className=" flex gap-2">
                  <Link
                    href={
                      "https://www.instagram.com/toughdork?igsh=YWhuZms5MnZqOHhl"
                    }
                    target="_blank"
                  >
                    {" "}
                    <RiInstagramFill className=" cursor-pointer" size={30} />
                  </Link>

                  <Link
                    href={
                      "https://www.tiktok.com/@duckydakii?_t=8mVoPwOVgzI&_r=1"
                    }
                    target="_blank"
                  >
                    <AiFillTikTok size={30} className=" cursor-pointer" />
                  </Link>
                  <Link
                    href={"https://shopee.co.id/tough_dork"}
                    target="_blank"
                  >
                    <SiShopee size={28} className=" cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default ContentLanding;
