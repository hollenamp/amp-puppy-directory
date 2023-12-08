import { useEffect, useState, useCallback } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { ChevronLeftCircle, ChevronRightCircle, XCircle } from 'lucide-react'

export const Lightbox = ({
    className,
    lightboxIsOpen,
    setLightboxIsOpen,
    media,
    selectedMedia
}:{
    className?: string
    lightboxIsOpen?:boolean
    setLightboxIsOpen?: (value: boolean) => void
    media: { src: string }[]
    selectedMedia?:number
}) => {
    let [isOpen, setIsOpen] = useState(false)
    let [selectedLightboxMedia, setSelectedLightboxMedia] = useState(0)

    const closeLightbox = useCallback(() => {
        setIsOpen(false);
        if (setLightboxIsOpen) {
            setLightboxIsOpen(false);
        }
    }, [setLightboxIsOpen]);

    const openLightbox = useCallback(() => {
        setIsOpen(true);
        if (setLightboxIsOpen) {
            setLightboxIsOpen(true);
        }
    }, [setLightboxIsOpen]);

    function prevMedia(){
        if(selectedLightboxMedia >= 1){
            let prevPosition = selectedLightboxMedia - 1
            setSelectedLightboxMedia(prevPosition)
        }
    }

    function nextMedia(){
        if(selectedLightboxMedia < (media.length - 1)){
            let nextPosition = selectedLightboxMedia + 1
            setSelectedLightboxMedia(nextPosition)
        }
    }

    useEffect(() =>{
        if(lightboxIsOpen){
            openLightbox()
        } else {
            closeLightbox() 
        }
    }, [lightboxIsOpen, openLightbox, closeLightbox])

    useEffect(() =>{
        if(selectedMedia && selectedMedia > 0){
            setSelectedLightboxMedia(selectedMedia)
        } else {
            setSelectedLightboxMedia(0) 
        }
    }, [selectedMedia, setSelectedLightboxMedia])

    const MediaImages = () => {
        return media.map((media, index)=>(
            <>
                <div className={`${selectedLightboxMedia == index ? 'flex fade-in': 'hidden fade-out'} select-none`}>
                    <Image className="rounded-md object-contain h-full w-full select-none"
                        src={media.src}
                        alt="Puppy Photo"
                        width={2000}
                        height={1000}
                        />
                </div>
            </>
        ))
    }

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
                    <div className='fixed top-2 right-2 rounded-full cursor-pointer overflow-hidden z-50' onClick={closeLightbox}><XCircle size={48} strokeWidth={2.25} color='#fff' /></div>
                    <div className='fixed top-[50%] left-2 rounded-full cursor-pointer overflow-hidden z-50' onClick={prevMedia}><ChevronLeftCircle size={48} strokeWidth={2.25} color='#fff' /></div>
                    <div className='fixed top-[50%] right-2 rounded-full cursor-pointer overflow-hidden z-50' onClick={nextMedia}><ChevronRightCircle size={48} strokeWidth={2.25} color='#fff' /></div>
                    <div className="flex flex-nowrap w-screen h-full items-center justify-center overflow-hidden">
                        <div className="relative rounded-md mx-auto px-8 py-8 max-h-full max-w-full w-screen flex justify-center">
                            <MediaImages />
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}