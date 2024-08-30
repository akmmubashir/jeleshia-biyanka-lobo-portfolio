import React from "react";

export default async function EducationPage({data}) {
  // const data = await fetchEducationData();

  return (
    <div className="flex flex-col p-[80px_120px] max-2xl:p-[80px_80px] max-md:p-[40px_20px] gap-y-[20px] max-md:gap-y-[10px]">
      <h2 className="text-white text-[32px] max-md:text-[26px] font-medium">
        Education
      </h2>
      <div className="grid grid-cols-12 gap-[40px] max-md:gap-[20px_0]">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="col-span-full flex flex-col gap-y-[10px]"
          >
            <div className="flex flex-col gap-y-[5px]">
              <h3 className="text-white font-medium text-[26px] max-md:text-[20px]">
                {item?.attributes?.Course}
              </h3>
              <h6 className="text-white font-medium text-[22px] max-md:text-[18px]">
                {item?.attributes?.Institute} |{" "}
                <span>{item?.attributes?.Location}</span>
              </h6>
              <p className="text-[#F2F2F2] font-medium text-[18px] max-md:text-[16px]">
                {item?.attributes?.StartingDate}
                {item?.attributes?.StartingDate ? " - " : null}
                {item?.attributes?.EndingDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
