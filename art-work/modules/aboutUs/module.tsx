import { NavbarModule } from "@/components/navbar";
import { NextPage } from "next";
import { ReactElement } from "react";
import { FooterModule } from "@/components/footer";
import ContentAboutUs from "./content";

const AboutUsModule: NextPage = (): ReactElement => {
  return (
    <div className=" flex flex-col min-h-screen">
      <NavbarModule />
      <div className=" flex-grow">
        <ContentAboutUs />
      </div>
      <FooterModule />
    </div>
  );
};

export default AboutUsModule;
