import React from 'react';

type TTitleProps = {
      titlePrev: string;
      titleNext: string;
      slogun: string
}

const Title = ({ titlePrev, titleNext, slogun }: TTitleProps) => {
      return (
            <>
                  <div className='flex items-center gap-2 uppercase italic text-customSelect'><div className='w-16 h-[3px] border-2 border-customSelect'></div><span>{slogun}</span></div>
                  <h2 className='text-4xl md:text-5xl font-bold'>{titlePrev} <span className='text-customSelect'>{titleNext}</span></h2>
            </>
      );
};

export default Title;