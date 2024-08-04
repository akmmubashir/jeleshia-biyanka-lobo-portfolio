import React from "react";
import Image from "next/image";
// import { skillsData } from "../utils/data";
import listIcon from "@/app/assets/icons/tickIcon.png";
import { fetchSkillsData } from "../utils/utilsService";

export default async function SkillsSection() {
  const skillsData = await fetchSkillsData();
  // console.log(skillsData);

  return (
    <div className="flex flex-col p-[0px_120px] max-2xl:p-[0px_80px] max-md:p-[0px_20px] gap-y-[20px] max-md:gap-y-[10px]">
      <h2 className="text-white text-[32px] max-md:text-[26px] font-medium">
        Skills
      </h2>
      <div className="flex flex-wrap gap-[40px] max-md:gap-[20px]">
        {skillsData?.map((item, index) => (
          <div key={index} className="flex gap-[6px] items-center">
            <div className="w-[24px] max-md:w-[22px] h-fit">
              <Image src={listIcon} alt="listIcon" className="w-full" />
            </div>
            <p className="text-white font-medium text-[20px] max-2xl:text-[18px] max-md:text-[16px]">
              {item?.attributes?.Title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
