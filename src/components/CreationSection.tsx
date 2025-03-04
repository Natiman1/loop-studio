import { useState } from "react";
import { creations } from "../data.json";
import { useMediaQuery } from "react-responsive";

const CreationSection = () => {
  const [cards] = useState(creations);
  // const { name, images } = cards;

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="relative">
      <div className="text-center justify-between mx-8 mb-6 flex items-center md:mx-20 lg:mx-40 lg:mt-10">
        <h2 className="text-4xl font-light uppercase">our creations</h2>
        <button className="absolute bottom-0 left-31 -mb-8 border-2 p-5 py-1 text-center font-semibold tracking-[4px] uppercase transition-all hover:bg-black hover:text-white md:relative md:mr-27 md:py-2 md:px-10">
          see all
        </button>
      </div>
      <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:px-20 lg:grid-cols-4 lg:px-40">
        {cards.map((card, index) => (
          <div
            className="relative h-[112px] md:h-[442px] md:w-auto"
            key={index}
          >
            <img
              src={isTablet ? card.images.landscape : card.images.portrait}
              alt={card.name}
              className="h-full w-full"
            />
            <h3 className="absolute bottom-4 left-3 text-2xl text-gray-100 uppercase font-subHeading md:bottom-5 md:left-6 font-light w-[130px] ">
              {card.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreationSection;
