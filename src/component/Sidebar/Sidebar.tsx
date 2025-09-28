import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="h-dvh bg-gray-800 w-80 pt-5">
      <div className="pl-5 flex flex-col gap-3">
        <div>
          <p className="text-4xl font-bold text-white">Dashboard</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="profile" className="text-white">
            Profile
          </Link>
          <Link href="setting" className="text-white">
            Settings
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
