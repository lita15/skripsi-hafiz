import { NavbarModule } from "@/components/navbar";
import { NextPage } from "next";
import { ReactElement } from "react";
import { FooterModule } from "@/components/footer";
import ContentArtWork from "./content";

const ArtWorkModule: NextPage = (): ReactElement => {
  return (
    <div className="">
      <NavbarModule />
      <ContentArtWork />
      <FooterModule />
    </div>
  );
};

export default ArtWorkModule;
