import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons/lib";
import type { UploadProps } from "antd/lib";
import { Image, message, Upload } from "antd/lib";
import { creatArtworks, editProfile, getArtworks, profileDetail } from "./api";
import { Button } from "antd/lib";
import Router from "next/router";

const ContentProfile: NextPage = (): ReactElement => {
  const [user, setUser] = useState<any>();
  const [data, setData] = useState([]);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [image, setImage] = useState();

  const userDetail = async () => {
    const user = await profileDetail();
    setUser(user);
    setusername(user.username);
    setemail(user.email);
  };

  useEffect(() => {
    userDetail();
    if (typeof window !== "undefined") {
      const fetchData = async () => {
        try {
          const catalogData = await getArtworks();
          setData(catalogData?.artworks);
        } catch (error) {
          console.error("Error fetching catalog data:", error);
        }
      };
      fetchData();
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
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      data: {
        username: username,
        email: email,
      },
    };

    const response = await editProfile(user.id, data);

    if (response.status <= 200) {
      alert("Profile Update successfully!");
      Router.reload();
    } else {
      console.error("Error Update Profile");
    }
  };

  return (
    <section className=" pt-10 px-14 ">
      <div className="grid md:grid-cols-3 grid-col-1 md:gap-10 gap-5">
        <div className="">
          <section className=" profile-detail text-center font-inter flex flex-col items-center box-content border-[2px] py-5  border-gray-400 rounded-lg relative">
            <img
              src="/img-profile.jpg"
              alt={""}
              className=" rounded-full w-1/4 mb-1"
            />
            <h1 className=" font-[700] text-[20px]">{user?.username}</h1>
            <h2 className=" font-[500] text-[16px] mt-2">{user?.email}</h2>
          </section>
          <section className=" upload file mt-10 text-[15px] font-[500] mb-3">
            Edit Profile
          </section>
          <div className="flex flex-col box-content border-[2px] py-5  border-gray-400 rounded-lg">
            <form action="" className=" md:px-5 px-3">
              <div className="mb-3 ">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  name="username"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  required
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 font-[600] bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* library art work  */}
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
