import React, { useState } from "react";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
const Hero = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const socialMediaOptions = [
    {
      label: "Facebook",
      value: "facebook",
      icon: "/icons/facebook.png",
    },
    {
      label: "Twitter",
      value: "twitter",
      icon: "/icons/twitter.png",
    },
    {
      label: "Instagram",
      value: "instagram",
      icon: "/icons/instagram.png",
    },
  ];

  const handleDelete = () => {
    setPreviewUrl(null);
  };

  return (
    <main className="flex-1 flex flex-col gap-4 py-8  px-8 max-h-full overflow-y-auto">
      <div className="header-sec flex flex-col">
        <h2 className="font-bold text-xl mb-2">Header</h2>
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold text-gray-500">Store logo</h3>
          <div className="relative w-3/5 h-36">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer transition duration-300 hover:border-red-300 group"
            >
              {previewUrl ? (
                <>
                  <Image
                    height={144}
                    width={144}
                    src={previewUrl}
                    alt="Preview"
                    className="object-contain mt-4 flex justify-center items-center overflow-hidden w-full h-full rounded-lg"
                  />
                  <button
                    onClick={handleDelete}
                    className="absolute top-0 right-0 bg-white rounded-full p-1 hover:bg-gray-200 transition duration-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x w-6 h-6"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="mb-2 flex justify-center items-center"></div>
              )}
              {!previewUrl && (
                <div className=" w-full  group-hover:-translate-x-5 flex justify-center items-center gap-1 transition-all duration-700">
                  <Image
                    height={24}
                    width={24}
                    src="/icons/upload.png"
                    className="w-5 h-5"
                    alt=""
                  />
                  <p className="text-base font-semibold  text-gray-500 opacity-0 group-hover:opacity-100  transition-all duration-300">
                    Upload
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
      <div className="footer-sec flex flex-col w-3/5 gap-2">
        <h2 className="font-bold text-xl mb-2">Footer</h2>
        <div className="flex flex-col gap-2 mb-2">
          <h3 className="font-semibold text-gray-500">Footer text</h3>
          <input
            type="text"
            className=" w-full h-14 border-2 border-gray-200 rounded-lg px-3  py-2 focus:outline-none focus:border-red-200"
            placeholder="Live your fashion"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="font-semibold text-gray-500">Social Media</h3>
          <form className="flex gap-2 flex-col">
            <div className="flex gap-2">
              <CustomSelect options={socialMediaOptions} />
              <input
                type="text"
                className="px-4 py-2 h-12 flex-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-100"
                placeholder="martin.store"
              />
            </div>
            <div className="flex gap-2">
              <CustomSelect options={socialMediaOptions} />
              <input
                type="text"
                className="px-4 py-2 h-12 flex-1  border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-100"
                placeholder="martin.store"
              />
            </div>
            <div className="flex gap-2">
              <CustomSelect options={socialMediaOptions} />
              <input
                type="text"
                className="px-4 py-2 h-12 border flex-1 border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-100"
                placeholder="martin.store"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Hero;
