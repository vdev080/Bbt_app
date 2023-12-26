import React from "react";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";
// Dummy Data
import { cars } from "../../../../public/data/dummyData";

const CarList = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <p className="text-center pb-20 text-1.4rem">
          Crude. Ground-breaking. Rough - The three words that characterize each
          Luxury SUV.
        </p>
      </div>
      {cars.map((item) => (
        <CollectionItem data={item} key={item._id} />
      ))}
    </section>
  );
};

export default CarList;
