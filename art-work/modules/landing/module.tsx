import { NavbarModule } from "@/components/navbar";
import { NextPage } from "next";
import { ReactElement } from "react";
import { ContentLanding } from "./content";
import { FooterModule } from "@/components/footer";

export const LandingModule: NextPage = (): ReactElement => {
  return (
    <div className="">
      <NavbarModule />
      <ContentLanding />
      <FooterModule />
    </div>
  );
};
