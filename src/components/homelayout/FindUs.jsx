import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // use the correct X (Twitter) icon

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mt-8 mb-3 text-lg">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item py-6">
          <FaFacebook className="mr-2 text-blue-600" /> Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item py-6">
          <FaXTwitter className="mr-2 text-black" /> X (Twitter)
        </button>
        <button className="btn bg-base-100 justify-start join-item py-6">
          <FaInstagram className="mr-2 text-pink-500" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;

