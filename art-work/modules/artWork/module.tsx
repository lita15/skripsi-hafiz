import { NavbarModule } from "@/components/navbar";
import { NextPage } from "next";
import { ReactElement } from "react";
import { FooterModule } from "@/components/footer";
import ContentArtWork from "./content";

const ArtWorkModule: NextPage = (): ReactElement => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarModule />
      <div className=" flex-grow">
        <ContentArtWork />
      </div>
      <FooterModule />
    </div>
  );
};

export default ArtWorkModule;
