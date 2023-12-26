import Image from "next/image";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ pageTitle }) => {
  return (
    <p className="flex flex-wrap items-center">
      <Link href="/" className="text-lg">
        Home
      </Link>
      <Image src="/images/breadcumb-arrow.webp" className="object-contain w-2 inline-block mx-2" width="5" height="5" alt="Arrow Icon" />
      <span className="text-lg">{pageTitle}</span>
    </p>
  );
};

export default BreadCrumb;
