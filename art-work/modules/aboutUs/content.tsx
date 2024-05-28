import { NextPage } from "next";
import { ReactElement } from "react";

const ContentAboutUs: NextPage = (): ReactElement => {
  return (
    <>
      <section className=" md:mt-10 mt-5 px-14 flex flex-col justify-center items-center text-center">
        <h1 className=" font-[400] lg:text-[56px] md:text-[36px] text-[24px] font-inter">
          TOUGHDORK
        </h1>
        <section className=" contact">
          <h3 className=" font-[400] lg:text-[28px] md:text-[20px] text-[18px] font-inter mt-5">
            Contact
          </h3>
          <p className=" font-[400] lg:text-[20px] md:text-[16px] text-[16px] font-inter">
            Telephone: 0822-2318-6594
          </p>
        </section>
        <section className=" address">
          <h3 className=" font-[400] lg:text-[28px] md:text-[20px] text-[18px] font-inter mt-5">
            Alamat
          </h3>
          <p className=" font-[400] lg:text-[20px] md:text-[16px] text-[16px] font-inter">
            Jl. Jati Raya No.48, Kalirejo, Kec. Ungaran Timur., <br /> Kabupaten
            Semarang, Jawa Tengah 50515
          </p>
        </section>
        <section className=" social-media">
          <h3 className=" font-[400] lg:text-[28px] md:text-[20px] text-[18px] font-inter mt-5">
            Social Media
          </h3>
          <p className=" font-[400] lg:text-[20px] md:text-[16px] text-[16px] font-inter">
            Instagram:{" "}
            <a href="https://www.instagram.com/toughdork/" target="_blank">
              {" "}
              @toughdork
            </a>
          </p>
          <p className=" font-[400] lg:text-[20px] md:text-[16px] text-[16px] font-inter">
            Tiktok:{" "}
            <a href="https://www.tiktok.com/@duckydakii" target="_blank">
              {" "}
              @duckydakii
            </a>
          </p>
        </section>
        <section className=" e-commerce">
          <h3 className=" font-[400] lg:text-[28px] md:text-[20px] text-[18px] font-inter mt-5">
            E-Commerce
          </h3>
          <p className=" font-[400] lg:text-[20px] md:text-[16px] text-[16px] font-inter">
            Shopee :{" "}
            <a href="https://shopee.co.id/tough_dork" target="_blank">
              https://shopee.co.id/tough_dork
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default ContentAboutUs;
