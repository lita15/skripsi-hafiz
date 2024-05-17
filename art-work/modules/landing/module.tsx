import { NavbarModule } from "@/components/navbar";
import { NextPage } from "next";
import { ReactElement } from "react";
import ContentLanding from "./content";
import { FooterModule } from "@/components/footer";

const LandingModule: NextPage = (): ReactElement => {
  return (
    <div className=" flex flex-col min-h-screen">
      <NavbarModule />
      <div className=" flex-grow">
        <ContentLanding />
      </div>
      <FooterModule />
    </div>
  );
};

export default LandingModule;
