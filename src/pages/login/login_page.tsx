import LoginButton from "@/components/login/LoginButton";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <LoginButton
        title="Google"
        url="http://localhost:8080/api/v1/oauth2/authorize/google"
      />
      <LoginButton
        title="Github"
        url="http://localhost:8080/api/v1/oauth2/authorize/github"
      />
    </>
  );
};

export default LoginPage;
