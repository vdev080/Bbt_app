import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-dark-800 py-28 text-white">
      <div className="container">
        <div className="about-collection-header [&>p]:text-8xl [&>p]:font-black [&>p]:uppercase">
          <p>
            {" "}
            <span>Second</span>
          </p>
          <p>
            <span>Hand.</span>
          </p>
        </div>
        <div className="my-16">
          <Image
            src="/images/bbt-logo-2.webp"
            alt="BBT Logo"
            width="108"
            height="72"
            className=" object-contain w-44"
          />
        </div>
        <div className="font-light [&>p]:text-xl [&>p]:leading-1.6">
          <h2 className="font-light mb-8 tracking-tighter [&>strong]:font-normal leading-1.3">
            Second Hand <strong>Exotic SUVs are in Trend Now!</strong>
          </h2>
          <p>
            Indeed, you read it right! The field of recycled extravagant SUVs or
            pre-adored extravagant SUVs is immense to cater to your preferred
            need and finding the vehicle is not any more tedious or dreary when
            you have Big Boy Toyz at your service.You don't need to think twice
            about your choice as we assure you that our specialists here have
            experience to deal with any query you have and to address every
            single inquiry without much ado.
          </p>
          <br />
          <p>
            Probably the most blazing colourful SUVs that you can take your
            hands on at the Big Boy Toyz showroom incorporate the 2013 utilized
            Porsche Cayenne Turbo and Diesel, 2011 utilized Mercedes-Benz G55
            AMG, 2012 utilized Toyota Land Cruiser Prado VXL and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
