import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterMenuDesktop = () => {
  return (
    <div className="footerMenuWrapper pt-40">
      <div className="lg:flex lg:justify-between">
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">BBT World</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">General</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerMenuCol footerMenuColLarge">
          <div className="footerMenuHead">
            <h6 className="text-white">Brands</h6>
          </div>
          <div className="footerMenu">
            <div className="flex flex-wrap justify-between">
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerMenuCol">
          <div className="footerMenuHead">
            <h6 className="text-white">Styles</h6>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
              <li>
                <a href="#">Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerPhoneNumbers flex flex-wrap justify-between py-16 mt-16 3xl:py-28">
        <div className="footerPhoneCol">
          <h6 className="text-white text-lg 3xl:text-2xl 3xl:tracking-wider">
            Buy Car
          </h6>
          <a href="tel:+919999999983" className="text-lg mt-5 xl:text-xl 3xl:text-1.6xl 3xl:mt-10 flex items-center">
            <Image
              src="/images/footer-phone-icon.webp"
              width="14"
              height="22"
              alt="Phone Number"
              className="w-3 mr-3 xl:w-4"
            />
            (+91) 9999999983
          </a>
        </div>
        <div className="footerPhoneCol">
          <h6 className="text-white text-lg 3xl:text-2xl 3xl:tracking-wider">
            Sell Your Car
          </h6>
          <a href="tel:+919999999983" className="text-lg mt-5 xl:text-xl 3xl:text-1.6xl 3xl:mt-10 flex items-center">
            <Image
              src="/images/footer-phone-icon.webp"
              width="14"
              height="22"
              alt="Phone Number"
              className="w-3 mr-3 xl:w-4"
            />
            (+91) 9999999983
          </a>
        </div>
        <div className="footerPhoneCol">
          <h6 className="text-white text-lg 3xl:text-2xl 3xl:tracking-wider">
            Car Detailing
          </h6>
          <a href="tel:+919999999983" className="text-lg mt-5 xl:text-xl 3xl:text-1.6xl 3xl:mt-10 flex items-center">
            <Image
              src="/images/footer-phone-icon.webp"
              width="14"
              height="22"
              alt="Phone Number"
              className="w-3 mr-3 xl:w-4"
            />
            (+91) 9999999983
          </a>
        </div>
        <div className="footerPhoneCol">
          <h6 className="text-white text-lg 3xl:text-2xl 3xl:tracking-wider">
            Servicing
          </h6>
          <a href="tel:+919999999983" className="text-lg mt-5 xl:text-xl 3xl:text-1.6xl 3xl:mt-10 flex items-center">
            <Image
              src="/images/footer-phone-icon.webp"
              width="14"
              height="22"
              alt="Phone Number"
              className="w-3 mr-3 xl:w-4"
            />
            (+91) 9999999983
          </a>
        </div>
        <div className="footerPhoneCol">
          <h6 className="text-white text-lg 3xl:text-2xl 3xl:tracking-wider">
            Modification & Upgrade
          </h6>
          <a href="tel:+919999999983" className="text-lg mt-5 xl:text-xl 3xl:text-1.6xl 3xl:mt-10 flex items-center">
            <Image
              src="/images/footer-phone-icon.webp"
              width="14"
              height="22"
              alt="Phone Number"
              className="w-3 mr-3 xl:w-4"
            />
            (+91) 9999999983
          </a>
        </div>
      </div>
      <div className="footerShowrooms flex flex-wrap justify-between py-16 relative 3xl:py-28">
        <h5 className="text-white text-lg absolute left-0 w-max bg-black 2xl:text-1xl 2xl:tracking-normal 3xl:text-3xl">
          Our Showrooms
        </h5>
        <div className="footerShowroomCol">
          <a href="#" className="block">
            <h6 className="text-white text-base 3xl:text-1xl 3xl:tracking-wider">Delhi/NCR</h6>
            <p className="text-base mt-4 lg:leading-8 2xl:text-lg 2xl:leading-9 3xl:text-2xl 3xl:leading-10 3xl:mt-6">
              Plot No. 134, Sector 37, Pace City 1, Gurgaon Haryana, 122001,
              India. Sales@bigboytoyz.com
            </p>
            <Image
              src="/images/footer-arrow-white.webp"
              alt="Arrow icon"
              width="16"
              height="16"
              className="object-contain w-5 mt-10 2xl:w-6 3xl:w-7 3xl:mt-12"
            />
          </a>
        </div>
        <div className="footerShowroomCol">
          <a href="#" className="block">
            <h6 className="text-white text-base 3xl:text-1xl 3xl:tracking-wider">Mumbai</h6>
            <p className="text-base mt-4 lg:leading-8 2xl:text-lg 2xl:leading-9 3xl:text-2xl 3xl:leading-10 3xl:mt-6">
              7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri
              East, N S Phadke Marg, Mumbai - 400053
            </p>
            <Image
              src="/images/footer-arrow-white.webp"
              alt="Arrow icon"
              width="16"
              height="16"
              className="object-contain w-5 mt-10 2xl:w-6 3xl:w-7 3xl:mt-12"
            />
          </a>
        </div>
        <div className="footerShowroomCol">
          <a href="#" className="block">
            <h6 className="text-white text-base 3xl:text-1xl 3xl:tracking-wider">Hydrebad</h6>
            <p className="text-base mt-4 lg:leading-8 2xl:text-lg 2xl:leading-9 3xl:text-2xl 3xl:leading-10 3xl:mt-6">
              Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park,
              Hyderabad, Telangana - 500034
            </p>
            <Image
              src="/images/footer-arrow-white.webp"
              alt="Arrow icon"
              width="16"
              height="16"
              className="object-contain w-5 mt-10 2xl:w-6 3xl:w-7 3xl:mt-12"
            />
          </a>
        </div>
        <div className="footerShowroomCol">
          <a href="#" className="block">
            <h6 className="text-white text-base 3xl:text-1xl 3xl:tracking-wider">Ahmedabad</h6>
            <p className="text-base mt-4 lg:leading-8 2xl:text-lg 2xl:leading-9 3xl:text-2xl 3xl:leading-10 3xl:mt-6">
              Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad,
              Gujarat 380001
            </p>
            <Image
              src="/images/footer-arrow-white.webp"
              alt="Arrow icon"
              width="16"
              height="16"
              className="object-contain w-5 mt-10 2xl:w-6 3xl:w-7 3xl:mt-12"
            />
          </a>
        </div>
        <div className="footerShowroomCol">
          <a href="#" className="block">
            <h6 className="text-white text-base 3xl:text-1xl 3xl:tracking-wider">Bangalore</h6>
            <p className="text-base mt-4 lg:leading-8 2xl:text-lg 2xl:leading-9 3xl:text-2xl 3xl:leading-10 3xl:mt-6">
              140, Residency Rd, Shanthala Nagar, Richmond Town, Bengaluru,
              Karnataka 560025
            </p>
            <Image
              src="/images/footer-arrow-white.webp"
              alt="Arrow icon"
              width="16"
              height="16"
              className="object-contain w-5 mt-10 2xl:w-6 3xl:w-7 3xl:mt-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMenuDesktop;
