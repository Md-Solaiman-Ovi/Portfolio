import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: DarkModeProps) => {
  console.log(darkMode);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="transation flex w-full items-center justify-between px-4 py-4 duration-300 ease-in-out">
      <a href="/#intro">
        <h1 className="aclonica-regular text-xl dark:text-white md:text-2xl">
          Portfolio
        </h1>
      </a>
      <div className="flex items-center gap-4 md:flex">
        <div
          className="cursor-pointer rounded-md px-4 py-1 text-2xl text-black dark:text-white"
          onClick={handleDarkMode}
        >
          <BsMoonStarsFill className="cursor-pointer" />
        </div>
        <a href="/#contact">
          <button className="rounded-md bg-teal-500 px-4 py-1 text-center text-sm text-white lg:text-base">
            Hire Me!
          </button>
        </a>
      </div>
      {/* <div className="dark:text-white md:hidden">
        <MobileNav />
      </div> */}
    </nav>
  );
};

export default Navbar;
