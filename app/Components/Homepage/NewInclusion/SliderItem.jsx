import Image from "next/image";
import React from "react";
import styles from "./NewInclusion.module.css";
import Link from "next/link";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";

const SliderItem = ({data}) => {
  return (
    <Link
      href={`/products/${data._id}`}
      className="sm:mx-3 sm:bg-white lg:mx-8 block transition-all ease-in-out hover:shadow-lg"
    >
      <div
        className={`px-14 pt-12 pb-20 sm:px-8 sm:pt-8 sm:pb-16 lg:pb-10 3xl:px-20 3xl:pt-12 3xl:pb-16`}
      >
        <p
          className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 pt-2 py-1 leading-4 lg:text-sm lg:pt-1 3xl:text-lg 3xl:px-8`}
        >
          Reg.Year : {data.registrationYear}
        </p>
        <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:tracking-tighter 3xl:text-4.2xl 3xl:mt-8">
          {data.title}
        </h4>
        <p className={`${styles.incItemPrice} font-medium lg:mt-2 3xl:mt-4 mb-12 sm:mb-8 lg:mb-6`}>
          ₹ {data.price}
        </p>

        {/* ---- Common Components ---- */}
        <CommonInfoUsp data={data} />
        {/* ---- Common Components ---- */}
        
      </div>
      <div className=" overflow-hidden">
        <Image
          src={data.thumbnail}
          alt="Icon"
          width="390"
          height="285"
          className="object-cover w-full block h-full transition-all ease-in-out duration-500 hover:scale-150"
        />
      </div>
    </Link>
  );
};

export default SliderItem;
