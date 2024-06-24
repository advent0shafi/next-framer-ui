import Image from "next/image";
import Background from "./../../public/images/1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] font-space-grotesk text-[2vw] self-end uppercase mix-blend-difference">
          I'm a passionate web developer with a knack for creating stunning,
          user-friendly frontend designs. My expertise lies in bringing ideas to
          life through clean, efficient code and a keen eye for detail. Let's
          build something amazing together!.
        </p>
        <p className="text-[5vw] uppercase font-space-grotesk mix-blend-difference">
          CREATING ENGAGING WEB EXPERIENCES
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
