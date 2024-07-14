import React from "react";
import { workHistoryData } from "../utils/data";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col p-[0px_120px] max-2xl:p-[0px_80px] max-md:p-[0px_20px] gap-y-[20px] max-md:gap-y-[10px]">
      <h2 className="text-white text-[32px] font-medium">Work History</h2>
      <div className="grid grid-cols-12 gap-[40px] max-md:gap-[20px_0]">
        {workHistoryData?.map((item) => (
          <div
            key={item?.id}
            className="col-span-full bg-[rgba(255,255,255,0.05)] p-[15px] rounded-[12px] flex flex-col gap-y-[10px] shadow-lg"
          >
            <div className="flex flex-col gap-y-[5px]">
              <h3 className="text-white font-medium text-[26px] max-md:text-[20px]">
                {item?.position}
              </h3>
              <h6 className="text-white font-medium text-[22px] max-md:text-[18px]">
                {item?.companyName} | <span>{item?.location}</span>
              </h6>
              <p className="text-[#F2F2F2] font-medium text-[18px] max-md:text-[16px]">
                {item?.startDate} - {item?.endDate}
              </p>
            </div>
            <div className="">
              <ul className="list-disc pl-5 py-2">
                {item.points.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#F2F2F2] text-[18px] max-2xl:text-[16px] max-md:text-[14px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
