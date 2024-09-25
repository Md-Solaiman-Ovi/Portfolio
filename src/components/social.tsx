import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className="hove:transation-all flex h-9 w-9 items-center justify-center rounded-full border border-teal-500 text-base text-teal-500 duration-500 hover:bg-teal-500 hover:text-white"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
