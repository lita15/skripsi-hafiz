import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { UploadOutlined } from "@ant-design/icons/lib";
import type { UploadProps } from "antd/lib";
import { message, Modal, Upload } from "antd/lib";
import { useRouter } from "next/router";

const AddArtWorkModule: NextPage = (): ReactElement => {
  const router = useRouter();
  const [isModalAddArtWorkOpen, setisModalAddArtWorkOpen] = useState(false);

  const showModalAddArtWork = () => {
    setisModalAddArtWorkOpen(true);
  };

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className=" flex justify-end">
      <button
        onClick={() => showModalAddArtWork()}
        className=" flex items-center gap-2 mt-4 font-[600] bg-black text-white py-2 px-5 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <FaPlus />
        <span className=" md:block hidden"> Add Art Work</span>
      </button>

      <Modal
        title="Add Art Work"
        open={isModalAddArtWorkOpen}
        // onOk={handleOk}
        width={500}
        closeIcon={false}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="">
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
            <Upload {...props}>
              <button className=" flex items-center gap-3 ">
                <UploadOutlined />
                Click to Upload
              </button>
            </Upload>
            <div className=" flex gap-3 justify-end">
              <button
                onClick={() => router.back()}
                className=" mt-6 font-[600] bg-transparent border-black border-2  text-black py-2 px-5 rounded-md shadow-sm hover:bg-black hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Cancel
              </button>
              <button className=" mt-6 font-[600] bg-black text-white py-2 px-5 rounded-md shadow-sm hover:bg-black hover:text-black hover:border-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddArtWorkModule;
