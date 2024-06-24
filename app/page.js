import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-black">
      <div className="items-center min-h-screen flex flex-col justify-center h-auto md:px-4 md:max-md:px-5 ">
        <div className="w-full  h-full max-md:max-w-full max-md:my-10 relative"> 
          <div class="absolute w-[90%] max-w-[1080px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[40px] justify-between">
            <div className="text-white md:text-[96px] text-[64px] md:leading-[96px] leading-[64px] font-semibold font-space-grotesk ">
              WELCOME TO MY WORLD!
            </div>
            <h1 className="text-end">
              <span className="text-white  md:text-[48px] text-[24px] font-space-grotesk font-normal md:leading-[57px]">
                I'm Shafi, a Web Developer who is enthusiastic about creating
                engaging and delightful digital experiences.
              </span>
            </h1>
<Link href={'/myworld'} >
            <button className="md:w-[320px] w-full h-[64px] text-[20px] duration-500 transform hover:bg-white hover:text-black p-[16px] leading-[.5px]  font-space-grotesk rounded-full bg-[#542BEC] text-white ">
 Explore My World
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
