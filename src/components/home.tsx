import { useEffect, useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./heroSection";
import About from "./about";
// import ParallaxGalaxy from "./parallaxGalaxy";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Set the navbar height dynamically
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
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
        </div>
        <section
          id="section1"
          className="mx-auto flex h-screen max-w-7xl flex-col"
          style={{ scrollMarginTop: `${navbarHeight}px` }}
        >
          <HeroSection />
        </section>
        <section
          id="section2"
          className="mx-auto flex h-screen max-w-7xl flex-col"
          style={{ scrollMarginTop: `${navbarHeight}px` }}
        >
          <About />
        </section>
        <section
          id="section3"
          className="mx-auto flex h-screen max-w-7xl flex-col"
          style={{ scrollMarginTop: `${navbarHeight}px` }}
        >
          <About />
        </section>
      </div>
    </main>
  );
};

export default Home;
