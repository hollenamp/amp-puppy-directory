import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { XCircle } from 'lucide-react'

export const Lightbox = ({
    className,
    lightboxIsOpen,
    setLightboxIsOpen
}:{
    className?: string
    lightboxIsOpen?:boolean
    setLightboxIsOpen?: (value: boolean) => void
}) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeLightbox() {
        setIsOpen(false)
        if(setLightboxIsOpen){
            setLightboxIsOpen(false)
        }
    }

    function openLightbox() {
        setIsOpen(true)
        if(setLightboxIsOpen){
            setLightboxIsOpen(true)
        }
    }

    useEffect(() =>{
        if(lightboxIsOpen){
            openLightbox()
        } else {
            closeLightbox() 
        }
    }, [lightboxIsOpen])

    return(
        <>
            <Dialog
                open={isOpen}
                onClose={() => closeLightbox()}
                className="relative z-[9999] h-screen w-full"
                >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

                <Dialog.Panel className="fixed inset-0 w-screen h-screen flex justify-center">
                    <div className="flex w-full h-full items-center justify-center">
                        <div className='fixed top-2 right-2 rounded-full cursor-pointer overflow-hidden' onClick={closeLightbox}><XCircle size={48} strokeWidth={2.25} color='#fff' /></div>
                        {/* The actual dialog panel  */}
                        <div className="relative rounded-md mx-auto px-8 py-8 max-h-full max-w-full flex">
                            <div>
                                <Image className="rounded-md object-contain h-full w-full"
                                    src={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/samoyed-01.jpg`}
                                    alt="Puppy Photo"
                                    width={2000}
                                    height={1000}
                                    />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}