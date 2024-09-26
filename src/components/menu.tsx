import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];
const Menu = () => {
  const pathname = useLocation();
  const currentPath = location.pathname;
  console.log(pathname);
  return (
    <nav className="flex gap-4 text-black dark:text-white">
      {links.map((link, index) => {
        console.log(link.path);
        return (
          <Link
            to={link.path}
            key={index}
            className={`${link.path == currentPath && "border-b border-teal-400 text-teal-400"} font-bold capitalize transition-all hover:text-teal-400`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;
