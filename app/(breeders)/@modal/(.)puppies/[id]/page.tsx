"use client"
import { Modal } from "@/components/modal";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AspectRatio } from "@radix-ui/themes";
import { ButtonLink } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function PuppiesModal(){
    return (
        <Modal modalIsOpen={true} className="bg-white text-zinc-800">
            <Modal.Head />
            <Modal.Body className='h-full'>
                <ScrollArea>
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
                                    <ButtonLink href="tel:555-555-5555" label='(555) 555-5555' className="m-auto" />
                                </div>
                                <div>
                                    <p>- or -</p>
                                </div>
                                <ButtonLink href="/contact" label='Send Message' className="m-auto" />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <h2 className="text-3xl">Cloud</h2>
                            <div className="space-y-4">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tincidunt libero, id dignissim tellus. 
                                    Suspendisse consequat mollis ligula, at maximus orci volutpat et. Nulla id est metus. Donec eget fringilla lacus. 
                                    Sed eget feugiat nisi. Mauris venenatis magna nunc, vel sagittis ligula aliquet non. Nullam interdum commodo 
                                    suscipit. Fusce interdum risus et maximus lacinia. Vivamus vitae risus libero. In sit amet dui purus. Nulla sed 
                                    commodo metus, quis rutrum nibh.
                                </div>
                                <div>
                                    Availability: <strong>Available</strong><br />
                                    Breed: <strong>Samoyed</strong><br />
                                    Sex: <strong>Female</strong><br />
                                    Date of Birth: <strong>Aug 26, 2023</strong><br />
                                    Price: <strong>$2,000</strong> 
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </Modal.Body>
        </Modal>
    )
}