import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col ">
      <Navbar></Navbar>
      <div className="min-h-dvh container mx-auto pt-6">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
