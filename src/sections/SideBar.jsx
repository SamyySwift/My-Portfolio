import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import your social media icons
import { FaLinkedin, FaGithub, FaKaggle, FaYoutube } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full flex flex-col justify-center items-center z-50">
      <div className=" bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg flex flex-col p-3">
        <a
          href="https://www.linkedin.com/in/samyyswift"
          className="text-white hover:text-sky-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/SammSwift"
          className="text-white hover:text-sky-500 mt-4"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.youtube.com/@swifttech7853"
          className="text-white hover:text-sky-500 mt-4"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.kaggle.com/samyyswift"
          className="text-white hover:text-sky-500 mt-4"
        >
          <FaKaggle size={24} />
        </a>

        <a href="#" className="text-white hover:text-sky-500 mt-4">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
