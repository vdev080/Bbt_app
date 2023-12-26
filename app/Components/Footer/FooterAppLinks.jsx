import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterAppLinks = () => {
  return (
    <div className="py-16 footer-app-links text-white sm:text-center lg:flex lg:flex-wrap lg:text-left lg:items-center">
      <div className="lg:mr-20">
        <h4 className="font-medium text-3xl lg:text-xl 1xl:text-1xl 3xl:text-1.9xl">
          Download Big Boy Toyz Application!
        </h4>
        <p className="font-light mt-3 mb-8 text-zinc-400 text-2xl lg:text-lg lg:mb-0 3xl:text-1xl 3xl:mt-6">
          Application available on both platforms
        </p>
      </div>
      <div className="flex items-center sm:justify-center">
        <Link href="#">
          <Image
            src="/images/play-store-footer.webp"
            width="138"
            height="40"
            alt="Google Play"
            className=" 3xl:w-64 object-contain"
          />
        </Link>
        <span className="w-7 h-7 footerAppDivider flex items-center justify-center text-xs p-2 mx-5 opacity-50 3xl:w-9 3xl:h-9">
          OR
        </span>
        <Link href="#">
          <Image
            src="/images/app-store-footer.webp"
            width="138"
            height="40"
            alt="App Store"
            className=" 3xl:w-64 object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterAppLinks;
