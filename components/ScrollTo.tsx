"use client"
import Link from "next/link";

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
    const showScrollToTop = ""
    return(
        <div className={`fixed bottom-8 right-4 z-[9999] ${showScrollToTop}`}>
            <ScrollTo href={href} className={`text-zinc-800 bg-white/40 block rounded-sm p-2`}>
                {children}
            </ScrollTo>
        </div>
    )
}