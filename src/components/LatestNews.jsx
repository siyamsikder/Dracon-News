import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex  items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-4 py-3">Latest</p>
      <Marquee pauseOnHover={true} speed={60} className="flex gap-5">
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab
        </p>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab
        </p>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ab
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
