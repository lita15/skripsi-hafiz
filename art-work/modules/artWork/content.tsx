import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import PicDummy from "../../public/img-dummy.jpeg";
import Image from "next/image";
import { Modal } from "antd/lib";
import { RiInstagramFill } from "react-icons/ri";
import { getArtworks, getArtworksById } from "./api";

const ContentArtWork: NextPage = (): ReactElement => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState();
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
        const catalogData = await getArtworksById(1);
        setDetail(catalogData?.data);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };

    fetchData();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  console.log("cekin", detail);

  return (
    <section className=" pt-20 px-14 bg-gray-300">
      <div className=" flex justify-center">
        <img src="./logo-dork.png" alt="" width={220} />
      </div>

      <div className=" grid lg:grid-cols-4 md:grid-cols-6 grid-cols-1 lg:gap-10 md:gap-5 gap-3">
        {data?.map((data: any) => {
          return (
            <div className="">
              <div
                className="box-border border-yellow-950 border-[2px] rounded-[30px] p-5 shadow-2xl cursor-pointer"
                onClick={showModal}
              >
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
              <Image
                src={detail?.attributes?.image?.data[0]?.attributes?.url}
                alt=""
                className="rounded-[30px] w-full"
                width={50}
                height={50}
              />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                maiores obcaecati aut dignissimos tempora reprehenderit facere
                alias corrupti nostrum placeat perspiciatis consequatur dolorum
                incidunt iusto optio quam illo perferendis eius.{" "}
              </p>
              <p className=" mt-10 mb-3">Share :</p>
              <RiInstagramFill size={30} />
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ContentArtWork;
