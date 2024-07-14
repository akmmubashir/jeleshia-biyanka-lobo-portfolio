import React from "react";

export const InputField = ({ type, name, id, value, placeholder, title }) => {
  return (
    <React.Fragment>
      <p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white font-medium mb-[5px]">
        {title}
      </p>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        className="w-full text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-black font-medium bg-white placeholder:text-[#5A5A5A] min-h-[56px] max-2xl:min-h-[50px] max-md:min-h-[46px] p-[10px_15px] max-2xl:p-[8px_12px] max-md:p-[6px_10px] outline-none"
      />
    </React.Fragment>
  );
};

export const TextField = ({
  name,
  id,
  value,
  placeholder,
  title,
  onChange,
  rows,
}) => {
  return (
    <React.Fragment>
      <p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white font-medium mb-[5px]">
        {title}
      </p>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={rows}
        className="w-full text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-black font-medium bg-white placeholder:text-[#5A5A5A] min-h-[56px] max-2xl:min-h-[50px] max-md:min-h-[46px] p-[10px_15px] max-2xl:p-[8px_12px] max-md:p-[6px_10px] outline-none"
      />
    </React.Fragment>
  );
};
