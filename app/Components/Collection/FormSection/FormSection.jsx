"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FormSection = () => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <section className="bg-black text-white py-20">
      <div className="container">
        <div className="px-3">
          <h2 className="font-normal text-white tracking-tighter text-4.5xl">
            <span className="block font-light">Planning To Sell?</span> Sell
            Your Car In 29 Minutes
          </h2>
          <form action="" className="block">
            <div className="flex flex-wrap items-center">
              <div className="w-28 h-28 rounded-lg border border-neutral-400 flex items-center justify-center cursor-pointer relative my-10 p-3">
                <input
                  accept="image/*"
                  type="file"
                  onChange={imageChange}
                  className="block opacity-0 w-full h-full absolute"
                />
                {selectedImage ? (
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    width="65"
                    height="65"
                    className="w-full h-full object-cover block"
                    alt="Car Image"
                  />
                ) : (
                  <Image
                    src="/images/collection-photo-upload.webp"
                    alt="Add Photo"
                    width="20"
                    height="20"
                    className="w-8 object-contain"
                  />
                )}
              </div>
              <p className="text-2xl font-light ml-5">
                Upload Your <br /> Car Photo
              </p>
            </div>

            <div className="mb-10">
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="w-full block text-2xl placeholder:text-2xl placeholder:text-neutral-300 text-white py-7 px-7 border border-neutral-500 rounded-lg outline-none bg-transparent"
              />
            </div>
            <div className="mb-10">
              <input
                type="tel"
                placeholder="Phone*"
                required
                className="w-full block text-2xl placeholder:text-2xl placeholder:text-neutral-300 text-white py-7 px-7 border border-neutral-500 rounded-lg outline-none bg-transparent"
              />
            </div>
            <button
              className="w-full block bg-white text-black py-7 text-center text-2xl font-medium rounded-lg outline-none border border-white hover:bg-transparent hover:text-white transition-all duration-500"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="divider relative h-px w-full bg-neutral-500 my-20">
            <span className="w-14 h-14 rounded-50% bg-black text-white text-xl text-center flex items-center justify-center p-1 uppercase absolute-center border border-neutral-500">
              OR
            </span>
          </div>
          <p className="text-white text-2xl">
            For further enquiry, you can call or whatsapp
          </p>

          <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
            <div className="callBtnLeft">
              <Link
                href="#"
                className="btn btnBlack btnSquare border border-neutral-500 h-extra"
              >
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
            <div className="callBtnRight">
              <a href="#" className="btn smallCallBtn whatsAppBtn h-extra ml-5">
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
    </section>
  );
};

export default FormSection;
