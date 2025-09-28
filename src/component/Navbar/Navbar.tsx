import Link from "next/link";

const Navbar = () => {
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
        <Link href="/products" className="text-white">
          Products
        </Link>
        <Link href="/dashboard" className="text-white">
          Dashboard
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
        <Link href="/galary" className="text-white">
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
