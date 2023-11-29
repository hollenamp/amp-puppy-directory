"use client"
import { Modal } from "@/components/modal";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function PuppiesDialog(){
    return (
        <Modal modalIsOpen={true} className="bg-white text-zinc-800">
            <Modal.Head />
            <Modal.Body className='h-full'>
                <ScrollArea>
                    Puppy Dialog
                </ScrollArea>
            </Modal.Body>
        </Modal>
    )
}