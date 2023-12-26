import React from "react";

// Dummy Data
import { cars } from "../../../../public/data/dummyData";
import CollectionItem from "../../CommonComponents/CollectionItem/CollectionItem";

const CollectionListBottom = () => {
  const newCars = cars.slice(0, 3);
  return (
    <section className="bg-white">
      {newCars.map((item) => (
        <CollectionItem data={item} key={item._id} />
      ))}
      <div className="container">
        <div className="px-3 pb-20">
          <button className="bg-transparent font-medium text-black flex justify-center items-center border border-black rounded-lg py-7 text-2xl text-center w-full hover:bg-black hover:text-white transition-all duration-300 ease-in">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionListBottom;
