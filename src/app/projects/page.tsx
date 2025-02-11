import Title from '@/components/customs/Title';
import { TProject } from '@/Types/index.t';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsBrowserEdge } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { TbListDetails } from "react-icons/tb";

const ProjectPage = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/project/all-project`, {
            cache: "force-cache"
      });
      const data = await res.json();
      return (
            <div className='mt-24 container mx-auto'>
                  <Title slogun='see my work' titlePrev='Recent' titleNext='Projects' />
                  <hr className="my-8 border-gray-200 dark:border-gray-700" />
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                        {
                              data?.data?.map((project: TProject) =>
                                    <div key={project._id} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                          {/* <img className="object-cover w-full h-64" src={project.projectImage} alt="Article" /> */}
                                          <Image
                                                src={project?.projectImage}
                                                alt={project.projectName}

                                                width={600}
                                                height={256}
                                                className="object-cover w-full h-64"
                                          />

                                          <div className="p-6">
                                                <div>
                                                      <span className="text-xs font-medium text-customSelect uppercase">project name</span>
                                                      <div className='flex items-center gap-3 '>
                                                            <h1 className="text-xl font-semibold text-gray-800  dark:text-white " >{project.projectName}</h1>
                                                            <a href={project.liveLink} target='_blank' className='hover:text-black hover:bg-customSelect flex items-center gap-2 text-customSelect border-2 rounded-full border-customSelect p-2 text-xs '> <BsBrowserEdge />Live-link</a>
                                                      </div>
                                                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{project.slogun}</p>
                                                </div>

                                                <div>
                                                      <span className="text-xs font-medium text-customSelect uppercase">technologies</span>
                                                      <div className='flex gap-2 flex-wrap mt-2'>
                                                            {
                                                                  project?.technologies?.map(tech => (
                                                                        <div
                                                                              key={tech}
                                                                              className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-md w-fit animate-gradient-move "
                                                                        >
                                                                              {tech}
                                                                        </div>
                                                                  ))
                                                            }
                                                      </div>
                                                </div>

                                                <div className='mt-6 flex items-center justify-between'>
                                                      <div className='flex items-center gap-5 *:text-customSelect *:border-2 *:rounded-full *:border-customSelect *:p-2 *:text-xs '>
                                                            <a href={project?.frontEndGitRepo} target='_blank' className='hover:text-black hover:bg-customSelect flex items-center gap-2'> <FaGithub />Front-end</a>
                                                            <a href={project?.backEndGitRepo} target='_blank' className='hover:text-black hover:bg-customSelect flex items-center gap-2'> <FaGithub />Back-end</a>
                                                      </div>
                                                      <Link className='text-customSelect border-2 rounded-full border-customSelect p-2 text-xs hover:text-black hover:bg-customSelect flex items-center gap-2 w-fit' href={`projects/${project._id}`}><TbListDetails /> Details</Link>
                                                </div>
                                          </div>
                                    </div>
                              )
                        }
                  </div>

            </div>
      );
};

export default ProjectPage;