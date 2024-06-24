"use client";

import { useState } from "react";
import Header from './header/index'
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="">
        <div className="items-center flex flex-col justify-center h-auto md:px-4 md:max-md:px-5 ">
          <div className="w-full max-w-[1080px] h-full  max-md:max-w-full md:max-md:my-10 relative">
            <div className="text-white  relative text-4xl font-space-grotesk w-full  px-5 py-3 flex justify-between ">
              <div className="flex flex-col items-center justify-center ">
                <img
                  className="object-cover w-10 h-10 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  src="images/9.JPG"
                  alt="Person"
                />
              </div>{" "}
              
             <Header/>
              {/* <div className="md:hidden   flex flex-col justify-center items-center ">
                <button
                  className="w-[38px] h-[38px] relative focus:outline-none  rounded mix-blend-difference "
                  onClick={() => setToggle(!toggle)}
                  aria-label="Toggle button "
                >
                  <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                      className={`block absolute h-0.5 w-7  bg-current transform transition duration-500 ease-in-out ${
                        toggle
                          ? "rotate-45 text-white"
                          : " -translate-y-1.5 text-white"
                      }`}
                    ></span>
                    <span
                      className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                        toggle ? "opacity-0" : ""
                      }`}
                    ></span>
                    <span
                      className={`block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out ${
                        toggle
                          ? "-rotate-45 text-white"
                          : "translate-y-1.5 text-white"
                      }`}
                    ></span>
                  </div>
                </button>
              </div> */}
            </div>
          </div>{" "}
        </div>
      </nav>
    </>
  );
}
