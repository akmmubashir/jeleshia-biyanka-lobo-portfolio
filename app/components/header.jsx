import Image from "next/image";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Avatar from "@/app/assets/common/avatar.webp";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 p-[40px_120px] max-md:p-[40px_20px_0] bg-none w-full flex items-center">
      {/* <div className="fixed top-0 z-50 p-[20px_100px] bg-[#00000010] w-full flex items-center"> */}
      <div className="h-[60px] max-md:h-[40px] aspect-square rounded-full bg-white overflow-hidden shadow-xl">
        <Image src={Avatar} alt="avatar" />
      </div>
      <div className="ms-auto">
        <Link href={"mailto:jeleshialobo@gmail.com"}>
          <MdOutlineAlternateEmail className="text-[30px] text-white hover:text-[#f5f5f5]" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
