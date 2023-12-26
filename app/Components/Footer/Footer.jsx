"use client";
import FooterMenuWrapper from "./FooterMenuWrapper";
import FooterMenuDesktop from "./FooterMenuDesktop";
import FooterAppLinks from "./FooterAppLinks";
import FooterCopyRight from "./FooterCopyRight";
import FloatingButtons from "../FloatingButtons/FloatingButtons";

const Footer = () => {
  return (
    <>
      <FloatingButtons />
      <footer className="bg-black pb-20 sm:pb-0">
        <div className="container">
          <div className="lg:hidden">
            <FooterMenuWrapper />
          </div>
          <div className="hidden lg:block">
            <FooterMenuDesktop />
          </div>
          <FooterAppLinks />
          <FooterCopyRight />
        </div>
      </footer>
    </>
  );
};

export default Footer;
