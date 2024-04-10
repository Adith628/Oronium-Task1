import React, { useState } from "react";
import { OptionItem } from "./OptionItem";

export const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const options = [
    { text: "Home", icon: "/icons/home.png", iconsel: "/icons/home2.png" },
    { text: "Store", icon: "/icons/store.png", iconsel: "/icons/store2.png" },
    {
      text: "Profile",
      icon: "/icons/profile.png",
      iconsel: "/icons/profile2.png",
    },
    {
      text: "Settings",
      icon: "/icons/settings.png",
      iconsel: "/icons/settings2.png",
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex drop-shadow-lg justify-between flex-col bg-white border-r-2 py-8 px-5">
      <div className="flex-1 sidebar-options mb-4">
        <ul className="flex flex-col gap-2 text-sm min-w-44">
          {options.map(({ text, icon, iconsel }) => (
            <OptionItem
              key={text}
              text={text}
              icon={icon}
              iconsel={iconsel}
              isSelected={selectedItem === text}
              onItemClick={handleItemClick}
            />
          ))}
        </ul>
      </div>
      <div className="flex flex-col flex-1 theme-picker">
        <h3 className="text-lg text-gray-800 font-semibold mb-2">Theme</h3>
        <div className="flex items-center justify-between px-3 py-2 h-12 rounded-lg bg-gray-100 border-2 border-gray-200">
          <p className="text-sm">Primary color</p>
          <div className="w-4 h-4 rounded-full bg-[#C63E4A]"></div>
        </div>
      </div>
    </div>
  );
};
