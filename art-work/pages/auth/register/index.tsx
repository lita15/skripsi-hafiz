import { RegisterModule } from "@/modules/auth/register/module";
import { NextPage } from "next";
import { ReactElement } from "react";

const RegisterPage: NextPage = (): ReactElement => {
  return <RegisterModule />;
};

export default RegisterPage;
