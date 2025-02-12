"use client"
import React, { useEffect, useState } from 'react';
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
import { Tag, TBlog } from '@/Types/index.t';
import Title from '@/components/customs/Title';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import { getAllBlogs, updateBlogs } from '@/utils/serverActions';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const BlogManagementPage = () => {
      const [data, setData] = useState<TBlog[]>()
      const [shouldRefetch, setShouldRefetch] = useState(true);
      useEffect(() => {
            const fetchData = async () => setData(await getAllBlogs())
            fetchData();
      }, [shouldRefetch])

      return (
            <div className="mt-24 container mx-auto">
                  <Title slogun='update anything' titlePrev="Blog's" titleNext="Dashboard" />
                  <Table className="mt-10">
                        <TableCaption>A list of your recent posted blogs</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead className="w-[100px]">Image</TableHead>
                                    <TableHead>Blog Title</TableHead>
                                    <TableHead>Posted Date</TableHead>
                                    <TableHead>Updated Date</TableHead>
                                    <TableHead>Post Tags</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {
                                    data?.map((blog: TBlog) =>
                                          <TableRow key={blog._id}>
                                                <TableCell >
                                                      <Avatar>
                                                            <AvatarImage src={blog?.blogImage} />
                                                            <AvatarFallback>{blog?.title.slice(0, 2).toUpperCase()}</AvatarFallback>
                                                      </Avatar>
                                                </TableCell>
                                                <TableCell>{blog?.title}</TableCell>
                                                <TableCell>{new Date(blog?.createdAt).toLocaleDateString("en-US", {
                                                      year: "numeric",
                                                      month: "long",
                                                      day: "numeric"
                                                })}</TableCell>
                                                <TableCell>{new Date(blog?.updatedAt).toLocaleDateString("en-US", {
                                                      year: "numeric",
                                                      month: "long",
                                                      day: "numeric"
                                                })}</TableCell>
                                                <TableCell>
                                                      {
                                                            blog?.blogTags?.map(tag => <span key={tag} className="mr-2">#{tag}</span>)
                                                      }
                                                </TableCell>
                                                <TableCell className="text-right space-x-2">
                                                      <Link href={`/blogs/${blog?._id}`}><Button className='bg-customSelect'>View</Button></Link>
                                                      <Modal blog={blog} setShouldRefetch={setShouldRefetch} />
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

export default BlogManagementPage;


const Modal = ({ blog, setShouldRefetch }: { blog: TBlog; setShouldRefetch: any }) => {
      const [postTag, setPostTag] = useState<Array<Tag>>(
            blog.blogTags?.map(tag => ({ id: tag, text: tag, className: "default-tag-class" })) || []
      );
      const { register, handleSubmit, setValue, reset } = useForm({
            defaultValues: {
                  title: blog.title,
                  content: blog.content,
            },
      });

      useEffect(() => {
            setValue("title", blog.title);
            setValue("content", blog.content);
      }, [blog, setValue]);

      const handleAdditionPostTag = (tag: Tag) => setPostTag(prevTags => [...prevTags, tag]);
      const handleDeletePostTag = (index: number) => setPostTag(prevTags => prevTags.filter((_, i) => i !== index));

      const handleUpdateBlog: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Updating...");
            const blogTags = postTag.map(tag => tag.text);

            const payload = { ...data, blogTags };

            const res = await updateBlogs(payload, blog._id);
            console.log(res)
            if (res?.sucess) {
                  toast.success("Update successful!", { id: toastId });
                  setShouldRefetch(true);
                  reset();
            } else {
                  toast.error("Update failed.", { id: toastId });
            }
      };

      return (
            <Dialog>
                  <DialogTrigger asChild>
                        <Button className="bg-green-600">Update</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                              <DialogTitle>Edit Your Published Blog</DialogTitle>
                              <DialogDescription>Make changes to your blog and save when you're done.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(handleUpdateBlog)}>
                              <div className="space-y-4">
                                    <div>
                                          <Label htmlFor="title" className="text-right pb-3">Blog Title</Label>
                                          <Input {...register("title")} id="title" />
                                    </div>
                                    <div>
                                          <Label htmlFor="content" className="text-right pb-3">Blog Description</Label>
                                          <Textarea {...register("content")} id="content" />
                                    </div>
                                    <div>
                                          <Label htmlFor="tags" className="text-right pb-3">Blog Hash Tags</Label>
                                          <ReactTags
                                                tags={postTag}
                                                separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
                                                handleDelete={handleDeletePostTag}
                                                handleAddition={handleAdditionPostTag}
                                                inputFieldPosition="top"
                                                classNames={{
                                                      tag: 'bg-blue-500 text-white rounded-lg px-2 py-1 text-xs mr-2 mb-2',
                                                      remove: 'bg-red-500 text-white rounded-full w-4 h-4 ml-2 cursor-pointer',
                                                      tagInputField: 'bg-transparent w-full px-4 py-2 mt-2 border border-gray-400 rounded-md focus:border-blue-400',
                                                }}
                                          />
                                    </div>
                              </div>
                              <DialogFooter className="mt-5">
                                    <Button type="submit">Save changes</Button>
                              </DialogFooter>
                        </form>
                  </DialogContent>
            </Dialog>
      );
};
