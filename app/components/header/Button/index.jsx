import { motion } from "framer-motion";

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className="absolute top-0 group right-0 w-[100px] h-10 cursor-pointer rounded-[25px] overflow-hidden ">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full bg-black text-white flex items-center justify-center py-3 px-4"
          onClick={toggleMenu}
        >
          <div className={`${isActive ? "hidden" : ""}`}>
            <p className="text-[16px] transform duration-500 translate-y-5 group-hover:translate-y-12 ">
              Menu
            </p>
            <p className="text-[16px] transform duration-500 -translate-y-12 group-hover:-translate-y-5">
            Menu
            </p>
          </div>
        </div>
        <div
          className="w-full h-full bg-white text-black flex items-center justify-center py-3 px-4"
          onClick={toggleMenu}
        >
          <div className={`${isActive ? "" : "hidden"}`}>
            <p className="text-[16px] transform duration-500 translate-y-5 group-hover:translate-y-12 ">
              Close
            </p>
            <p className="text-[16px] transform duration-500 -translate-y-12 group-hover:-translate-y-5">
              Close
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
