import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anime";

export default function Index() {
  return (
    <div className="flex flex-col justify-between p-[100px_40px_50px_40px] h-full box-border">
      <div className="flex flex-col gap-2.5 ">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="font-space-grotesk">
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href} className="no-underline font-space-grotesk  md:text-4xl text-white text-2xl">{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className="w-1/2 mt-1.5 text-[12px] font-space-grotesk text-white"
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
