import { useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./heroSection";
import ParallaxGalaxy from "./parallaxGalaxy";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={`${darkMode ? "" : "dark"} jetbrains-mono`}>
      <div className="min-h-screen bg-white transition duration-300 ease-in-out dark:bg-gray-900">
        <div className="mx-auto flex max-w-7xl flex-col">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <HeroSection />
        </div>
      </div>
      <ParallaxGalaxy>
        <div className="flex min-h-screen flex-col items-center justify-center space-y-10">
          <h1 className="text-6xl font-bold text-white">
            Welcome to the Galaxy
          </h1>
          <p className="max-w-xl text-center text-lg text-gray-300">
            Explore the depths of the universe while scrolling through the
            wonders of the galaxy.
          </p>
          <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </ParallaxGalaxy>
    </main>
  );
};

export default Home;
