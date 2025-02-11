"use client"
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { motion } from "motion/react"
import photo from "@/assets/images/myphoto.png"

export default function Banner() {

      return (
            <div id="home" className="flex flex-col md:flex-row gap-5 justify-between px-4 items-center py-20">
                  {/* Banner content (Comes from the left) */}
                  <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                              duration: 2,
                              ease: "easeInOut"
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-4 md:w-1/2"
                  >
                        <h3 className="text-2xl md:text-4xl font-semibold">Hi, I'm</h3>
                        <h2 className="text-4xl lg:text-6xl font-bold">
                              Md Abu-<span className="text-customSelect">Mahid Islam</span>
                        </h2>
                        <h3 className="text-2xl lg:text-4xl font-semibold">
                              And I'm a{" "}
                              <TypeAnimation
                                    className="text-customSelect"
                                    sequence={["Front-end Developer", 500, "Back-end Developer", 500, "Web Designer", 500, "Full-stack Developer", 500]}
                                    repeat={Infinity}
                              />
                        </h3>
                        <p className="md:text-xl">
                              I am a Frontend web developer. I am always curious to learn new technology and apply it to projects. I love to contribute to web or MERN projects and find collaborators.
                        </p>
                        <div className="flex items-center gap-5 *:text-customSelect *:border-2 *:rounded-full *:border-customSelect *:p-2 *:text-xl ">
                              <a href="https://www.facebook.com/profile.php?id=100027753881743&mibextid=ZbWKwL" target="_blank" className="hover:text-black hover:bg-customSelect">
                                    <FaFacebook />
                              </a>
                              <a href="https://x.com/Abumahidislam" target="_blank" className="hover:text-black hover:bg-customSelect">
                                    <FaTwitter />
                              </a>
                              <a href="#" className="hover:text-black hover:bg-customSelect">
                                    <FaInstagram />
                              </a>
                              <a href="https://www.linkedin.com/in/md-abu-mahid-islam/" target="_blank" className="hover:text-black hover:bg-customSelect">
                                    <FaLinkedin />
                              </a>
                        </div>
                        <a target="_blank" href="/resume.pdf" download="Resume of Abumahid Islam.pdf" className="flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-[#4592d2] hover:bg-[#1c67a4] text-[#054278] text-xl">
                              Download CV <FaDownload />
                        </a>
                  </motion.div>

                  {/* Banner Image (Comes from the right) */}
                  <motion.div className="md:w-1/2"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                              duration: 2,
                              ease: "easeInOut"
                        }}
                        viewport={{ once: true, amount: 0.1 }}

                  >
                        <motion.div
                              animate={{
                                    y: [0, -30, 0]
                              }}
                              transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                              }}
                              className=' flex justify-end'
                        >
                              <img
                                    className='w-[80%]'
                                    src={photo.src}
                                    alt="Abumahid Islam"
                              />
                        </motion.div>
                  </motion.div>
            </div>

      )
}
