import React, { useEffect, useState } from "react";

interface PropType {
  url: string;
  title: string;
}

const LoginButton = ({ url, title }: PropType) => {
  const [beAuthUrl, setBeAuthUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData...", { beAuthUrl });
      if (!beAuthUrl) return; // useEffect runs when init the page

      window.location.href = beAuthUrl;

      // try {
      //   const response = await fetch(beAuthUrl);
      //   console.log("response...", { "ok?": response.ok });
      //   if (!response.ok) {
      //     throw new Error(`Error: ${response.statusText}`);
      //   }
      //   const result = await response.text();
      //   console.log("window.location.href", { result });
      //   window.location.href = result;
      // } catch (err: any) {
      //   console.log("err", { err });
      //   setError(err.message);
      // }
    };
    fetchData();
  }, [beAuthUrl]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setBeAuthUrl(url);
    console.log("loginPage", { url });
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>
        {title}
      </a>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginButton;
