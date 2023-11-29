"use client"
import React, { useRef, useState, useEffect  } from 'react'
import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import Draggable from 'react-draggable'
import { Card } from '../card'
import { Head } from './Head'
import { Body } from './Body'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
 
export const Modal = ({
    children,
    modalIsOpen,
    className ='',
}:{
    children:React.ReactNode;
    modalIsOpen?:boolean;
    className?:string;
}) => {
    const nodeRef = useRef(null)
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if(modalIsOpen){
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [modalIsOpen])

    const eventHandler = (e:any, data:any) => {
        if (data.y > 80){
            setIsOpen(false);
            router.back();
        }
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => false}
            className="relative z-50 h-screen w-full"
            >
            <div className="fixed inset-0 bg-black/60 w-full" aria-hidden="true" />
            <motion.div
                initial={{ opacity: 0, y:0 }}
                animate={{ opacity: 1, y:[100,0] }}
                exit={{ opacity: 0, y:[0,100] }}
                dragConstraints={{ top: 0 }}
                className="fixed top-0 m-auto h-screen w-full"
                >
                <Dialog.Panel className="mx-auto w-screen max-w-4xl h-screen pt-6 flex justify-center relative">
                    <Draggable 
                        nodeRef={nodeRef} 
                        axis="y"
                        handle=".dialog-handle" 
                        onStop={eventHandler} 
                        position={{x: 0, y: 0}}
                        bounds={{top:0}}>
                        <div ref={nodeRef} className="w-full h-full">
                            <Card radius='2xl' className={classNames(
                                className,
                                '!rounded-b-none w-full h-full pb-24 max-w-4xl overflow-hidden'
                            )}>
                                {children}
                            </Card>
                        </div>
                    </Draggable>
                </Dialog.Panel>
            </motion.div>
        </Dialog>
    )
}

Modal.Head = Head   
Modal.Body = Body