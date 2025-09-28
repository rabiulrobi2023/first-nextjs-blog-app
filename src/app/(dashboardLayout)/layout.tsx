import Sidebar from "@/component/Sidebar/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="h-dvh">{children}</div>
    </div>
  );
};

export default DashboardLayout;
