'use client';

import { motion } from "framer-motion";

// Import to Hooks
import useScrollProgress from "@/hooks/useScrollProgress";

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },

}
const Template = ({ children }) => {
  const completion = useScrollProgress();
  
  return <>
      <motion.main 
        variants={variants} 
        initial="hidden" 
        animate="enter" 
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* Completion Bar */}
      <span 
        style={{ transform: `translateY(${completion -100}%)`} } className="fixed top-0 bottom-0 right-0 z-50 w-1 transition-all duration-700 bg-primary"></span>
      <div className="h-[4000px]"></div>
    </>

}

export default Template;