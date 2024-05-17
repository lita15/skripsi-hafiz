import { LoginModule } from "@/modules/auth/login/module";
import { NextPage } from "next";
import { ReactElement } from "react";

const LoginPage: NextPage = (): ReactElement => {
  return <LoginModule />;
};

export default LoginPage;
