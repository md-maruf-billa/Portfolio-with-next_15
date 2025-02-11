import Title from "@/components/customs/Title";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
const ContactPage = () => {
      return (
            <div className="py-20">

                  <div className="container px-6 py-12 mx-auto">
                        <div>
                              <Title slogun="I'm curious" titlePrev="Chat me" titleNext="Friendly" />
                              <p className="mt-3 text-gray-500 dark:text-gray-400">I’d love to hear from you. Please fill out this form or shoot us an email.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                    <div>
                                          <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                                <TfiEmail />
                                          </span>

                                          <h2 className="mt-4 text-base font-medium ">Email</h2>
                                          <p className="mt-2 text-sm text-gray-500 ">Write your email in details, I'll try my best.</p>
                                          <p className="mt-2 text-sm text-customSelect">dev.abumahid@gmail.com</p>
                                    </div>

                                    <div>
                                          <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                                <CiLocationOn />
                                          </span>
                                          <h2 className="mt-4 text-base font-medium ">Live Location</h2>
                                          <p className="mt-2 text-sm text-gray-500 ">You can find me in google map.</p>
                                          <p className="mt-2 text-sm text-customSelect">RJ2M+HPC Kurigram</p>
                                    </div>

                                    <div>
                                          <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                                <PiBuildingOfficeThin />
                                          </span>

                                          <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">You can also meet my office.</p>
                                          <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">TTC More, Kurigram, Bangladesh</p>
                                    </div>

                                    <div>
                                          <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                                <CiPhone />
                                          </span>

                                          <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 4pm to 11pm.</p>
                                          <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+880 1730827996</p>
                                    </div>
                              </div>

                              <div className="p-4 py-6 rounded-lg md:p-8 border border-customSelect/60">
                                    <form>
                                          <div className="mt-4">
                                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message Title</label>
                                                <input type="email" placeholder="Ex: Need Developer" className="block w-full px-5 py-2.5 mt-2    border border-gray-200 rounded-lg  text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 bg-transparent" />
                                          </div>

                                          <div className="w-full mt-4">
                                                <label className="block mb-2 text-sm ">Message Description</label>
                                                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                          </div>

                                          <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-customSelect rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Send message
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default ContactPage;