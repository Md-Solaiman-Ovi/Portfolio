import { useEffect, useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./heroSection";

import WhyHireMe from "./whyHireMe";
import Menu from "./menu";

import Projects from "./projects";
// import ParallaxGalaxy from "./parallaxGalaxy";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Set the navbar height dynamically and handle refresh logic
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
    if (window.location.pathname === "/") {
      window.location.replace("/#"); // Set the hash to section1
    }
  }, []);
  return (
    <main className={`${darkMode ? "" : "dark"} jetbrains-mono`}>
      <div className="relative bg-slate-200 transition duration-300 ease-in-out dark:bg-gray-900">
        <div
          id="navbar"
          className="sticky top-0 mx-auto flex max-w-7xl flex-col"
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex w-full justify-center">
            <Menu />
          </div>
        </div>

        <div
          id="section1"
          className="mx-auto flex max-w-7xl flex-col"
          style={{ scrollMarginTop: `${navbarHeight}px` }}
        >
          <HeroSection />
        </div>
        <div
          id="section2"
          className="mx-auto my-20 flex max-w-7xl flex-col lg:py-28"
          style={{ scrollMarginTop: `${navbarHeight}px` }}
        >
          <WhyHireMe />
        </div>
        <div
          id="section3"
          className="mx-auto my-20 flex max-w-7xl flex-col lg:py-28"
          style={{ scrollMarginTop: `${navbarHeight}px` }}
        >
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default Home;
