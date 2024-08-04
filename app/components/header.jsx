import Image from "next/image";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Avatar from "@/app/assets/common/profile.webp";
import Link from "next/link";
import { fetchContactData, fetchProfileData } from "../utils/utilsService";

export default async function Header() {
  const profileData = await fetchProfileData();
  const contactData = await fetchContactData();

  return (
    <div className="fixed top-0 z-50 p-[40px_120px] max-md:p-[40px_20px_0] bg-none w-full flex items-center">
      {/* <div className="fixed top-0 z-50 p-[20px_100px] bg-[#00000010] w-full flex items-center"> */}
      <div className="h-[60px] max-md:h-[40px] aspect-square rounded-full bg-white overflow-hidden shadow-xl">
        <Image
          src={
            profileData?.attributes?.ProfileImg
              ? profileData?.attributes?.ProfileImg
              : Avatar
          }
          decoding="async"
          alt="avatar"
        />
      </div>
      <div className="ms-auto">
        <Link href={contactData?.attributes?.EmailLink}>
          <MdOutlineAlternateEmail className="text-[30px] text-white hover:text-[#f5f5f5]" />
        </Link>
      </div>
    </div>
  );
}
