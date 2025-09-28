import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <div className="h-dvh">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
