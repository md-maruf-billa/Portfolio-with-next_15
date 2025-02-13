"use client"
import { BiUpArrowCircle } from "react-icons/bi";
import logo from "@/assets/icons/logo.png";
import Image from 'next/image';
import { motion } from 'motion/react';
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
      return (
            <motion.footer
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                        duration: 2,
                        ease: "easeInOut"
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  className='relative  bg-white shadow dark:bg-gray-800 border-t'>
                  <div className=' container mx-auto'>

                        <footer className="flex flex-col justify-center items-center  p-10">
                              <aside className='flex flex-col justify-center items-center gap-2'>
                                    <div className='border-2 w-[100px] h-[100px] flex justify-center items-center border-customSelect rounded-full'><Image src={logo} width={200} height={100} alt='Abumahid Islam' /></div>
                                    <h2 className='text-5xl font-bold text-center'>Abu-<span className='text-customSelect'>Mahid</span></h2>

                                    <p className="font-bold">
                                          Full-Stack Developer.
                                          <br />
                                    </p>
                                    <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
                              </aside>
                              <nav>
                                    <div className="grid grid-flow-col gap-4 mt-5">

                                          <a className="text-2xl text-red-600" href='https://www.youtube.com/@mahid-web-world' target='_blank'>
                                                <FaYoutube />
                                          </a>
                                          <a className="text-2xl text-customSelect" href='https://www.facebook.com/devabumahid/' target='_blank'>
                                                <FaFacebook />
                                          </a>
                                          <a className="text-2xl" href='https://www.tiktok.com/@mahid_web_world' target='_blank'>
                                                <AiFillTikTok />
                                          </a>

                                    </div>
                              </nav>
                        </footer>
                  </div>
                  <a className='absolute p-3 bg-[#262b40] bottom-0 right-0 rounded-full' href="#home">
                        <BiUpArrowCircle className='text-3xl' />
                  </a>
            </motion.footer>
      )
}
