import React from 'react'
export default function About() {
    return (
        <div  className='  py-10'>
            <div className='flex flex-col-reverse lg:justify-between md:flex-row items-center px-4'>
                {/* IMAGE SECTION */}
                <div className='w-full md:w-1/2'>
                    <img src="https://abumahid-portfolio.netlify.app/assets/aboutpic-DZc9TC3T.png" alt="" />
                </div>

                {/* contain */}

                <div className='w-full md:w-1/2'>
                    <h2 className='text-4xl md:text-5xl font-bold'>About <span className='text-[#65a8e3]'>Me</span></h2>
                    <h2 className='text-2xl mt-3 italic'>Full-Stack Developer</h2>
                    <p className='md:text-xl my-6 text-justify text-gray-400'>
                        As a passionate and dedicated Frontend Developer, I am seeking a challenging and rewarding position where I can utilize my skills in HTML, CSS, Tailwind, JavaScript, React.js, Node.js, Express.js, and MongoDB to create innovative, user-friendly web applications. My goal is to contribute to a dynamic team and work on cutting-edge projects that push the boundaries of web development while continuously learning and growing in my career.
                    </p>
                </div>
            </div>
        </div>
    )
}
