import { motion } from "framer-motion";
import IMG from "../assets/resume/profile5.png";

const Photo = () => {
  return (
    <div className="relative size-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 1, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
          }}
          className="absolute size-[300px] mix-blend-darken dark:mix-blend-lighten md:size-[500px]"
        >
          <img
            src={IMG}
            alt=""
            className="size-full rounded-full fill-current object-contain pl-[1px] pt-6 mix-blend-lighten shadow-2xl shadow-teal-500 duration-500 hover:shadow-teal-300 hover:transition-all"
            fetchPriority="high"
          />
        </motion.div>

        <motion.svg
          className="size-[307px] fill-transparent md:size-[510px]"
          viewBox="0 0 510 510"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke="#14b8a6"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["16 25 91 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
