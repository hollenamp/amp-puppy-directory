import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'

export const Lightbox = ({
    className
}:{
    className?: string
}) => {
    let [isOpen, setIsOpen] = useState(true)

    return(
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
                >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen h-screen items-center justify-center p-4 container">
                    {/* The actual dialog panel  */}
                    <Dialog.Panel className="rounded-md mx-auto px-8 py-8 relative">
                        <div className='relative h-full w-full'>
                            <Image className="rounded-md object-contain"
                                src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                alt="Puppy Photo"
                                width={2000}
                                height={1000}
                                />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}