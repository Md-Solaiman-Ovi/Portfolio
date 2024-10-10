import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
// import { GiGiftOfKnowledge } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
// import { useLocation } from "react-router-dom";

const sections = [
  {
    name: <IoHomeOutline className="size-5" />,
    path: "intro",
  },
  {
    name: <BiUser className="size-5" />,
    path: "why-hire-me",
  },
  {
    name: <FaTv className="size-5" />,
    path: "my-projects",
  },

  {
    name: <GrProjects className="size-5" />,
    path: "#",
  },
  {
    name: <LiaBlogSolid className="size-5" />,
    path: "contact",
  },
];
const Menu = () => {
  // const pathname = useLocation();
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to handle menu click and scroll to section
  const handleScrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);

    // Set a timeout to wait for scroll completion (approximation)
    setTimeout(() => {
      setIsScrolling(false); // Allow scroll detection again after scroll completes
    }, 800); // Adjust time based on scroll duration
  };

  useEffect(() => {
    if (isScrolling) return; // Skip if triggered by a menu click

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.path);
        if (element) {
          const offsetTop = element.offsetTop - 150; // Adjust based on your navbar height
          const offsetBottom = offsetTop + element.clientHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.path);
            break;
          }
        }
      }
    };

    // Add event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <nav className="fixed bottom-4 z-50 flex max-w-fit items-center justify-between gap-4 rounded-full bg-gray-700/30 px-4 py-1 text-black backdrop-blur-[15px] dark:text-white md:bottom-10">
      {sections.map((section) => {
        return (
          <button
            key={section.path}
            onClick={() => handleScrollToSection(section.path)}
            className={`${activeSection === section.path ? "bg-teal-500 text-white hover:border-none hover:text-white" : ""} flex size-14 items-center justify-center rounded-full font-bold hover:border-[1px] hover:border-teal-400 hover:text-teal-500`}
          >
            {section.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Menu;
