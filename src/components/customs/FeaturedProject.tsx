import React from 'react';
import photo from "@/assets/images/featuredProject.png"
import Image from 'next/image';
import Title from './Title';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
const FeaturedProject = () => {
      return (
            <div className=' py-20'>
                  <Title slogun='My advanture' titlePrev='Featured' titleNext='Project' />
                  <div className="flex lg:gap-10 flex-col overflow-hidden rounded-md lg:flex-row mt-10">
                        <Image
                              src={photo}
                              alt="Featured Project Image"
                              width={0}
                              height={0}
                              className='object-fill rounded-md w-full lg:w-1/2'
                        />
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                              <span className="text-xs uppercase text-customSelect">Project Name</span>
                              <h3 className="text-4xl font-bold italic">Mahid Book's</h3>
                              <p className="my-6 dark:text-gray-400">To create a vibrant digital space where every reader can discover their next favorite book. Our mission is to bring the joy of reading to everyone through an intuitive, seamless, and personalized experience—empowering authors, delighting book lovers, and fostering a community united by the love of storytelling.</p>
                              <div>
                                    <h2 className='py-4 uppercase text-xl font-semibold italic text-customSelect'>Features</h2>
                                    <div>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' />Fully Responsive and simple , user friendly.</p>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' />Navbar with logo, navigation links, and authentication buttons.</p>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' />Featured book section with daynamic result.</p>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' />Search books by title, author, or category.</p>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' />Filter options (price range, category, availability, etc.).</p>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' />  Integrated SurjoPay payment gateway.</p>
                                          <p className='flex items-center gap-2 dark:text-gray-400'><IoCheckmarkDoneSharp className='text-xl text-customSelect' /> Order and payment verification systems.</p>
                                    </div>

                                    <h2 className='py-4 uppercase text-xl font-semibold italic text-customSelect'>Links</h2>
                                    <div className='flex items-center gap-5 *:text-customSelect *:border-2 *:rounded-full *:border-customSelect *:p-2 *:text-xl '>
                                          <a href='https://mahidbooksfrontend.vercel.app/' target='_blank' className='hover:text-black hover:bg-customSelect'> <BsBrowserEdge /></a>
                                          <a href='https://github.com/md-maruf-billa/Book-shop-frontend-router_6' target='_blank' className='hover:text-black hover:bg-customSelect'> <FaGithub /></a>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FeaturedProject;