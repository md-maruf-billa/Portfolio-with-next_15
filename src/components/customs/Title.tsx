"use client"
import { motion } from 'motion/react';

type TTitleProps = {
      titlePrev: string;
      titleNext: string;
      slogun: string
}

const Title = ({ titlePrev, titleNext, slogun }: TTitleProps) => {
      return (
            <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                        duration: 1,
                        ease: "easeInOut"
                  }}
            >
                  <div className='flex items-center gap-2 uppercase italic text-customSelect'><div className='w-16 h-[3px] border-2 border-customSelect'></div><span>{slogun}</span></div>
                  <h2 className='text-4xl md:text-5xl font-bold'>{titlePrev} <span className='text-customSelect'>{titleNext}</span></h2>
            </motion.div>
      );
};

export default Title;