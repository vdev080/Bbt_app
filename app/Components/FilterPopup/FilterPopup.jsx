"use client";
import React, { useEffect, useState } from "react";
import styles from "./FilterPopup.module.css";
import Image from "next/image";

const brands = [
  {
    _id: "001",
    title: "BMW",
    logo: "/images/detail-page/brand-icon-bmw.webp",
    url: "#",
  },
  {
    _id: "002",
    title: "AUDI",
    logo: "/images/detail-page/brand-icon-audi.webp",
    url: "#",
  },
  {
    _id: "003",
    title: "MERCEDES",
    logo: "/images/detail-page/brand-icon-mercedes.webp",
    url: "#",
  },
  {
    _id: "004",
    title: "JAGUAR",
    logo: "/images/detail-page/brand-icon-jaguar.webp",
    url: "#",
  },
  {
    _id: "005",
    title: "LAND ROVER",
    logo: "/images/detail-page/brand-icon-land-rover.webp",
    url: "#",
  },
  {
    _id: "006",
    title: "BENTLEY",
    logo: "/images/detail-page/brand-icon-bentley.webp",
    url: "#",
  },
  {
    _id: "007",
    title: "PORSCHE",
    logo: "/images/detail-page/brand-icon-porsche.webp",
    url: "#",
  },
  {
    _id: "008",
    title: "LAMBORGHINI",
    logo: "/images/detail-page/brand-icon-lambo.webp",
    url: "#",
  },
  {
    _id: "009",
    title: "JEEP",
    logo: "/images/detail-page/brand-icon-jeep.webp",
    url: "#",
  },
  {
    _id: "0010",
    title: "FERRARI",
    logo: "/images/detail-page/brand-icon-ferrari.webp",
    url: "#",
  },
  {
    _id: "0011",
    title: "ROLLS ROYCE",
    logo: "/images/detail-page/brand-icon-rolls-royace.webp",
    url: "#",
  },
  {
    _id: "0012",
    title: "Honda",
    logo: "/images/detail-page/brand-icon-honda.webp",
    url: "#",
  },
  {
    _id: "0013",
    title: "SKODA",
    logo: "/images/detail-page/brand-icon-skoda.webp",
    url: "#",
  },
  {
    _id: "0014",
    title: "TOYOTA",
    logo: "/images/detail-page/brand-icon-toyota.webp",
    url: "#",
  },
  {
    _id: "0015",
    title: "VOLVO",
    logo: "/images/detail-page/brand-icon-volvo.webp",
    url: "#",
  },
  {
    _id: "0016",
    title: "HYUNDAI",
    logo: "/images/detail-page/brand-icon-hyundai.webp",
    url: "#",
  }
];

const categories = [
  {
    _id: "001",
    title: "SUVs",
    icon: "/images/detail-page/category-icon-suv.webp",
    url: "#",
  },
  {
    _id: "002",
    title: "Sedan",
    icon: "/images/detail-page/category-icon-sedan.webp",
    url: "#",
  },
  {
    _id: "003",
    title: "Convertible",
    icon: "/images/detail-page/category-icon-convertable.webp",
    url: "#",
  },
  {
    _id: "004",
    title: "Coupe",
    icon: "/images/detail-page/category-icon-coupe.webp",
    url: "#",
  },
  {
    _id: "005",
    title: "Sports",
    icon: "/images/detail-page/category-icon-sports.webp",
    url: "#",
  },
];

const FilterPopup = ({ active, togglePopup }) => {
  const [brandsRowOne, setBrandsRowOne] = useState([]);
  const [brandsRowTwo, setBrandsRowTwo] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  const divideBransArray = () => {
    const midIndex = Math.floor(brands.length / 2);
    const firstPart = brands.slice(0, midIndex);
    const secondPart = brands.slice(midIndex);
    setBrandsRowOne(firstPart);
    setBrandsRowTwo(secondPart);
  };

  //   Select and Unselect Brands Function
  const selectBrandsController = (item) => {
    const isInArray = selectedBrands.filter((e) => e._id === item._id);
    if (isInArray.length > 0) {
      const filteredBrands = selectedBrands.filter(
        (brand) => brand._id !== item._id
      );
      setSelectedBrands(filteredBrands);
    } else {
      setSelectedBrands([...selectedBrands, item]);
    }
  };

  //   Select Budget function
  const handleSelectBudget = (budget) => {
    setSelectedBudget(budget);
  };

  //   Select and Unselect Vehicle Type Function
  const selectTypesController = (item) => {
    const isInArray = selectedTypes.filter((e) => e._id === item._id);
    if (isInArray.length > 0) {
      const filteredBrands = selectedTypes.filter(
        (brand) => brand._id !== item._id
      );
      setSelectedTypes(filteredBrands);
    } else {
      setSelectedTypes([...selectedTypes, item]);
    }
  };

  //   Reset function
  const handleResetFilter = (budget) => {
    setSelectedTypes([]);
    setSelectedBrands([]);
    setSelectedBudget("");
    setDisableSubmit(true);
  };

  const handleSubmit = () => {
    if (!disableSubmit) {
      console.log("Selected Brands:", selectedBrands);
      console.log("Selected Budget:", selectedBudget);
      console.log("Selected Types:", selectedTypes);
      togglePopup();
    }
  };

  useEffect(() => {
    if (
      selectedBrands.length > 0 ||
      selectedTypes.length > 0 ||
      selectedBudget
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [selectedBrands, selectedTypes, selectedBudget]);

  //   Divide Brands array into 2 ul
  useEffect(() => {
    divideBransArray();
  }, []);

  return (
    <div
      className={`${
        active ? "opacity-100 flex" : ""
      } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-100`}
    >
      <div
        className={`${styles.popupOverlay} w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
        onClick={togglePopup}
      ></div>
      <div
        className={`${styles.filterPopupContent} w-full bg-white h-screen z-20 mx-auto relative overflow-x-hidden`}
      >
        <div
          className={`${styles.filterContentWrapper} overflow-y-auto h-full px-8 pb-10 xl:px-12`}
        >
          <div className="flex justify-between py-6 border-b border-neutral-200 xl:pt-9">
            <h3 className="3.5xl font-medium">Filters</h3>
            <div className="flex items-center">
              <div
                className={`flex- items-center w-max border border-black cursor-pointer group hover:bg-black transition-all duration-300 ${styles.filterReset} ${disableSubmit ? 'opacity-40 pointer-events-none':""}`}
                onClick={handleResetFilter}
              >
                <Image
                  src="/images/filter-reset.webp"
                  width="14"
                  height="14"
                  alt="Reset Filter"
                  className="w-5 inline-block object-contain transition-all duration-300 group-hover:invert"
                />
                <span className="text-xl inline-block ml-4 leading-none transition-all duration-300 group-hover:text-white">
                  Reset
                </span>
              </div>
              <div
                className="w-max p-3 flex justify-center items-center cursor-pointer rounded-50% border border-black ml-3 group hover:bg-black transition-all duration-300"
                onClick={togglePopup}
              >
                <Image
                  src="/images/filter-close.webp"
                  width="12"
                  height="12"
                  alt="Close Popup"
                  className="w-5 object-contain transition-all duration-300 group-hover:invert"
                />
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="pt-10 pb-12">
            {brandsRowOne.length > 0 && (
              <>
                <p className="font-medium text-1xl mb-4 xl:text-3xl">Popular Brands</p>
                <ul
                  className={`${styles.filterBrands} flex flex-nowrap overflow-x-auto no-scroll-bar pb-3 pt-4`}
                >
                  {brandsRowOne?.map((brand) => (
                    <li
                      key={brand._id}
                      title={brand.title}
                      className={`py-7 px-6 border border-neutral-200 rounded-md mr-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        selectedBrands.some((item) => item._id === brand._id)
                          ? styles.active
                          : ""
                      }`}
                      onClick={() => selectBrandsController(brand)}
                    >
                      <Image
                        src={brand.logo}
                        width="100"
                        height="100"
                        alt={brand.title}
                        className="object-contain block w-full max-h-16"
                      />
                    </li>
                  ))}
                </ul>
              </>
            )}

            {brandsRowTwo.length > 0 && (
              <ul
                className={`${styles.filterBrands} flex flex-nowrap overflow-x-auto no-scroll-bar pb-3 pt-4`}
              >
                {brandsRowTwo?.map((brand) => (
                  <li
                    key={brand._id}
                    title={brand.title}
                    className={`py-7 px-6 border border-neutral-200 rounded-md mr-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      selectedBrands.some((item) => item._id === brand._id)
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => selectBrandsController(brand)}
                  >
                    <Image
                      src={brand.logo}
                      width="100"
                      height="100"
                      alt={brand.title}
                      className="object-contain block w-full max-h-16"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Budget */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className="font-medium text-1xl xl:text-3xl">Budget</p>
            <ul className="no-scroll-bar overflow-auto flex py-7">
              <li
                className={`text-base tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg ${
                  styles.budgetItem
                } ${selectedBudget === "500000" ? styles.active : ""}`}
                onClick={() => handleSelectBudget("500000")}
              >
                Less Than 50L
              </li>
              <li
                className={`text-base tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg ${
                  styles.budgetItem
                } ${
                  selectedBudget === "5000000-10000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("5000000-10000000")}
              >
                50L to 1Cr
              </li>
              <li
                className={`text-base tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg ${
                  styles.budgetItem
                } ${
                  selectedBudget === "10000000-15000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("10000000-15000000")}
              >
                1Cr to 1.5Cr
              </li>
              <li
                className={`text-base tracking-tight px-5 border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-lg ${
                  styles.budgetItem
                } ${
                  selectedBudget === "15000000-50000000" ? styles.active : ""
                }`}
                onClick={() => handleSelectBudget("15000000-50000000")}
              >
                1.5Cr & Above
              </li>
            </ul>
          </div>

          {/* Vehicle Type */}
          <div className="py-12">
            <p className="font-medium text-1xl mb-7 xl:text-3xl">Vehicle type</p>
            <ul className="flex items-center flex-wrap mt-8">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`${
                    styles.categoryItem
                  } w-32 h-32 py-7 px-3 text-center flex justify-center items-center flex-col border border-neutral-200 rounded-md mr-4 mt-4 cursor-pointer transition-all duration-300 xl:w-44 xl:h-44 ${
                    selectedTypes.some((item) => item._id === category._id)
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => selectTypesController(category)}
                >
                  <Image
                    src={category.icon}
                    width="67"
                    height="25"
                    alt={category.title}
                    className="object-contain h-8"
                  />
                  <p className="text-black text-base mt-3  xl:text-lg">{category.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Submit  */}
          <div>
            <button
              className={`border  text-white w-full flex items-center justify-center py-6 px-10 transition-all duration-500 font-medium text-1.6x ${
                disableSubmit
                  ? " bg-gray-300 border-gray-300 pointer-events-none"
                  : "bg-black border-black cursor-pointer"
              }`}
              onClick={handleSubmit}
            >
              Show Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
