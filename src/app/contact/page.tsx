import Title from "@/components/customs/Title";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import ContactForm from "@/components/customs/ContactForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/outhOptions";
const ContactPage = async () => {
      const session = await getServerSession(authOptions)
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
                                    <ContactForm user={session} />
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default ContactPage;