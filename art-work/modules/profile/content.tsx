import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons/lib";
import type { UploadProps } from "antd/lib";
import { Image, message, Upload } from "antd/lib";
import { getArtworks } from "./api";
import { FaPencil } from "react-icons/fa6";

const ContentProfile: NextPage = (): ReactElement => {
  const { Dragger } = Upload;
  const [user, setUser] = useState<any>();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user") as string);
      setUser(user);
      const fetchData = async () => {
        try {
          const catalogData = await getArtworks(user.id);
          setData(catalogData?.artworks);
        } catch (error) {
          console.error("Error fetching catalog data:", error);
        }
      };
      fetchData();
    }
  }, []);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  console.log("cek", data);

  return (
    <section className=" pt-10 px-14 bg-gray-300">
      <div className="grid md:grid-cols-3 grid-col-1 md:gap-10 gap-5">
        <div className="">
          <section className=" profile-detail text-center font-inter flex flex-col items-center box-content border-[2px] py-5  border-gray-400 rounded-lg relative">
            {/* <div className=" absolute me-0">
              <FaPencil />
            </div> */}
            <img
              src="/img-profile.jpg"
              alt={""}
              className=" rounded-full w-1/4 mb-1"
            />
            <h1 className=" font-[700] text-[20px]">{user?.username}</h1>
            <h2 className=" font-[500] text-[16px] mt-2">{user?.email}</h2>
          </section>
          <section className=" upload file mt-10 text-[15px] font-[500] mb-3">
            Upload Your Art Work
          </section>
          <div className="flex flex-col items-center box-content border-[2px] py-5  border-gray-400 rounded-lg">
            <form action="" className=" md:px-5 px-3">
              <div className="mb-3 ">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  name="title"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="desc"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="desc"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="sosmed"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link Social Media
                </label>
                <input
                  name="sosmed"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  required
                />
              </div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image
              </label>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
              <button className="w-full mt-6 font-[600] bg-gray-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/*  */}
        <section className=" profile-history md:col-span-2">
          <h1 className=" mb-5 text-[16px] font-[600] font-inter">
            Your Library Art Work
          </h1>
          <div className=" grid md:grid-cols-3 grid-col-1 gap-6">
            {data.map((item: any) => {
              return (
                <div className="">
                  <Image
                    src={item.image[0].url}
                    alt=""
                    // height={50}
                    // width={50}
                    className=" w-full rounded-[20px] "
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContentProfile;
