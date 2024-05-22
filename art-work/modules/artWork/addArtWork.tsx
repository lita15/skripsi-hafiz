import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { InboxOutlined } from "@ant-design/icons/lib";
import type { UploadProps } from "antd/lib";
import { Button, message, Modal, Upload } from "antd/lib";
import Router, { useRouter } from "next/router";
import { creatArtworks } from "../profile/api";

const AddArtWorkModule: NextPage = (): ReactElement => {
  const { Dragger } = Upload;
  const [user, setUser] = useState<any>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [imageOk, setimageOk] = useState(false);
  const [image, setImage] = useState();
  const [uploading, setUploading] = useState<boolean>(false);

  const router = useRouter();
  const [isModalAddArtWorkOpen, setisModalAddArtWorkOpen] = useState(false);

  const showModalAddArtWork = () => {
    setisModalAddArtWorkOpen(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user") as string);
      setUser(user);
    }
  }, []);

  const props: UploadProps = {
    name: "files",
    showUploadList: false,
    onChange(info) {
      setImage(info.file.originFileObj as any);
      console.log(info.file.originFileObj);
    },
  };
  const handleUpload = async (event: any) => {
    event.preventDefault();

    setUploading(true);

    const formData = new FormData();
    formData.append("files", image as any);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      alert("Artwork uploaded successfully!");
      setImage(result[0].id);
      setUploading(false);
      setimageOk(true);
    } else {
      console.error("Error uploading artwork");
    }
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      data: {
        name: title,
        image: [image],
        description: description,
        user: user.id, // Assume user ID is 1 for this example
        social_media_url: socialMedia,
      },
    };

    const response = await creatArtworks(data);
    console.log("cek", response);

    if (response.status <= 200) {
      alert("Artwork uploaded successfully!");
      Router.reload();
    } else {
      console.error("Error uploading artwork");
    }
  };
  return (
    <div className=" flex justify-end px-14">
      <button
        onClick={() => showModalAddArtWork()}
        className=" flex items-center gap-2 md:mt-4 -mt-5 font-[600] bg-black text-white py-2 px-5 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                type="text"
                id="social-media"
                value={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
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
            <Button onClick={handleUpload} disabled={!image || uploading}>
              {uploading ? "Uploading..." : "Start Upload"}
            </Button>

            <div className=" flex gap-3 justify-end">
              <button
                onClick={() => router.back()}
                className=" mt-6 font-[600] bg-transparent border-black border-2  text-black py-2 px-5 rounded-md shadow-sm hover:bg-black hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!title || !description || !imageOk || !socialMedia}
                className=" mt-6 font-[600] bg-black disabled:text-white text-white py-2 px-5 disabled:bg-slate-300 rounded-md shadow-sm disabled:hover:bg-slate-300  hover:bg-black  disabled:hover:border-0 hover:border-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
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
