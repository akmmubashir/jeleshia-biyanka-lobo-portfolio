import Image from "next/image";
import React from "react";
import Vector from "@/app/assets/common/vector2.png";
import Avatar from "@/app/assets/common/profile.webp";
import Link from "next/link";
import { fetchProfileData } from "../utils/utilsService";

export default async function HeroSection() {
  const profileData = await fetchProfileData();
  return (
    <div className="h-screen max-md:h-full grid grid-cols-12 overflow-hidden p-[0px_120px] max-2xl:p-[0px_80px] max-md:p-[40px_20px]">
      <div className="col-span-6 max-md:col-span-full flex items-center h-full">
        <Image
          src={Vector}
          alt="Vector"
          priority
          className="w-fit absolute top-0 left-0"
        />
        <div className="relative z-10 max-md:pt-[80px]">
          <h1 className="text-[72px] max-2xl:text-[62px] max-lg:text-[56px] max-md:text-[36px] text-white font-semibold w-2/3 max-2xl:w-full max-md:w-full">
            {profileData?.attributes?.FullName}
          </h1>
          <div className="mt-[20px]">
            <Link
              href={"#about"}
              className="text-white border-2 border-white bg-none hover:bg-white hover:text-[#379683] p-[12px_18px] max-md:p-[8px_14px] font-medium text-[18px] max-2xl:text-[16px] max-md:text-[14px]"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-6 max-md:col-span-full flex items-center justify-center max-md:mt-[20px]">
        <div className="w-3/4 bg-white aspect-square rounded-full overflow-hidden relative z-10">
          <Image
            src={
              profileData?.attributes?.ProfileImg
                ? profileData?.attributes?.ProfileImg
                : Avatar
            }
            decoding="async"
            alt="avatar"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
