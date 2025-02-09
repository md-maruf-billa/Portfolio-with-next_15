"use client";
import { useState } from "react";
import logo from "@/assets/icons/logo.png"
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useTheme } from "next-themes";

const NavBar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const { setTheme } = useTheme()

      return (
            <nav className="relative bg-white shadow dark:bg-gray-800">
                  <div className="container px-6 py-4 mx-auto">
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
                                          <Link href="/projects" className="px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Project's</Link>
                                          <Link href="/projects" className="px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Blogs's</Link>
                                          <Link href="/projects" className="px-3 py-2 mx-3 mt-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Contact Me</Link>
                                    </div>

                                    <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0 gap-8">
                                          <div>
                                                <DropdownMenu>
                                                      <DropdownMenuTrigger asChild>
                                                            <IoIosSunny className="text-4xl"/>
                                                      </DropdownMenuTrigger>
                                                      <DropdownMenuContent className="w-10">
                                                            <DropdownMenuGroup className="py-4">
                                                                  <DropdownMenuItem onClick={() => setTheme("light")}><IoIosSunny  /><span>Light</span></DropdownMenuItem>
                                                                  <DropdownMenuItem onClick={() => setTheme("dark")} ><FaMoon  /><span>Dark</span></DropdownMenuItem>

                                                            </DropdownMenuGroup>
                                                      </DropdownMenuContent>
                                                </DropdownMenu>

                                          </div>

                                          <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                                <div className="overflow-hidden border-2 h-[50px] w-[50px] rounded-full flex justify-center items-center border-[#101026]">
                                                      <Image src={"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=334&q=80"} alt="text" width={50} height={50} />
                                                </div>
                                                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default NavBar;
