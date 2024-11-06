import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

interface PropType {
  url: string;
  title: string;
}

const Oauth2Button = ({ url, title }: PropType) => {
  const [beAuthUrl, setBeAuthUrl] = useState("");
  const [error, setError] = useState("");

  const getIcon = () => {
    switch (title.toLocaleLowerCase()) {
      case "google":
        return <FcGoogle style={{ height: "20px", width: "20px" }} />;
      case "github":
        return <FaGithub style={{ height: "20px", width: "20px" }} />;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData...", { beAuthUrl });
      if (!beAuthUrl) return; // useEffect runs when init the page
      window.location.href = beAuthUrl;
    };
    fetchData();
  }, [beAuthUrl]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setBeAuthUrl(url);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={handleClick}
      >
        {getIcon()}
      </Button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Oauth2Button;
