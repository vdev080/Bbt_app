import Image from "next/image";
import React from "react";

const FloatingButtons = () => {
  return (
    <div className="floatingBtnWrapper fixed left-0 bottom-0 w-full z-20 sm:hidden">
      <div className="flex">
        <div className="w-3/6 bg-white py-6 px-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/bottom-filter-icon.webp"
              alt="Filter Icon"
              width="22"
              height="11"
              className="object-contain w-9"
            />
            <span className="font-medium text-zinc-700 ml-5 text-3xl">
              Search Cars
            </span>
          </div>
        </div>
        <div className="w-3/6 bg-neutral-800 py-6 px-2">
          <a href="#" className="flex items-center justify-center">
            <Image
              src="/images/bottom-call-icon.webp"
              alt="Filter Icon"
              width="18"
              height="18"
              className="object-contain w-7"
            />
            <span className="font-medium text-white ml-5 text-3xl">
              Call Us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;
