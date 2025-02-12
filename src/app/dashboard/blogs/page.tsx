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
import { TBlog } from '@/Types/index.t';
import Title from '@/components/customs/Title';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


const BlogManagementPage = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/blogs`, {
            cache: "force-cache"
      })
      const data = await res.json()
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
                                    data?.data?.map((blog: TBlog) =>
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
                                                      <Dialog>
                                                            <DialogTrigger asChild>
                                                                  <Button className='bg-green-600'>Update</Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px]">
                                                                  <DialogHeader>
                                                                        <DialogTitle>Edit profile</DialogTitle>
                                                                        <DialogDescription>
                                                                              Make changes to your profile here. Click save when you're done.
                                                                        </DialogDescription>
                                                                  </DialogHeader>
                                                                  <div className="grid gap-4 py-4">
                                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                                              <Label htmlFor="name" className="text-right">
                                                                                    Name
                                                                              </Label>
                                                                              <Input
                                                                                    id="name"
                                                                                    defaultValue="Pedro Duarte"
                                                                                    className="col-span-3"
                                                                              />
                                                                        </div>
                                                                        <div className="grid grid-cols-4 items-center gap-4">
                                                                              <Label htmlFor="username" className="text-right">
                                                                                    Username
                                                                              </Label>
                                                                              <Input
                                                                                    id="username"
                                                                                    defaultValue="@peduarte"
                                                                                    className="col-span-3"
                                                                              />
                                                                        </div>
                                                                  </div>
                                                                  <DialogFooter>
                                                                        <Button type="submit">Save changes</Button>
                                                                  </DialogFooter>
                                                            </DialogContent>
                                                      </Dialog>
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