"use client"

import { TUser } from "@/Types/index.t";
import { sendMassage } from "@/utils/serverActions";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactForm = ({ user }: { user: TUser | null }) => {
      const { register, handleSubmit ,reset} = useForm()

      const handleMessage: SubmitHandler<FieldValues> = async (data) => {
            if (!user?.user?.email) return toast.error("Please Login First...!")
            const toasId = toast.loading("Message Sending......")
            const payload = {
                  ...data,
                  user: { email: user?.user?.email, name: user?.user?.name, photo: user?.user?.image },
            }
            const res = await sendMassage(payload)
            if (res?.sucess) {
                  toast.success("Successfully Send..", { id: toasId });
                  reset()
            } else {
                  toast.error("Sending Failed", { id: toasId });
            }
      }

      return (
            <form onSubmit={handleSubmit(handleMessage)}>
                  <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message Title</label>
                        <input
                              {...register("messageTitle")}
                              type="text" placeholder="Ex: Need Developer" className="block w-full px-5 py-2.5 mt-2    border border-gray-200 rounded-lg  text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 bg-transparent" />
                  </div>

                  <div className="w-full mt-4">
                        <label className="block mb-2 text-sm ">Message Description</label>
                        <textarea
                              {...register("messageBody")}
                              className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                  </div>

                  <button type="submit" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-customSelect rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                  </button>
            </form>
      )
};

export default ContactForm;