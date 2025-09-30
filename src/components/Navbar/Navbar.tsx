"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="w-full h-18 bg-gray-700 flex justify-between  items-center px-5">
      <div>
        <Link href="/" className="text-white font-bold">
          NEXT JS
        </Link>
      </div>
      <div className="flex gap-5">
        <input
          type="text"
          className="bg-white rounded-sm h-8 px-2"
          placeholder="Search"
        />
        <Link
          href="/products"
          className={`${
            pathName === "/products"
              ? "text-blue-500 font-bold underline"
              : "text-white hover:underline"
          }`}
        >
          Products
        </Link>
        <Link
          href="/post"
          className={`${
            pathName === "/post"
              ? "text-blue-500 font-bold underline"
              : "text-white hover:underline"
          }`}
        >
         Post
        </Link>
        <Link
          href="/dashboard"
          className={`${
            pathName === "/dashboard"
              ? "text-blue-500 font-bold underline"
              : "text-white hover:underline"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/about"
          className={`${
            pathName === "/about"
              ? "text-blue-500 font-bold underline"
              : "text-white hover:underline"
          }`}
        >
          About
        </Link>
        <Link href="/contact" className={`${
            pathName === "/contact"
              ? "text-blue-500 font-bold underline"
              : "text-white hover:underline"
          }`}>
          Contact
        </Link>
        <Link href="/galary" className={`${
            pathName === "/galary"
              ? "text-blue-500 font-bold underline"
              : "text-white hover:underline"
          }`}>
          Galary
        </Link>
        <Link href="/login" className="text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
