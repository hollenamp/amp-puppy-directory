"use client"
import { AspectRatio } from "@radix-ui/themes";
import { Button, ButtonLink } from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/card";
import { Plus } from "lucide-react";
import { Lightbox } from "@/components/lightbox";


export default function PuppiesPage(){
    const handleModal = () => {
    };
    return (
        <>
            <Lightbox />
            <main className="bg-white text-zinc-500">
                <section className="w-full py-4 px-4 sm:px-8 lg:px-16 border-t-2 border-b border-zinc-100 bg-zinc-50">
                    <div className="mx-auto container flex justify-between">
                        <div><ButtonLink iconLeft="angleLeft"  href="/#puppies" label='Back to Puppies' color='amber' className="m-auto" /></div>
                        <div className="flex justify-end space-x-4 items-center">
                            <div className="text-zinc-700">
                                <p>Check Availability</p>
                            </div>
                            <div>
                                <ButtonLink href="tel:555-555-5555" label='Call (555) 555-5555' color='light' className="m-auto" />
                            </div>
                            <div>
                                <ButtonLink href="/contact" label='Send Message' color='amber' className="m-auto" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full p-4 sm:p-8 lg:p-16 relative">
                    <div className="mx-auto container">
                        <div className="space-y-8">
                            <div className="flex space-x-8">
                                <div className="w-1/3">
                                    <div className="grid grid-cols-4 gap-2">
                                        <div className="col-span-4">
                                            <AspectRatio ratio={3 / 2} className="bg-muted">
                                                <Image className="object-cover rounded-md"
                                                    src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                                    alt="Puppy Photo"
                                                    fill
                                                    />
                                            </AspectRatio>
                                        </div>
                                        <div className="col-span-2 relative">
                                            <Image className="object-cover rounded-md"
                                                src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                                alt="Puppy Photo"
                                                fill
                                                />
                                        </div>

                                        <div>
                                            <AspectRatio ratio={1 / 1} className="bg-muted">
                                                <Image className="object-cover rounded-md"
                                                    src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                                    alt="Puppy Photo"
                                                    fill
                                                    />
                                            </AspectRatio>
                                        </div>

                                        <div className="relative overflow-hidden rounded-md">
                                            <div className="absolute inset-0 bg-zinc-600/40 w-full h-full z-10 flex justify-center items-center cursor-pointer" >
                                                <div className="flex flex-nowrap items-center"><Plus size={32} color="#fff" /><span className="text-4xl text-white">10</span></div>
                                            </div>
                                            <AspectRatio ratio={1 / 1} className="bg-muted blur-sm">
                                                <Image className="object-cover"
                                                    src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                                    alt="Puppy Photo"
                                                    fill
                                                    />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <h2 className="text-3xl text-amber-400">Cloud</h2>
                                    <div className="space-y-8">
                                        <div className="flex space-x-8">
                                            <div className="w-3/4">
                                                <strong>Female</strong>, <strong><Link href='/' className="text-violet-500">Samoyed</Link></strong> Puppy<br />
                                                Born <strong>Aug 26, 2023</strong> - <strong>10</strong> weeks old
                                            </div>
                                            <div className="flex-grow flex align-middle items-center bg-amber-300 text-white justify-center rounded-sm">
                                                <div className="text-center w-full py-4 px-8">
                                                    <strong className="text-2xl">$2,000</strong> 
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <h3 className="text-lg font-normal text-amber-400">About Cloud</h3>
                                            <div className="text-sm">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tincidunt libero, id dignissim tellus. 
                                                Suspendisse consequat mollis ligula, at maximus orci volutpat et. Nulla id est metus. Donec eget fringilla lacus. 
                                                Sed eget feugiat nisi. Mauris venenatis magna nunc, vel sagittis ligula aliquet non. Nullam interdum commodo 
                                                suscipit. Fusce interdum risus et maximus lacinia. Vivamus vitae risus libero. In sit amet dui purus. Nulla sed 
                                                commodo metus, quis rutrum nibh.</p>
                                            </div>
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card radius="md" color='lightGray'>
                                <Card.Body>
                                    Some share content.
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}