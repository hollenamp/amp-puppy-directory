"use client"
import classNames from "classnames"
import {useEffect, useState, useRef} from "react"

export const Sticky = ({
    children,
    offset,
    stickyClass,
    className
}:{
    children?: React.ReactNode
    offset?: string
    stickyClass?:{on:string, off:string}
    className?: string
}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [isSticky, setIsSticky] = useState(false)
    const [stickyHeight, setStickyHeight] = useState({})
    const stickyElement = useRef<HTMLDivElement>(null)

    const stickyOn = stickyClass && stickyClass.on ? stickyClass.on : ''
    const stickyOff = stickyClass && stickyClass.off ? stickyClass.off : ''

    const elementYPosition = stickyElement.current ? stickyElement.current.getBoundingClientRect().top:0

    useEffect(() => {
        const initHeight = stickyElement.current!.clientHeight;
        if(initHeight){
            setStickyHeight({height:initHeight});
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
                const currentScrollPos = window.scrollY;            
                // set state based on location info
                setIsSticky( currentScrollPos > elementYPosition + currentScrollPos );
                // set state to new scroll position
                setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, stickyElement, elementYPosition]);

    return(
        <div className="relative flex" ref={stickyElement} style={stickyHeight}>
            <div className={classNames(
                isSticky ? `${stickyOn} fixed top-0 left-0 right-0`:`${stickyOff} relative`,
                'w-full z-50 backdrop-blur-lg transition-all duration-500',
                className
            )} >
                {children}
            </div>
        </div>
    )
}