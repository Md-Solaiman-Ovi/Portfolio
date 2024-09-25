import { useState } from "react";
import Navbar from "./navbar";
import HeroSection from "./heroSection";

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
    </main>
  );
};

export default Home;
