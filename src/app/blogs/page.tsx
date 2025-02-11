import Title from "@/components/customs/Title";
import { TBlog } from "@/Types/index.t";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/blogs`, {
            cache: "force-cache"
      })
      const data = await res.json()

      return (
            <div className="container mx-auto mt-24">

                  <div className="container px-6 pb-10 mx-auto">
                        <Title slogun="read and learn" titlePrev="Recent" titleNext="Blog's" />
                        <hr className="my-8 border-gray-200 dark:border-gray-700" />

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                              {
                                    data?.data?.map((blog: TBlog) =>
                                          <div key={blog._id} className="bg-white rounded-lg shadow-md dark:bg-gray-800">
                                                <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog?.blogImage} alt={blog?.title} width={600} height={600} />

                                                <div className="p-4">
                                                      <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                                            {blog?.title}
                                                      </h1>

                                                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                                                            {blog?.content.slice(0, 200)} ...
                                                      </p>
                                                      <div className="flex gap-2 flex-wrap mt-2">
                                                            {
                                                                  blog?.blogTags?.map(tag => <div
                                                                        key={tag}
                                                                        className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-customSelect  shadow-md w-fit animate-gradient-move "
                                                                  >
                                                                        #   {tag}
                                                                  </div>)
                                                            }
                                                      </div>
                                                      <div className="flex items-center justify-between mt-4">
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

                                                            <Link href={`/blogs/${blog?._id}`} className="inline-block text-blue-500 underline hover:text-blue-400">Read more</Link>
                                                      </div>

                                                </div>
                                          </div>
                                    )
                              }
                        </div>
                  </div>

            </div>
      );
};

export default BlogPage;