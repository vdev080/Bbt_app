import React from "react";
import BreadCrumb from "../../CommonComponents/BreadCrumb/BreadCrumb";
import Image from "next/image";

const PageHeader = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="py-16">
          <BreadCrumb pageTitle="Collection" />
          <div className="flex flex-wrap items-center justify-between mt-5">
            <h2 className="text-3xl">Total 1575 Results Found</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-max cursor-pointer">
                <Image
                  src="/images/collection-filter-icon.webp"
                  width="20"
                  height="20"
                  className="w-8 object-contain"
                  alt="Filter Icon"
                />
              </div>
              <select
                name="sortCollection"
                id=""
                className="w-32 border border-neutral-400 px-2 py-3 text-lg rounded-md ml-5"
              >
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
