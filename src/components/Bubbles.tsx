import { motion } from "framer-motion";

export default function Bubbles() {
  return (
    <div className="absolute -z-10 h-full w-full overflow-hidden opacity-50 blur-sm">
      <div className="relative mx-auto h-full lg:w-[1000px]">
        <motion.div
          className="bg-primary absolute bottom-8 left-4 h-12 w-12 rounded-full"
          transition={{
            delay: 0.3,
            type: "spring",
            mass: 0.5,
          }}
          animate={{
            translateX: 96,
            translateY: -50,
            scale: 1.2,
          }}
        ></motion.div>
        <motion.div
          className="bg-green absolute bottom-6 left-24 h-12 w-12 rounded-full"
          transition={{
            delay: 0.3,
            type: "spring",
            mass: 0.5,
          }}
          animate={{
            translateX: 164,
            translateY: -89,
            scale: 0.8,
          }}
        ></motion.div>
        <motion.div
          className="bg-blue absolute bottom-32 right-8 h-12 w-12 rounded-full"
          transition={{
            delay: 0.3,
            type: "spring",
            mass: 0.5,
          }}
          animate={{
            translateX: -84,
            translateY: 48,
            scale: 1.2,
          }}
        ></motion.div>
        <motion.div
          className="bg-red absolute bottom-24 right-96 h-12 w-12 rounded-full"
          transition={{
            delay: 0.3,
            type: "spring",
            mass: 0.5,
          }}
          animate={{
            translateX: -32,
            translateY: -40,
            scale: 0.9,
          }}
        ></motion.div>
        <motion.div
          className="bg-yellow absolute bottom-6 left-72 h-12 w-12 rounded-full"
          transition={{
            delay: 0.3,
            type: "spring",
            mass: 0.5,
          }}
          animate={{
            translateX: 84,
            translateY: -6,
          }}
        ></motion.div>
      </div>
    </div>
  );
}
