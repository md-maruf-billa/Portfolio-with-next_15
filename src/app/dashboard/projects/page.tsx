"use client";
import React, { useEffect, useState } from "react";
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Title from "@/components/customs/Title";
import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm, Controller, SubmitHandler, FieldValues } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TProject } from "@/Types/index.t";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { deleteProject, getAllProjects, updateProject } from "@/utils/serverActions";
import TextEditor from "@/components/customs/TextEditor";

type OptionType = {
      value: string;
      label: string;
};

const options: OptionType[] = [
      { value: "React", label: "React" },
      { value: "Next.js", label: "Next.js" },
      { value: "Tailwind", label: "Tailwind" },
      { value: "Framer Motion", label: "Framer Motion" },
      { value: "Shadcn/ui", label: "Shadcn/ui" },
      { value: "Express", label: "Express" },
      { value: "MongoDb", label: "MongoDb" },
      { value: "TypeScript", label: "TypeScript" },
      { value: "JavaScript", label: "JavaScript" },
      { value: "TailwindCSS", label: "TailwindCSS" },
      { value: "Bootstrap", label: "Bootstrap" },
      { value: "DaisyUI", label: "DaisyUI" },
      { value: "Mongoose", label: "Mongoose" },
      { value: "Zod", label: "Zod" },
];

const animatedComponents = makeAnimated();


const ProjectManagementPage = () => {
      const [data, setData] = useState<TProject[]>()
      const [shouldRefetch, setShouldRefetch] = useState(false);
      useEffect(() => {

            const fetchData = async () => setData(await getAllProjects())
            // Refetch if shouldRefetch is true
            if (shouldRefetch) {
                  fetchData();
                  setShouldRefetch(false);
            } else {
                  fetchData();
            }
      }, [shouldRefetch]);

      const handleDelete = async (id: string) => {
            const toasId = toast.loading("Deleting.......")
            const res = await deleteProject(id)
            if (res?.sucess) {
                  toast.success("Delete Success ", { id: toasId })
                  setShouldRefetch(true)
            } else {
                  toast.success("Delete faild ", { id: toasId })

            }
      }
      return (
            <div className="mt-24 container mx-auto">
                  <Title slogun="Update anything" titlePrev="Project's" titleNext="Dashboard" />
                  <Table className="mt-10">
                        <TableCaption>A list of your recent posted projects</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Image</TableHead>
                                    <TableHead>Project Name</TableHead>
                                    <TableHead>Technologies</TableHead>
                                    <TableHead>Post Tags</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {data?.map((project: TProject) => (
                                    <TableRow key={project._id}>
                                          <TableCell>
                                                <Avatar>
                                                      <AvatarImage src={project?.projectImage} />
                                                      <AvatarFallback>{project?.projectName.slice(0, 2).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                          </TableCell>
                                          <TableCell>{project?.projectName}</TableCell>
                                          <TableCell>{project?.slogun}</TableCell>
                                          <TableCell className="w-[100px]">
                                                {project?.technologies?.map((tech) => (
                                                      <span className="mr-2" key={tech}>
                                                            {tech}
                                                      </span>
                                                ))}
                                          </TableCell>
                                          <TableCell className="text-right space-x-2 space-y-2">
                                                <Link href={`/projects/${project?._id}`}>
                                                      <Button className="bg-customSelect">View</Button>
                                                </Link>
                                                <EditProjectDialog project={project} setShouldRefetch={setShouldRefetch} />
                                                <Button onClick={() => handleDelete(project._id)} variant="destructive">Delete</Button>
                                          </TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>

                  </Table>
            </div>
      );
};

export default ProjectManagementPage;

interface EditProjectDialogProps {
      project: TProject;
      setShouldRefetch: any
}

const EditProjectDialog: React.FC<EditProjectDialogProps> = ({ project, setShouldRefetch }) => {
      const [descriptionText, setDescriptionText] = useState<string>();
      const { handleSubmit, control } = useForm({
            defaultValues: {
                  projectName: project.projectName || "",
                  description: project.description || "",
                  slogun: project.slogun || "",
                  technologies: project.technologies?.map((tech) => ({ value: tech, label: tech })) || [],
                  features: project.features || [],
                  frontEndGitRepo: project.frontEndGitRepo || "",
                  backEndGitRepo: project.backEndGitRepo || "",
                  liveLink: project.liveLink || "",
                  serverLiveLink: project.serverLiveLink || "",
            },
      });

      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            const toasId = toast.loading("Updating........ ")
            const arr: string[] = []
            data?.technologies?.forEach((tc: OptionType) => arr.push(tc.value))
            const updatePayload = {
                  ...data,
                  technologies: arr,
                  description: descriptionText
            }
            const res = await updateProject(project._id, updatePayload)
            if (res?.sucess) {
                  toast.success("Updated Success ", { id: toasId })
                  setShouldRefetch(true)
            } else {
                  toast.success("Updated faild ", { id: toasId })

            }

      };

      return (
            <Dialog >
                  <DialogTrigger asChild>
                        <Button className="bg-green-600">Update</Button>
                  </DialogTrigger>
                  <DialogContent >
                        <DialogHeader >
                              <DialogTitle>Edit Project</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                              <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                                    <div className="w-full md:w-1/2">
                                          <Label htmlFor="projectName" className="text-right">
                                                Project Name
                                          </Label>
                                          <Controller
                                                name="projectName"
                                                control={control}
                                                render={({ field }) => <Input id="projectName" {...field} className="col-span-3" />}
                                          />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                          <Label htmlFor="slogun" className="text-right">
                                                Slogun
                                          </Label>
                                          <Controller
                                                name="slogun"
                                                control={control}
                                                render={({ field }) => <Input id="slogun" {...field} className="col-span-3" />}
                                          />
                                    </div>
                              </div>
                              <div className="">
                                    <Label htmlFor="description" className="text-right">
                                          Description
                                    </Label>
                                    <TextEditor setTextData={setDescriptionText} defaultValue={project.description} />
                              </div>

                              <div className="">
                                    <Label htmlFor="liveLink" className="text-right">
                                          Project Live Link
                                    </Label>
                                    <Controller
                                          name="liveLink"
                                          control={control}
                                          render={({ field }) => <Input id="liveLink" {...field} className="col-span-3" />}
                                    />
                              </div>
                              <div className="flex  flex-col md:flex-row gap-3">
                                    <div className="w-full md:w-1/2">
                                          <Label htmlFor="frontEndGitRepo" className="text-right">
                                                Front-end Repo
                                          </Label>
                                          <Controller
                                                name="frontEndGitRepo"
                                                control={control}
                                                render={({ field }) => <Input id="frontEndGitRepo" {...field} className="col-span-3" />}
                                          />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                          <Label htmlFor="backEndGitRepo" className="text-right">
                                                Back-end Repo
                                          </Label>
                                          <Controller
                                                name="backEndGitRepo"
                                                control={control}
                                                render={({ field }) => <Input id="backEndGitRepo" {...field} className="col-span-3" />}
                                          />
                                    </div>
                              </div>
                              <div className="">
                                    <Label htmlFor="technologies">Technologies</Label>
                                    <Controller
                                          name="technologies"
                                          control={control}
                                          render={({ field }) => (
                                                <Select
                                                      {...field}
                                                      isMulti
                                                      options={options}
                                                      components={animatedComponents}
                                                      onChange={(selected) => field.onChange([...selected])}
                                                      styles={{
                                                            control: (styles) => ({ ...styles, backgroundColor: "gray", borderColor: "gray" }),
                                                            option: (styles) => ({
                                                                  ...styles,
                                                                  backgroundColor: "white",
                                                                  color: "black",
                                                                  "&:hover": { backgroundColor: "gray" },
                                                            }),
                                                      }}
                                                />
                                          )}
                                    />

                              </div>
                              <DialogFooter>
                                    <Button type="submit" className="bg-customSelect">Save changes</Button>
                              </DialogFooter>
                        </form>
                  </DialogContent>
            </Dialog>
      );
};
