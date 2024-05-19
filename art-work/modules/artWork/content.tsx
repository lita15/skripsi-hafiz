import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { Image, Modal } from "antd/lib";
import { RiInstagramFill } from "react-icons/ri";
import { getArtworks, getArtworksById } from "./api";
import Router from "next/router";

const ContentArtWork: NextPage = (): ReactElement => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState<any>();
  const [point, setPoint] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const catalogData = await getArtworks();
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
        const catalogData = await getArtworksById(point);
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

  console.log("cek", point);

  return (
    <section className=" -mt-10 px-14">
      <div className=" flex justify-center">
        <img
          src="./logo-dork.png"
          alt=""
          className=" lg:w-2/12 md:w-3/12 w-5/12"
        />
      </div>

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 gap-3">
        {data?.map((data: any) => {
          return (
            <div className="">
              <div
                className="box-border border-yellow-950 border-[2px] rounded-[30px] p-5 shadow-2xl cursor-pointer"
                onClick={() => showModal(data?.id)}
              >
                <div className="flex justify-center items-center">
                  {" "}
                  <Image
                    src={data?.attributes?.image?.data[0]?.attributes?.url}
                    alt=""
                    className=" w-full"
                    preview={false}
                  />
                </div>
              </div>
              <h1 className=" mt-3 font-[600] text-[18px] font-inter capitalize text-center">
                {data?.attributes?.name}
              </h1>
            </div>
          );
        })}
        <Modal
          title="Detail ArtWork"
          open={isModalOpen}
          onOk={handleOk}
          closeIcon={false}
          width={1000}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="box-border rounded-[30px] ">
              <div className=" flex justify-center">
                <Image
                  src={detail?.attributes?.image?.data[0]?.attributes?.url}
                  alt=""
                  className="rounded-[30px] w-full"
                  preview={false}
                />
              </div>
            </div>
            <div className="">
              <h1 className=" font-[600] text-[20px] font-inter">
                {detail?.attributes?.name}
              </h1>
              <hr />
              <h2 className=" mt-5 text-[16px] text-black font-[500]">
                {detail?.attributes?.user?.data?.attributes?.username}
              </h2>
              <p className=" mt-3 text-[16px]">
                {detail?.attributes?.description}
              </p>
              <p className=" mt-10 mb-2">Share :</p>

              <RiInstagramFill
                size={30}
                onClick={() =>
                  Router.push(detail?.attributes?.social_media_url)
                }
              />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ContentArtWork;
