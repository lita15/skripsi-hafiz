import { NextPage } from "next";
import { ReactElement, useState } from "react";
import PicDummy from "../../public/img-dummy.jpeg";
import Image from "next/image";
import { Modal } from "antd/lib";
import { RiInstagramFill } from "react-icons/ri";

const ContentArtWork: NextPage = (): ReactElement => {
  const dummyKatalog = [
    {
      pic: PicDummy,
      title: "Montain View",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
    {
      pic: PicDummy,
      title: "Montain ",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <section className=" pt-20 px-14 bg-gray-300">
      <div className=" flex justify-center">
        <img src="./logo-dork.png" alt="" width={220} />
      </div>

      <div className=" grid lg:grid-cols-4 md:grid-cols-6 grid-cols-1 lg:gap-10 md:gap-5 gap-3">
        {dummyKatalog?.map((data) => {
          return (
            <div className="">
              <div
                className="box-border border-yellow-950 border-[2px] rounded-[30px] p-5 shadow-2xl cursor-pointer"
                onClick={showModal}
              >
                <Image src={data?.pic} alt="" />
              </div>
              <h1 className=" mt-3 font-[600] text-[18px] font-inter capitalize text-center">
                {data?.title}
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
              <Image src={PicDummy} alt="" className="rounded-[30px] " />
            </div>
            <div className="">
              <h1 className=" font-[600] text-[20px] font-inter">
                Title Detail Photo
              </h1>
              <hr />
              <h2 className=" mt-5 text-[16px] text-black font-[500]">
                Author{" "}
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
