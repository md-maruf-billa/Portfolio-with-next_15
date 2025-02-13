
import Title from '@/components/customs/Title';
import { TMessage } from '@/Types/index.t';
import Image from 'next/image';
import React from 'react';
import {
      Table,
      TableBody,
      TableCaption,
      TableCell,
      TableFooter,
      TableHead,
      TableHeader,
      TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const MessagePage = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/message`, {
            cache: "no-store"
      })
      const data = await res.json();
      return (
            <div className="container mx-auto mt-24">
                  <Title slogun='messages' titlePrev='Read' titleNext='Message' />


                  <Table className='mt-8'>
                        <TableCaption>A list of your recent Messages.</TableCaption>
                        <TableHeader>
                              <TableRow>
                                    <TableHead >Photo</TableHead>
                                    <TableHead >email</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Recived Time</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                              </TableRow>
                        </TableHeader>
                        <TableBody>
                              {data?.data?.map((message: TMessage) => (
                                    <TableRow key={message._id}>
                                          <TableCell >
                                                <Avatar>
                                                      <AvatarImage src={message?.user?.photo} />
                                                      <AvatarFallback>{message?.user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                          </TableCell>
                                          <TableCell>{message?.user?.email}</TableCell>
                                          <TableCell>{message?.messageTitle}</TableCell>
                                          <TableCell>{new Date(message?.createdAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric"
                                          })}</TableCell>
                                          <TableCell className="text-right">
                                                <Dialog>
                                                      <DialogTrigger asChild>
                                                            <Button variant="outline" className='bg-customSelect'>See Message</Button>
                                                      </DialogTrigger>
                                                      <DialogContent className="sm:max-w-[425px]">
                                                            <div className="w-full">
                                                                  <div className="flex items-center justify-between">
                                                                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{new Date(message?.createdAt).toLocaleDateString("en-US", {
                                                                              year: "numeric",
                                                                              month: "long",
                                                                              day: "numeric"
                                                                        })}</span>

                                                                  </div>

                                                                  <div className="mt-2">
                                                                        <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">{message?.messageTitle}</a>
                                                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{message?.messageBody}</p>
                                                                  </div>

                                                                  <div className=" mt-4 flex items-center gap-2">
                                                                        <Image
                                                                              width={500}
                                                                              height={500}
                                                                              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={message?.user?.photo} alt="avatar" />
                                                                        <div>
                                                                              <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" role="link">{message?.user?.name}</p>
                                                                              <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" role="link">{message?.user?.email}</p>
                                                                        </div>


                                                                  </div>
                                                            </div>
                                                      </DialogContent>
                                                </Dialog>
                                          </TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>

            </div>
      );
};

export default MessagePage;

