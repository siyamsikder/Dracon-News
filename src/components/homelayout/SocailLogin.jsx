import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocailLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn btn-outline btn-secondary">
          <FaGoogle size={24} />
          Login With Googl
        </button>
        <button className="btn btn-outline btn-primary">
          <FaGithub size={24} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
