import React from "react";
import { useState } from "react";
import Image from "next/image";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col  hover:border-red-200 gap-2 items-center border w-fit px-2 py-2.5 rounded-lg">
      <div className="flex" onClick={() => setIsOpen(!isOpen)}>
        <Image
          width={24}
          height={24}
          className="mx-2 w-6 h-6"
          src={selectedOption ? selectedOption.icon : "/icons/facebook.png"}
          alt=""
        />
        {/* svg of right angle bracket */}
        <div className={`w-4 transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
              fill="#6e6e6e"
            ></path>{" "}
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="options  w-full  flex flex-col gap-2 items-start">
          {options.map((option) => (
            <div className="w-full px-2 py-1 rounded-lg hover:bg-red-100">
              <Image
                width={24}
                height={24}
                key={option.value}
                className="w-6 h-6 "
                src={option.icon}
                alt=""
                onClick={() => handleSelect(option)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
