"use client"
import { BiUpArrowCircle } from "react-icons/bi";
import logo from "@/assets/icons/logo.png";
import Image from 'next/image';
import { motion } from 'motion/react';

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
                  className='relative bg-gray-100 shadow dark:bg-gray-800'>
                  <div className=' container mx-auto'>

                        <footer className="flex flex-col justify-center items-center  p-10">
                              <aside className='flex flex-col justify-center items-center gap-2'>
                                    <div className='border-2 w-[100px] h-[100px] flex justify-center items-center border-customSelect rounded-full'><Image src={logo} width={200} height={100} alt='Abumahid Islam' /></div>
                                    <h2 className='text-5xl font-bold text-center'>Abu-<span className='text-customSelect'>Mahid</span></h2>

                                    <p className="font-bold">
                                          Front-End Developer.
                                          <br />
                                    </p>
                                    <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
                              </aside>
                              <nav>
                                    <div className="grid grid-flow-col gap-4 mt-5">

                                          <a href='https://youtube.com/@error_lover?si=XOv45-DTFeesvEMN' target='_blank'>
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="24"
                                                      height="24"
                                                      viewBox="0 0 24 24"
                                                      className="fill-current">
                                                      <path
                                                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                                </svg>
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
