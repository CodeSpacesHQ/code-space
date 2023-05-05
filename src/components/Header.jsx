import React from "react";
import { ReactComponent as Logo } from "../images/asset.svg";
import arrow from "../images/arrow.svg";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="relative w-full bg-[url('images/hero.png')] bg-no-repeat bg-center bg-cover h-screen overflow-hidden">
      <div
        className="absolute sm:-top-20 -top-28 sm:-right-20 -right-28"
        id="asset"
      >
        <Logo className="animate-[spin_10s_linear_infinite]" alt="shapes" />
      </div>
      <div
        className="absolute left-0 -translate-x-8 sm:bottom-12 bottom-20 sm:translate-x-0 sm:rotate-0 -rotate-12"
        id="arrow"
      >
        <img src={arrow} alt="shapes" className="h-24 sm:h-full" />
      </div>
      <div className="flex justify-center w-full h-full">
        <nav className="absolute top-0 left-0 px-6 py-10 md:px-20 lg:px-24">
          <img src={logo} alt="logo" className="h-8" />
        </nav>
        <header className="flex flex-col items-center self-center w-full px-6 py-6 mt-2 text-center sm:px-16 sm:py-16 lg:max-w-3xl xl:max-w-5xl">
          <h2 className="mb-4 text-3xl sm:mb-8 sm:text-4xl">
            Connect with{" "}
            <span className="purple animate-grow-shrink">GenZ-s</span> in tech
            across <span className="gradient-text">Africa</span>
          </h2>
          <p className="mb-10 text-sm sm:mb-20 sm:text-1xl">
            we are coming soon 🚧🚧
          </p>
          <a
            href="https://forms.gle/csVUQEScZpiK9WzE8"
            target="_blank"
            rel="noreferrer"
            className="z-10 button max-w-max"
          >
            Join The Community
          </a>
        </header>
      </div>
    </div>
  );
};

export default Header;
