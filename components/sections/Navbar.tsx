import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="max-w-5xl justify-between items-center p-8 mx-auto">
      <Logo size="lg" />
      <div className="flex flex-row gap-8 items-center">
        <Link
          href="#catalog"
          className="hidden md:block font-semibold text-sm text-slate-400"
        >
          Catalog
        </Link>
        <Link
          href="#features"
          className="hidden md:block font-semibold text-sm text-slate-400"
        >
          Features
        </Link>
        <Link
          href="#reviews"
          className="hidden md:block font-semibold text-sm text-slate-400"
        >
          Reviews
        </Link>
      </div>
      <FaCartShopping className="w-6 h-6 text-slate-400 cursor-pointer" />
    </div>
  );
};

export default Navbar;
