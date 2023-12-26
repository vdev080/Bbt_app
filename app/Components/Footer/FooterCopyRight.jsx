import Link from "next/link";
import React from "react";

const FooterCopyRight = () => {
  return (
    <div className="py-20 text-zinc-400 sm:text-center lg:flex lg:flex-wrap lg:text-left lg:items-center lg:justify-between lg:py-14 3xl:py-24">
      <div className="block lg:flex items-center">
        <p className="mb-4 text-2xl lg:text-lg lg:mb-0 3xl:text-1.6xl">Copyright © 2023 Big Boy Toyz</p>
        <ul className="hidden lg:flex items-center ml-5 footerPrivacyMenu">
          <li><a href="#" className="text-base relative px-2 3xl:text-xl">Privacy Policy</a></li>
          <li><a href="#" className="text-base relative px-2 3xl:text-xl">Conditions & Refund</a></li>
          <li><a href="#" className="text-base relative px-2 3xl:text-xl">Terms of Use</a></li>
          <li><a href="#" className="text-base relative px-2 3xl:text-xl">Site Map</a></li>
        </ul>
      </div>
      <p className="text-2xl lg:text-lg text-zinc-600 3xl:text-1.6xl">
        Website Designed by{" "}
        <Link href="#" className="underline">
          Art Attackk
        </Link>
      </p>
    </div>
  );
};

export default FooterCopyRight;
