"use client"
import { useEffect, useState, Ref } from 'react'
import ApplicationLogo from "@/components/ApplicationLogo"
import Link from "next/link"
import classNames from 'classnames'
import { Sticky } from '@/components/sticky'
import { Nav } from '@/components/navigation'
import { usePathname } from 'next/navigation'

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    const [viewportOffset, setViewportOffset] = useState(0)
    const handleMouseEnter = (e:any) => {
        setViewportOffset(e.currentTarget.offsetLeft)
    };
    
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.body;
        if(isOpen){
            bodyElement.classList.add('overflow-hidden')
        } else {
            bodyElement.classList.remove('overflow-hidden')
        }
    },[isOpen])

    useEffect(() => {
        if(window.location.hash) {
            console.log(window.location.hash)
        }
    }, [])

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Puppies', href: '#puppies' },
        { name: 'Gallery', href: '#' },
    ]

    const user = [
        { name: 'Directory', href: `${process.env.NEXT_PUBLIC_FRONTEND_URL}` },
    ]

    return(
        <>
            <header className={`${pathname == '/' && 'absolute z-50 top-0 left-0 right-0 '}w-full`}>
                <div className="flex bg-violet-500 text-white py-4 px-8">
                    <div className="flex-grow">Facebook | Twitter</div>
                    <div>Call: (555) 555-5555</div>
                </div>
                <div className={classNames(
                    isOpen ? "fixed inset-0 h-screen w-screen bg-violet-100/90 z-50":"static h-auto w-full"
                )} aria-hidden="false"> 
                    <Sticky 
                        stickyClass={{
                            on :'text-zinc-800 bg-white/40', 
                            off:`${pathname == '/' ? 'text-white': 'text-zinc-800'} bg-white/5`
                        }}>
                        <div className='flex flex-col w-full h-full backdrop-blur-sm transition-all duration-500'>
                            <div className="w-full px-8 flex justify-between items-center">
                                <div className="flex-none w-1/4 py-2">
                                    <Link href="/">
                                        <ApplicationLogo className="h-6 md:h-12 w-auto" alt='AMP Puppy Logo' />
                                    </Link>
                                </div>
                                <Nav className='hidden md:flex flex-nowrap gap-1 items-center justify-center flex-grow'>
                                    {navigation.map((item) => (
                                        <Nav.Item key={item.name} label={item.name} route={item.href} />
                                    ))}
                                </Nav>
                                <Nav className='hidden md:flex flex-nowrap gap-1 items-center justify-end flex-none w-1/4'>
                                    {user.map((item) => (
                                        <Nav.Item key={item.name} label={item.name} route={item.href!} />
                                    ))}
                                </Nav>
                                <div className="mt-auto -mr-8 flex md:hidden">
                                    <button
                                        onClick={() => setIsOpen((open:boolean) => !isOpen)}
                                        className= { classNames(
                                            isOpen ? "active bg-violet-500 text-white":"bg-transparent backdrop-blur-md text-zinc-900 hover:bg-violet-500 hover:text-white",
                                            "inline-flex items-center justify-center h-16 w-12 md:h-20 md:w-16 focus:outline-none transition duration-150 ease-in-out"
                                        )} >
                                        <svg
                                            className="h-8 w-8 md:h-16 md:w-16 transition-transform duration-150 ease-in-out ham"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 100 100">
                                            <path className="line top"
                                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                                            <path className="line middle"
                                                d="m 30,50 h 40" />
                                            <path className="line bottom"
                                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={classNames(
                                isOpen ? "flex h-full":"hidden h-0",
                                "text-zinc-800 border-t border-violet-900 border-solid"
                            )}>
                                <ul className='p-1 flex flex-col space-y-0.5 w-full h-full'>
                                    <li className='w-full'><Link href="#" className='px-2 py-4 block bg-white/80 hover:bg-white/90 text-violet-900 hover:text-violet-700'>Mobile Nav 1</Link></li>
                                    <li className='w-full'><Link href="#" className='px-2 py-4 block bg-white/80 hover:bg-white/90 text-violet-900 hover:text-violet-700'>Mobile Nav 2</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Sticky>
                </div>
            </header>
        </>
    )
}