"use client"
import { Modal } from "@/components/modal";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AspectRatio } from "@radix-ui/themes";
import { Button } from "@/components/button";
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
                            <div className="pt-4 text-center">
                                <div>
                                    <p>Call today for availability</p>
                                </div>
                                <Button href="tel:555-555-5555" label='(555) 555-5555' className="m-auto" />

                                <Button label='(555) 555-5555' className="m-auto" />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <h2 className="text-3xl">Cloud</h2>
                            <div className="pt-4">
                                Availability: <strong>Available</strong><br />
                                Breed: <strong>Samoyed</strong><br />
                                Sex: <strong>Female</strong><br />
                                Date of Birth: <strong>Aug 26, 2023</strong><br />
                                Price: <strong>$2,000</strong> 
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </Modal.Body>
        </Modal>
    )
}