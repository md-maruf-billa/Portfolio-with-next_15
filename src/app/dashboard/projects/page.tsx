import React from 'react';
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {TProject } from '@/Types/index.t';
import Title from '@/components/customs/Title';



const ProjectManagementPage = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/project/all-project`, {
            cache: "force-cache"
      });
      const data = await res.json();
      return (
            <div className="mt-24 container mx-auto">
                    <Title slogun='update anything' titlePrev="Project's" titleNext="Dashboard" />
                  <Table className="mt-10">
                        <TableCaption>A list of your recent posted Project</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Image</TableHead>
                                    <TableHead>Project Name</TableHead>
                                    <TableHead>Project Slogun</TableHead>
                                    <TableHead>Post Tags</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {
                                    data?.data?.map((project: TProject) =>
                                          <TableRow key={project._id}>
                                                <TableCell >
                                                      <Avatar>
                                                            <AvatarImage src={project?.projectImage} />
                                                            <AvatarFallback>{project?.projectName.slice(0, 2).toUpperCase()}</AvatarFallback>
                                                      </Avatar>
                                                </TableCell>
                                                <TableCell>{project?.projectName}</TableCell>
                                                <TableCell>{project?.slogun}</TableCell>
                                                <TableCell>
                                                      {
                                                            project?.technologies?.map(tech=><span className="mr-2" key={tech}>{tech}</span>)
                                                      }
                                                </TableCell>
                                                <TableCell className="text-right space-x-2">
                                                      <Link href={`/projects/${project?._id}`}><Button className='bg-customSelect'>View</Button></Link>
                                                      <Button className='bg-green-600'>Update</Button>
                                                      <Button variant="destructive">Deleted</Button>
                                                </TableCell>
                                          </TableRow>
                                    )
                              }

                        </TableBody>
                  </Table>

            </div>
      );
};

export default ProjectManagementPage;