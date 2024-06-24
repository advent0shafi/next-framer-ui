import React,{ Suspense } from "react";
import Image from "next/image";
import Background from "./../../public/images/2.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Navbar from "./navbar";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
      <Suspense fallback={<p>Loading video...</p>}>

        {/* <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/> */}
        <video
          src={"/video/vid-02.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        </Suspense>
        <div className="absolute top-0 z-50  w-full">
         <Navbar/>
        </div>
      </motion.div>
    </div>
  );
}
