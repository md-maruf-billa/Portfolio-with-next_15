"use client"
import Title from '@/components/customs/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tag, TProject } from '@/Types/index.t';
import { createProject } from '@/utils/serverActions';
import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import { toast } from 'sonner';


const CreateBlogPage = () => {
      const { register, handleSubmit, formState: { errors } } = useForm<TProject>();
      const [technology, setTechnology] = useState<Array<Tag>>([]);
      const [features, setFeatures] = useState<Array<Tag>>([]);

      const handleDelete = (index: number) => {
            setTechnology(technology.filter((_, i) => i !== index));
      };
      const handleDeleteFeatures = (index: number) => {
            setFeatures(technology.filter((_, i) => i !== index));
      };

      const handleAddition = (tag: Tag) => {
            setTechnology((prevTags) => {
                  return [...prevTags, tag];
            });
      };
      const handleAdditionFeatures = (tag: Tag) => {
            setFeatures((prevTags) => {
                  return [...prevTags, tag];
            });
      };

      const onClearAll = () => {
            setTechnology([]);
      };
      const onClearAllFeatures = () => {
            setFeatures([]);
      };


      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            const toasId = toast.loading("Creating........ ");
            const technologyArr = technology.map(tag => tag.text);
            const featuresArr = features.map(tag => tag.text);
            const formData = new FormData();
            formData.append("image", data?.projectImage[0]);
            formData.append("data", JSON.stringify({
                  ...data,
                  features: featuresArr,
                  technologies: technologyArr,
                  projectImage: ""
            }));

            const res = await createProject(formData as any);
            console.log("respnse", res)
            if (res?.sucess) {
                  toast.success("Created Successfully", { id: toasId });
            } else {
                  toast.error("Creation Failed", { id: toasId });
            }
      };

      return (
            <div className="container mx-auto mt-28 flex justify-center items-center flex-col">
                  <Title slogun='build future' titlePrev='Create' titleNext='Project' />
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-4xl my-8 border border-customSelect p-5 rounded-xl">
                        <div className='flex justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="projectName" className="block text-sm font-medium">Project Name</label>
                                    <Input
                                          id="projectName"
                                          {...register('projectName', { required: 'Project Name is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.projectName && <p className="text-red-600 text-xs">{errors.projectName.message}</p>}
                              </div>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="slogun" className="block text-sm font-medium">Slogan</label>
                                    <Input
                                          id="slogun"
                                          {...register('slogun', { required: 'Slogan is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.slogun && <p className="text-red-600 text-xs">{errors.slogun.message}</p>}
                              </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="frontEndGitRepo" className="block text-sm font-medium">Frontend Git Repository</label>
                                    <Input
                                          id="frontEndGitRepo"
                                          {...register('frontEndGitRepo', { required: 'Frontend Git Repo is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.frontEndGitRepo && <p className="text-red-600 text-xs">{errors.frontEndGitRepo.message}</p>}
                              </div>

                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="backEndGitRepo" className="block text-sm font-medium">Backend Git Repository</label>
                                    <Input
                                          id="backEndGitRepo"
                                          {...register('backEndGitRepo', { required: 'Backend Git Repo is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.backEndGitRepo && <p className="text-red-600 text-xs">{errors.backEndGitRepo.message}</p>}
                              </div>

                        </div>
                        <div className='flex justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="liveLink" className="block text-sm font-medium">Live Link</label>
                                    <Input
                                          id="liveLink"
                                          {...register('liveLink', { required: 'Live Link is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.liveLink && <p className="text-red-600 text-xs">{errors.liveLink.message}</p>}
                              </div>

                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="serverLiveLink" className="block text-sm font-medium">Server Live Link (Optional)</label>
                                    <Input
                                          id="serverLiveLink"
                                          {...register('serverLiveLink')}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                              </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="technologies" className="block text-sm font-medium">Technologies</label>
                                    <ReactTags
                                          tags={technology}
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

                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="features" className="block text-sm font-medium">Features</label>
                                    <ReactTags
                                          tags={features}
                                          separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
                                          handleDelete={handleDeleteFeatures}
                                          handleAddition={handleAdditionFeatures}
                                          inputFieldPosition="top"
                                          clearAll
                                          onClearAll={onClearAllFeatures}
                                          classNames={{
                                                tag: 'bg-blue-500 text-white rounded-lg px-2 py-1 text-xs mr-2 mb-2',
                                                remove: 'bg-red-500 text-white rounded-full w-4 h-4  ml-2 cursor-pointer',
                                                selected: ' text-blue-600',
                                                tagInputField: 'bg-transparent w-full px-4 py-2 mt-2  border border-gray-400 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                                          }}
                                    />

                              </div>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                              <div className='w-full md:w-1/2'>
                                    <label htmlFor="description" className="block text-sm font-medium">Description</label>
                                    <Textarea
                                          rows={6}
                                          id="description"
                                          {...register('description', { required: 'Description is required' })}
                                          className="block bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.description && <p className="text-red-600 text-xs">{errors.description.message}</p>}
                              </div>

                              <div className='w-full md:w-1/2'>
                                    <div>
                                          <label htmlFor="projectImage" className="block text-sm font-medium">Project Image</label>
                                          <label htmlFor="projectImage" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center  border-2 border-gray-300 border-dashed cursor-pointer dark:border-gray-700 rounded-xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                                </svg>

                                                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Project Cover</h2>

                                                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                                                <input
                                                      id="projectImage"
                                                      {...register('projectImage', { required: 'Project Image is required' })}
                                                      type="file" className="hidden" />
                                          </label>
                                    </div>

                                    {errors.projectImage && <p className="text-red-600 text-xs">{errors.projectImage.message}</p>}
                              </div>
                        </div>
                        <div className='flex justify-end'><Button type="submit" className="mt-4 bg-customSelect">Submit</Button></div>

                  </form>
            </div>
      );
};

export default CreateBlogPage;