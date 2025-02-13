"use client";
import { useState } from "react";
import logo from "@/assets/icons/logo.png"
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { motion } from 'motion/react';
import { usePathname } from "next/navigation";
import { CiLogin } from "react-icons/ci";
import { LogOut } from "lucide-react";
import { SiBloglovin } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { FaFacebookMessenger } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";

type TNavProps = {
      user?: {
            name?: string | null,
            email?: string | null,
            image?: string | null,
      }
}

const NavBar = ({ session }: { session: TNavProps | null }) => {
      const path = usePathname();
      const [isOpen, setIsOpen] = useState(false);
      const { setTheme } = useTheme()

      return (
            <div
                  className="fixed top-0 w-full z-30">
                  <nav className="relative bg-white shadow dark:bg-gray-800  top-0 ">
                        <motion.div
                              initial={{ opacity: 0, x: 400 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                    duration: 2,
                                    ease: "easeInOut"
                              }}
                              className="container px-6 py-4 mx-auto">
                              <div className="lg:flex lg:items-center lg:justify-between">
                                    <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2">
                                                <Link href="/" className="h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#101026]">
                                                      <Image className="" src={logo} alt="Logo for Abumahid Islam" width={50} height={50} />
                                                </Link>
                                                <h1 className="text-3xl font-semibold">Abu-Mahid</h1>
                                          </div>

                                          <div className="flex lg:hidden">
                                                <button
                                                      onClick={() => setIsOpen(!isOpen)}
                                                      type="button"
                                                      className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none text-2xl"
                                                      aria-label="toggle menu"
                                                >
                                                      {isOpen ? (
                                                            <RxCross1 />
                                                      ) : (
                                                            <FaBars />
                                                      )}
                                                </button>
                                          </div>
                                    </div>

                                    {/* Mobile Menu */}
                                    <div
                                          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
                                                }`}
                                    >
                                          <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                                <Link href="/" className={path == "/" ? "border-2 border-customSelect px-4 py-2 rounded-lg text-customSelect font-semibold" : "px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"}>Home</Link>
                                                <Link href="/projects" className={path == "/projects" ? "border-2 border-customSelect px-4 py-2 rounded-lg text-customSelect font-semibold" : "px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"}>Project's</Link>


                                                <Link href="/blogs" className={path == "/blogs" ? "border-2 border-customSelect px-4 py-2 rounded-lg text-customSelect font-semibold" : "px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"}>Blogs's</Link>


                                                <Link href="/contact" className={path == "/contact" ? "border-2 border-customSelect px-4 py-2 rounded-lg text-customSelect font-semibold" : "px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"}>Contact Me</Link>
                                          </div>

                                          <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0 gap-8">
                                                <div>
                                                      <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                  <IoIosSunny className="text-4xl cursor-pointer" />
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent className="w-10">
                                                                  <DropdownMenuGroup className="py-4">
                                                                        <DropdownMenuItem onClick={() => setTheme("light")}><IoIosSunny /><span>Light</span></DropdownMenuItem>
                                                                        <DropdownMenuItem onClick={() => setTheme("dark")} ><FaMoon /><span>Dark</span></DropdownMenuItem>

                                                                  </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                      </DropdownMenu>

                                                </div>

                                                {
                                                      session?.user?.email ?

                                                            <DropdownMenu>
                                                                  <DropdownMenuTrigger asChild>
                                                                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                                                              <div className="overflow-hidden border-2 h-[50px] w-[50px] rounded-full flex justify-center items-center border-[#101026]">
                                                                                    <Image src={session?.user?.image!} alt="text" width={50} height={50} />
                                                                              </div>
                                                                              <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{session?.user?.name}</h3>
                                                                        </button>
                                                                  </DropdownMenuTrigger>
                                                                  <DropdownMenuContent className="w-56">
                                                                        <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
                                                                        <DropdownMenuSeparator />
                                                                        <DropdownMenuGroup>
                                                                              <DropdownMenuSub>
                                                                                    <DropdownMenuSubTrigger>
                                                                                          <SiBloglovin />
                                                                                          <span>Blog Management</span>
                                                                                    </DropdownMenuSubTrigger>
                                                                                    <DropdownMenuPortal>
                                                                                          <DropdownMenuSubContent>
                                                                                                <Link href={"/dashboard/create-blogs"}>
                                                                                                      <DropdownMenuItem>
                                                                                                            <MdOutlineCreateNewFolder />
                                                                                                            <span>Create Blog</span>
                                                                                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                                                                      </DropdownMenuItem>
                                                                                                </Link>
                                                                                                <Link href={"/dashboard/blogs"}>
                                                                                                      <DropdownMenuItem>
                                                                                                            <FaRegEdit />
                                                                                                            <span>Update Blog</span>
                                                                                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                                                                      </DropdownMenuItem>
                                                                                                </Link>
                                                                                          </DropdownMenuSubContent>
                                                                                    </DropdownMenuPortal>
                                                                              </DropdownMenuSub>
                                                                              <DropdownMenuSub>
                                                                                    <DropdownMenuSubTrigger>
                                                                                          <GrProjects />
                                                                                          <span>Project Management</span>
                                                                                    </DropdownMenuSubTrigger>
                                                                                    <DropdownMenuPortal>
                                                                                          <DropdownMenuSubContent>
                                                                                                <Link href={"/dashboard/create-projects"}>
                                                                                                      <DropdownMenuItem>
                                                                                                            <MdOutlineCreateNewFolder />
                                                                                                            <span>Create Project</span>
                                                                                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                                                                      </DropdownMenuItem>
                                                                                                </Link>
                                                                                                <Link href={"/dashboard/projects"}>
                                                                                                      <DropdownMenuItem>
                                                                                                            <FaRegEdit />
                                                                                                            <span>Update Project</span>
                                                                                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                                                                      </DropdownMenuItem>
                                                                                                </Link>
                                                                                          </DropdownMenuSubContent>
                                                                                    </DropdownMenuPortal>
                                                                              </DropdownMenuSub>
                                                                              <Link href={"/dashboard/messages"}>
                                                                                    <DropdownMenuItem>
                                                                                          <FaFacebookMessenger />
                                                                                          <span>Message Management</span>
                                                                                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                                                                    </DropdownMenuItem>
                                                                              </Link>

                                                                        </DropdownMenuGroup>
                                                                        <DropdownMenuSeparator />
                                                                        <DropdownMenuItem onClick={() => signOut()}>
                                                                              <LogOut />
                                                                              <span>Log out</span>
                                                                              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                                                        </DropdownMenuItem>
                                                                  </DropdownMenuContent>
                                                            </DropdownMenu>
                                                            :
                                                            <Link href={"/login"} className="flex w-fit px-4 py-2 items-center gap-2 rounded-lg bg-[#4592d2] hover:bg-[#1c67a4] text-[#054278] text-xl">
                                                                  <CiLogin />
                                                                  Login
                                                            </Link>
                                                }
                                          </div>
                                    </div>
                              </div>
                        </motion.div>
                  </nav>
            </div>
      );
};

export default NavBar;
