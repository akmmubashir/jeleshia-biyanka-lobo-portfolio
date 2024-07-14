import React from "react";
import { educationHistoryData } from "../utils/data";

const EducationSection = () => {
  return (
    <div className="flex flex-col p-[80px_120px] max-2xl:p-[80px_80px] max-md:p-[40px_20px] gap-y-[20px] max-md:gap-y-[10px]">
      <h2 className="text-white text-[32px] font-medium">Education</h2>
      <div className="grid grid-cols-12 gap-[40px] max-md:gap-[20px_0]">
        {educationHistoryData?.map((item) => (
          <div
            key={item?.id}
            className="col-span-full flex flex-col gap-y-[10px]"
          >
            <div className="flex flex-col gap-y-[5px]">
              <h3 className="text-white font-medium text-[26px] max-md:text-[20px]">
                {item?.course}
              </h3>
              <h6 className="text-white font-medium text-[22px] max-md:text-[18px]">
                {item?.institute} | <span>{item?.location}</span>
              </h6>
              <p className="text-[#F2F2F2] font-medium text-[18px] max-md:text-[16px]">
                {item?.startDate}
                {item?.startDate ? " - " : null}
                {item?.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
