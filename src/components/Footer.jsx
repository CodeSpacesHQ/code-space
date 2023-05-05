import React from "react";
import smarklas from "../images/SmartKlas C2_Websit Header Logo 1.svg";
import facebook from "../images/facebook.svg";
import linkedIn from "../images/linkedIn.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center m-10 text-center sm:justify-start sm:text-left sm:items-start sm:w-96 md:ms-20 lg:ms-24">
      <p className="mb-4" id="at">
        © 2023 Code Space Africa.
      </p>
      <p className="mb-6">
        Code Space Africa is a registered non-profit organization dedicated to
        empowering and celebrating genz in technology across Africa
      </p>
      <img className="h-6 mb-10" src={smarklas} alt="logo" />
      <div className="flex justify-between w-9/12 mb-12">
        <a
          href="https://m.facebook.com/groups/946095563299608/?ref=share"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img className="h-10" src={facebook} alt="facebook" />
        </a>
        <a
          href="https://twitter.com/CodeSpaceHQ"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img className="h-10" src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.instagram.com/codesspace/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img className="h-10" src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/codespaceafrica"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <img className="h-10" src={linkedIn} alt="linkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
