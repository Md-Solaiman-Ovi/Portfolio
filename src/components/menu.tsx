import { BiUser } from "react-icons/bi";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";

const links = [
  {
    name: <BiUser className="size-5" />,
    path: "#section2",
  },
  {
    name: <GiGiftOfKnowledge className="size-5" />,
    path: "#section3",
  },
  {
    name: <IoHomeOutline className="size-5" />,
    path: "#section1",
  },
  {
    name: <GrProjects className="size-5" />,
    path: "#section4",
  },
  {
    name: <LiaBlogSolid className="size-5" />,
    path: "#section5",
  },
];
const Menu = () => {
  const pathname = useLocation();

  return (
    <nav className="fixed bottom-4 z-30 flex max-w-fit items-center justify-between gap-4 rounded-full bg-gray-700/30 px-4 py-1 text-black backdrop-blur-[15px] dark:text-white md:bottom-10">
      {links.map((link, index) => {
        console.log(link.path);
        console.log(pathname.hash, "===", link.path);
        return (
          <a
            href={link.path}
            key={index}
            className={`${link.path === pathname.hash && "bg-teal-500 text-white hover:border-none hover:text-white"} flex size-14 items-center justify-center rounded-full font-bold hover:border-[1px] hover:border-teal-500 hover:text-teal-500`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Menu;
