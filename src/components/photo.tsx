import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative size-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute size-[300px] mix-blend-darken dark:mix-blend-lighten md:size-[500px]"
        >
          <img
            src="/public/profile.png"
            alt=""
            className="size-full rounded-full fill-current object-contain"
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
