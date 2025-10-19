import React from "react";
import swim from "../../assets/swimming.png";
import clas from "../../assets/class.png";
import play from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="mt-8 bg-base-200 p-3">
      <h2 className="font-bold text-xl">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swim} alt="" />
        <img src={clas} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
