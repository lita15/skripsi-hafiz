import { NextPage } from "next";
import { ReactElement } from "react";
import { InboxOutlined } from "@ant-design/icons/lib";
import type { UploadProps } from "antd/lib";
import { Image, message, Upload } from "antd/lib";

const ContentProfile: NextPage = (): ReactElement => {
  const { Dragger } = Upload;
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

  return (
    <section className=" pt-10 px-14 bg-gray-300">
      <div className="grid md:grid-cols-3 grid-col-1 md:gap-10 gap-5">
        <div className="">
          <section className=" profile-detail text-center font-inter flex flex-col items-center box-content border-[2px] py-5  border-gray-400 rounded-lg">
            <img
              src="/img-profile.jpg"
              alt={""}
              className=" rounded-full w-1/4 mb-1"
            />
            <h1 className=" font-[700] text-[20px]">Kendal Janner Fatahelah</h1>
            <h2 className=" font-[500] text-[16px] mt-2">kendal@gmail.com</h2>
          </section>
          <section className=" upload file mt-10 text-[15px] font-[500] mb-3">
            Upload Your Art Work
          </section>
          <div className="">
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
          </div>
        </div>
        <section className=" profile-history md:col-span-2">
          <h1 className=" mb-5 text-[16px] font-[600] font-inter">
            Your Library Art Work
          </h1>
          <div className=" grid md:grid-cols-3 grid-col-1 gap-6">
            <div className="">
              <Image
                src="/img-dummy.jpeg"
                alt=""
                className=" w-full rounded-[20px] "
              />
            </div>
            <div className="">
              <Image
                src="/img-dummy.jpeg"
                alt=""
                className=" w-full rounded-[20px] "
              />
            </div>
            <div className="">
              <Image
                src="/img-dummy.jpeg"
                alt=""
                className=" w-full rounded-[20px] "
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContentProfile;
