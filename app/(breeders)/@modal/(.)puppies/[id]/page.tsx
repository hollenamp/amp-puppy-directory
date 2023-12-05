"use client"
import { Modal } from "@/components/modal";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AspectRatio } from "@radix-ui/themes";
import { Button, ButtonLink } from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/card";

export default function PuppiesModal(){
    const handleReload = () => {
        location.href = location.href
    };
    return (
        <Modal modalIsOpen={true} className="bg-white text-zinc-800">
            <Modal.Head />
            <Modal.Body className='h-full'>
                <ScrollArea>
                    <div className="space-y-8">
                        <div className="flex space-x-8">
                            <div className="w-1/3">
                                <AspectRatio ratio={1 / 1} className="bg-muted">
                                    <Image className="object-cover"
                                        src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                        alt="Puppy Photo"
                                        fill
                                        />
                                </AspectRatio>
                                <div className="pt-4 text-center space-y-2">
                                    <div>
                                        <p>Call today for availability</p>
                                        <ButtonLink href="tel:555-555-5555" label='(555) 555-5555' color='light' className="m-auto" />
                                    </div>
                                    <div>
                                        <p>- or -</p>
                                    </div>
                                    <ButtonLink href="/contact" label='Send Message' color='amber' className="m-auto" />
                                </div>
                            </div>
                            <div className="w-2/3">
                                <h2 className="text-3xl">Cloud</h2>
                                <div className="space-y-8">
                                    <div className="flex space-x-8">
                                        <div className="w-3/4">
                                            <strong>Female</strong>, <strong><Link href='/' className="text-violet-500">Samoyed</Link></strong> Puppy<br />
                                            Born <strong>Aug 26, 2023</strong> - <strong>10</strong> weeks old
                                        </div>
                                        <div className="flex-grow flex align-middle items-center bg-zinc-100 justify-center">
                                            <div className="text-center w-full py-4 px-8">
                                                <strong className="text-2xl">$2,000</strong> 
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <h3 className="text-lg font-normal">About Cloud</h3>
                                        <div className="text-sm">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tincidunt libero, id dignissim tellus. 
                                            Suspendisse consequat mollis ligula, at maximus orci volutpat et. Nulla id est metus. Donec eget fringilla lacus. 
                                            Sed eget feugiat nisi. Mauris venenatis magna nunc, vel sagittis ligula aliquet non. Nullam interdum commodo 
                                            suscipit. Fusce interdum risus et maximus lacinia. Vivamus vitae risus libero. In sit amet dui purus. Nulla sed 
                                            commodo metus, quis rutrum nibh.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button onClick={handleReload} label='View Full Profile' full color='amber' className="m-auto" />
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
                </ScrollArea>
            </Modal.Body>
        </Modal>
    )
}