import Image from "next/image";
import React from "react";
import styles from "./SpecificationSection.module.css";
import CommonInfoUsp from "../../CommonComponents/CommonInfoUsp/CommonInfoUsp";
import Link from "next/link";
import BasicDetails from "./BasicDetails";
import SpecificationTabs from "./SpecificationTabs";

import CarSummary from "./CarSummary";
import PaidFeatures from "./PaidFeatures";
import SpecificationsAccordion from "./SpecificationsAccordion";

const specifications = [
  {
    title: "Overview",
    icon: "/images/detail-page/detail-tab-icon-1.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Engine & Transmission",
    icon: "/images/detail-page/detail-bbt-engine-black.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Hybrid System",
    icon: "/images/detail-page/detail-tab-icon-3.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Performance & Efficiency",
    icon: "/images/detail-page/detail-tab-icon-4.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Exterior Equipment",
    icon: "/images/detail-page/detail-tab-icon-5.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Interior Equipment",
    icon: "/images/detail-page/detail-tab-icon-6.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Seats & Upholstery",
    icon: "/images/detail-page/detail-tab-icon-7.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
  {
    title: "Entertainment Front",
    icon: "/images/detail-page/detail-tab-icon-8.webp",
    detailList: [
      {
        title: "Engine Displacement",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Power Figure", description: "197PS / 194BHP @ 3600 RPM" },
      {
        title: "Torque Figure+",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      { title: "Drivetrain", description: "RWD" },
      {
        title: "Transmission",
        description: "1993cc, Turbocharged, In-Line 4 Cyl, DOHC",
      },
      {
        title: "Engine Displacement",
        description: "9G-TRONIC Automatic Transmission",
      },
    ],
  },
];

const SpecificationSection = () => {
  return (
    <section className="relative z-10 py-12 rounded-t-3xl bg-white -mt-10 md:mt-0 md:rounded-none lg:py-0 lg:-mt-4">
      <BasicDetails />

      <CarSummary />

      <PaidFeatures />

      <SpecificationTabs specifications={specifications} />

      <SpecificationsAccordion specifications={specifications} />
    </section>
  );
};

export default SpecificationSection;
