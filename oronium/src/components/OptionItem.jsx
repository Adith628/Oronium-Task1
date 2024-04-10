import React from "react";
import Image from "next/image";
export const OptionItem = ({
  text,
  icon,
  iconsel,
  isSelected,
  onItemClick,
}) => {
  return (
    <li
      className={`flex gap-4 font-semibold justify-start hover:bg-red-100 items-center px-4 py-3 rounded-lg cursor-pointer ${
        isSelected
          ? " border-2 bg-red-100 border-red-200 text-red-500"
          : "border-2 border-white"
      }`}
      onClick={() => onItemClick(text)}
    >
      <Image
        height={24}
        width={24}
        src={isSelected ? iconsel : icon}
        className="w-5 "
        alt=""
      />
      <span>{text}</span>
    </li>
  );
};
