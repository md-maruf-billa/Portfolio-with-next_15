import { TBlog } from "@/Types/index.t";
import Image from "next/image";

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
      const { blogId } = await params
      // fetch data
      const res = await fetch(`${process.env.SERVER_URL}/blogs/${blogId}`)
      const data = await res.json()
      const blog: TBlog = data?.data
      return (

            <div className="mt-28 container mx-auto">
                  <div className="flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                              <div className="lg:max-w-lg">
                                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                          {blog?.title}
                                    </h1>
                                    <div className="mt-6">
                                          <span className="text-xs font-medium text-customSelect uppercase">blog contents</span>
                                          <p>
                                                {blog?.content}
                                          </p>
                                    </div>

                                    <div className="mt-6">
                                          <span className="text-xs font-medium text-customSelect uppercase">blog tags</span>
                                          <div className='flex gap-2 flex-wrap mt-2'>
                                                {
                                                      blog?.blogTags?.map(tag => <div
                                                            key={tag}
                                                            className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-customSelect  shadow-md w-fit animate-gradient-move "
                                                      >
                                                            #   {tag}
                                                      </div>)
                                                }
                                          </div>
                                    </div>
                                    <div className="mt-6">
                                          <span className="text-xs font-medium text-customSelect uppercase">author</span>
                                          <div>
                                                <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                                      Abu-Mahid
                                                </a>

                                                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(blog?.createdAt).toLocaleDateString("en-US", {
                                                      year: "numeric",
                                                      month: "long",
                                                      day: "numeric"
                                                })}</p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-[500px] lg:w-1/2">
                              <Image
                                    src={blog?.blogImage}
                                    width={500}
                                    height={900}
                                    alt={blog?.title}
                                    className="object-fill w-full h-full mx-auto rounded-md lg:max-w-2xl"
                              />
                        </div>
                  </div>
            </div>

      );
};

export default BlogDetailsPage;