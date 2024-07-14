import React from "react";
import { InputField, TextField } from "./fields";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-12 gap-[60px] max-md:gap-[40px_0] p-[80px_120px] max-2xl:p-[80px_80px] max-md:p-[30px_20px]">
      <div className="col-span-6 max-md:col-span-full">
        <div className="flex flex-col gap-[20px]">
          <div>
            <InputField
              title={"Full Name"}
              placeholder={"Enter your name"}
              type={"text"}
            />
          </div>
          <div>
            <InputField
              title={"Email"}
              placeholder={"Enter your email"}
              type={"email"}
            />
          </div>
          <div>
            <InputField
              title={"Phone Number"}
              placeholder={"Enter your phone number"}
              type={"tel"}
            />
          </div>
          <div>
            <TextField
              title={"Message"}
              placeholder={"Enter the message"}
              rows={2}
            />
          </div>
          <div className="flex">
            <button className="bg-white hover:bg-black text-[#379683] hover:text-white p-[12px_18px] max-md:p-[8px_14px] font-medium text-[18px] max-2xl:text-[16px] max-md:text-[14px]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 max-md:col-span-full flex flex-col gap-[20px] max-md:gap-[10px]">
        <h2 className="text-white text-[32px] max-md:text-[26px] font-medium">
          Contact Details
        </h2>
        <div className="flex flex-col gap-[15px] max-md:gap-[10px]">
          <div>
            <h3 className="text-white font-medium text-[22px] max-md:text-[18px]">
              Address
            </h3>
            <h6 className="text-[#fbfbfb] font-medium text-[18px] max-md:text-[14px]">
              Burjuman, Dubai, UAE
            </h6>
          </div>
          <div>
            <h3 className="text-white font-medium text-[22px] max-md:text-[18px]">
              Linked in
            </h3>
            <Link
              href={
                "https://www.linkedin.com/in/jeleshia-biyanka-lobo-04605213a"
              }
              className="text-[#fbfbfb] hover:text-[#e0e0e0] font-medium text-[18px] max-md:text-[14px]"
            >
              www.linkedin.com/in/jeleshia-biyanka-lobo
            </Link>
          </div>
          <div>
            <h3 className="text-white font-medium text-[22px] max-md:text-[18px]">
              Phone
            </h3>
            <Link
              href={"tel:+971588121153"}
              className="text-[#fbfbfb] hover:text-[#e0e0e0] font-medium text-[18px] max-md:text-[14px]"
            >
              +971 58 812 1153
            </Link>
          </div>
          <div>
            <h3 className="text-white font-medium text-[22px] max-md:text-[18px]">
              Linked in
            </h3>
            <Link
              href={"mailto:jeleshialobo@gmail.com"}
              className="text-[#fbfbfb] hover:text-[#e0e0e0] font-medium text-[18px] max-md:text-[14px]"
            >
              jeleshialobo@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
