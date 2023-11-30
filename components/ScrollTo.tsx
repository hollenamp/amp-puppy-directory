"use client"
import Link from "next/link";
import {useEffect, useState} from "react"

export const ScrollTo = ({
    href,
    className,
    children
}:{
    href:string
    className?:string
    children?: React.ReactNode;
}) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
    }

    return(
        <>
            <Link 
                href={href}
                scroll={false}
                className={className}
                onClick={handleScroll}
            >
                {children}
            </Link>
        </>
    )
}

export const ScrollToTop = ({
    href,
    className,
    children
}:{
    href:string
    className?:string
    children?: React.ReactNode;
}) => {    
    const [showScrollToTop, setShowScrollToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY; 
            if(currentScrollPos >= 100) {
                setShowScrollToTop(true)
            } else {
                setShowScrollToTop(false)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className={`fixed right-4 z-[9999] transition-all duration-500 ${(showScrollToTop)? 'opacity-100 bottom-8':' -bottom-10 opacity-0'}`}>
            <ScrollTo href={href} className={`text-zinc-800 bg-white/40 block rounded-sm p-2`}>
                {children}
            </ScrollTo>
        </div>
    )
}