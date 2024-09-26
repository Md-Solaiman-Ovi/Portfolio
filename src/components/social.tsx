import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Md-Solaiman-Ovi" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/md-solaiman-ovi-83a9b4162/",
  },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/msovi480" },
];
const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
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
