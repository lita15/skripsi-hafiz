import { NavbarModule } from "@/components/navbar";
import { NextPage } from "next";
import { ReactElement } from "react";
import { FooterModule } from "@/components/footer";
import ContentProfile from "./content";

const ProfileModule: NextPage = (): ReactElement => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarModule />
      <div className="flex-grow">
        <ContentProfile />
      </div>
      <FooterModule />
    </div>
  );
};

export default ProfileModule;
