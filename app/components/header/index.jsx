"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-10px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const MobileMenu = {
  open: {
    width: "280px",
    height: "650px",
    top: "-10px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
  
    <div className="fixed md:block hidden md:right-[50px] right-[20px] md:top-[20px] top-[10px]">
      <motion.div
        className={`relative w-[400px] h-auto  bg-black rounded-[25px]`}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
    <div className="fixed md:hidden block md:right-[50px] right-[20px] md:top-[20px] top-[10px]">
      <motion.div
        className={`relative w-[400px] h-auto  bg-black rounded-[25px]`}
        variants={MobileMenu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
    </>
  );
}
