import Link from "next/link";


const NotFound = () => {
      return (
            <div className="mt-24">
                  <section className="flex items-center h-full p-16 ">
                        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                              <div className="max-w-md text-center">
                                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                                          <span className="sr-only">Error</span>404
                                    </h2>
                                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                                    <Link href={"/"} className="border-2 border-customSelect px-4 py-2 rounded-lg hover:bg-customSelect hover:text-white transition-colors duration-100">Back To Home</Link>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default NotFound;