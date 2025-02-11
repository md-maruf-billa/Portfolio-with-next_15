import { TProject } from "@/Types/index.t";
import Image from "next/image";
import { BsBrowserEdge } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
      const { projectId } = await params;

      // Fetch the data
      const res = await fetch(`${process.env.SERVER_URL}/project/${projectId}`);
      const data = await res.json();
      const projectData: TProject = data?.data;

      return (
            <div className="mt-28 container mx-auto">
                  <div className="flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                              <div className="lg:max-w-lg">
                                    <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                          {projectData?.projectName}
                                    </h1>
                                    <p><i>{projectData?.slogun}</i></p>

                                    <div className="mt-6">
                                          <span className="text-xs font-medium text-customSelect uppercase">project details</span>
                                          <p>
                                                {projectData?.description}
                                          </p>
                                    </div>

                                    <div className="mt-8 space-y-5">
                                          <span className="text-xs font-medium text-customSelect uppercase">features</span>
                                          {projectData?.features?.map(fet => (
                                                <p key={fet} className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                      </svg>

                                                      <span className="mx-2">{fet}</span>
                                                </p>
                                          ))}
                                    </div>
                                    <div className="mt-6">
                                          <span className="text-xs font-medium text-customSelect uppercase">technologies</span>
                                          <div className="flex gap-2 flex-wrap mt-2">
                                                {projectData?.technologies?.map(tech => (
                                                      <div
                                                            key={tech}
                                                            className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-md w-fit animate-gradient-move "
                                                      >
                                                            {tech}
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                                    <div className="mt-6">
                                          <span className="text-xs font-medium text-customSelect uppercase">links</span>
                                          <div className="mt-2 flex items-center gap-5 *:text-customSelect *:border-2 *:rounded-full *:border-customSelect *:p-2 *:text-xs ">
                                                <a href={projectData?.liveLink} target="_blank" className="hover:text-black hover:bg-customSelect flex items-center gap-2 text-customSelect border-2 rounded-full border-customSelect p-2 text-xs">
                                                      <BsBrowserEdge />Live-link
                                                </a>
                                                <a href={projectData?.frontEndGitRepo} target="_blank" className="hover:text-black hover:bg-customSelect flex items-center gap-2">
                                                      <FaGithub />Front-end
                                                </a>
                                                <a href={projectData?.backEndGitRepo} target="_blank" className="hover:text-black hover:bg-customSelect flex items-center gap-2">
                                                      <FaGithub />Back-end
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-[500px] lg:w-1/2">
                              <Image
                                    src={projectData?.projectImage}
                                    width={500}
                                    height={900}
                                    alt={projectData?.projectName}
                                    className="object-fill w-full h-full mx-auto rounded-md lg:max-w-2xl"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default ProjectDetailsPage;
