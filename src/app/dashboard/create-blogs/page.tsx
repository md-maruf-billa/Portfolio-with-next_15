"use client"
import Title from '@/components/customs/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tag, TBlog } from '@/Types/index.t';
import { createBlog } from '@/utils/serverActions';
import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import { toast } from 'sonner';

const CreateBlogPage = () => {
      const { register, handleSubmit, formState: { errors } } = useForm<TBlog>();
      const [blogTag, setBlogTags] = useState<Array<Tag>>([]);


      const handleDelete = (index: number) => {
            setBlogTags(blogTag.filter((_, i) => i !== index));
      };
      const handleAddition = (tag: Tag) => {
            setBlogTags((prevTags) => {
                  return [...prevTags, tag];
            });
      };
      const onClearAll = () => {
            setBlogTags([]);
      };
      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            const toasId = toast.loading("Creating........ ");
            const blogArr = blogTag.map(tag => tag.text);
            const formData = new FormData();
            formData.append("image", data?.blogImage[0]);
            formData.append("data", JSON.stringify({
                  ...data,
                  blogTags: blogArr,
                  blogImage: ""
            }));
            const res = await createBlog(formData as any);
            if (res?.sucess) {
                  toast.success("Created Successfully", { id: toasId });
            } else {
                  toast.error("Creation Failed", { id: toasId });
            }
      };
      return (
            <div className="container mx-auto mt-28 flex justify-center items-center flex-col">
                  <Title slogun='expression' titlePrev='Create' titleNext='Blog' />
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-4xl my-8 border p-5 rounded-xl border-customSelect">
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="title" className="block text-sm font-medium">Blog Title</label>
                                    <Input
                                          id="title"
                                          {...register('title', { required: 'Project Name is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.title && <p className="text-red-600 text-xs">{errors.title.message}</p>}
                              </div>

                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="technologies" className="block text-sm font-medium">Blog Tag's</label>
                                    <ReactTags
                                          tags={blogTag}
                                          separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
                                          handleDelete={handleDelete}
                                          handleAddition={handleAddition}
                                          inputFieldPosition="top"
                                          clearAll
                                          onClearAll={onClearAll}
                                          classNames={{
                                                tag: 'bg-blue-500 text-white rounded-lg px-2 py-1 text-xs mr-2 mb-2',
                                                remove: 'bg-red-500 text-white rounded-full w-4 h-4  ml-2 cursor-pointer',
                                                selected: ' text-blue-600',
                                                tagInputField: 'bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                                          }}
                                    />
                              </div>

                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="content" className="block text-sm font-medium">Description</label>
                                    <Textarea
                                          rows={6}
                                          id="description"
                                          {...register('content', { required: 'Description is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.content && <p className="text-red-600 text-xs">{errors.content.message}</p>}
                              </div>

                              <div className='w-full md:w-1/2'>
                                    <div>
                                          <label htmlFor="projectImage" className="block text-sm font-medium">Blog Cover</label>
                                          <label htmlFor="projectImage" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center  border-2 border-gray-300 border-dashed cursor-pointer dark:border-gray-700 rounded-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                                </svg>

                                                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Cover Image</h2>

                                                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                                                <input
                                                      id="projectImage"
                                                      {...register('blogImage', { required: 'Project Image is required' })}
                                                      type="file" className="hidden" />
                                          </label>
                                    </div>

                                    {errors.blogImage && <p className="text-red-600 text-xs">{errors.blogImage.message}</p>}
                              </div>
                        </div>



                        <div className="flex justify-end"><Button type="submit" className="mt-4 bg-customSelect">Submit</Button></div>
                  </form>
            </div>
      );
};

export default CreateBlogPage;