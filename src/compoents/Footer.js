import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="h-44 md:h-24 bg-theme">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,128L0,128L288,128L288,256L576,256L576,64L864,64L864,160L1152,160L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-mont text-center">
            <p className="text-yellow-500 pb-5 text-3xl">Artist By</p>

            <div className="h-1 border-2 border-white border-dotted"></div>

            <div className="flex text-yellow-500 cursor-pointer w-full justify-between py-3">
              <a href="http://www.google.com"><FaFacebook size={32}/></a>
              <a href="http://www.google.com"><FaDribbble size={32}/></a>
              <a href="http://www.google.com"><FaInstagram size={32}/></a> 
              <a href="http://www.google.com"><FaLinkedin size={32}/></a> 
              <a href="http://www.google.com"><FaGithub size={32}/></a> 
            </div>

            <div className="h-1 border-2 border-gray-50 border-dotted"></div>

            <p className="text-yellow-500 my-2 text-3xl">KiingJayNiic</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
