import { useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "#section1",
  },
  {
    name: "About",
    path: "#section2",
  },
  {
    name: "Projects",
    path: "#section3",
  },
];
const Menu = () => {
  const pathname = useLocation();

  return (
    <nav className="flex gap-4 text-black dark:text-white">
      {links.map((link, index) => {
        console.log(link.path);
        console.log(pathname.hash, "===", link.path);
        return (
          <a
            href={link.path}
            key={index}
            className={`${link.path === pathname.hash && "border-b border-teal-400 text-teal-400"} font-bold capitalize transition-all hover:text-teal-400`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Menu;
