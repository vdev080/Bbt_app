"use client";
import React from "react";
import CommonInfoUsp from "../CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CollectionItem = ({ data }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="pb-16">
      <div className="container">
        <Link
          href={`/products/${data._id}`}
          className="block px-6 pt-16 border-t border-neutral-400"
        >
          <p
            className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 pt-2 py-1 leading-4 lg:text-sm lg:pt-1 3xl:text-lg 3xl:px-8`}
          >
            Reg.Year : {data.registrationYear}
          </p>
          <h4 className="mt-4 sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:tracking-tighter 3xl:text-4.2xl 3xl:mt-8">
            {data.title}
          </h4>
          <p
            className={`text-3xl mt-2 font-medium lg:mt-3 3xl:mt-4 mb-12 sm:mb-8 lg:mb-6`}
          >
            ₹ {data.price}
          </p>
        </Link>
      </div>

      <Link href={`/products/${data._id}`} className="block">
        <div>
          <Slider {...settings} className="collection-gallery-slider">
            {data.gallery.map((galleryImage, index) => (
              <div key={index} className="relative pt-2">
                <Image
                  src={galleryImage}
                  alt="Product Image"
                  className="w-full object-cover block"
                  width="400"
                  height="310"
                />
                {data.isBooked && <Image src="/images/collection-booked.webp" alt="Booked" width="33" height="84" className="object-contain absolute right-6 z-10 w-12 top-0 collection-sold-mark" />}
                {data.isSoldOut && <Image src="/images/collection-sold.webp" alt="Sold" width="33" height="84" className="object-contain absolute right-6 z-20 w-12 top-0 collection-sold-mark" />}
              </div>
            ))}
          </Slider>
        </div>
      </Link>

      <div className="container">
        <div className="px-6 pt-8">
          <Link href={`/products/${data._id}`} className="block">
            <CommonInfoUsp data={data} />
          </Link>

          <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
            <div className="callBtnLeft">
              <Link href="#" className="btn btnBlack btnSquare">
                <Image
                  src="/images/square-btn-call-icon.webp"
                  width="16"
                  height="16"
                  alt="Call Icon"
                  className="object-contain w-7 mr-6"
                />
                Call Big Boy Toyz
              </Link>
            </div>
            <div className="callBtnRight ml-4">
              <a href="#" className="btn smallCallBtn whatsAppBtn">
                <Image
                  src="/images/whatsapp-btn-icon.webp"
                  width="18"
                  height="18"
                  alt="Call Icon"
                  className="object-contain w-9"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
