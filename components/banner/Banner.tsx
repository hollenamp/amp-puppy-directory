import classNames from "classnames"
import { Title } from "./Title"
import { Content } from "./Content"
import Link from "next/link"

export const Banner = ({
    title,
    fullHeight,
    fullWidth,
    className,
    children,
    style,
}:{
    title?: string
    fullHeight?: boolean
    fullWidth?: boolean
    className?: string
    children?: React.ReactNode
    style?:React.CSSProperties
}) => {
    return(
        <>
        <div className={classNames(
            'relative isolate bg-cover bg-center',
            )} style={{ 
            backgroundImage: `url("${process.env.NEXT_PUBLIC_FRONTEND_URL}/images/puppy-header-bg-01.jpg")` 
            }}>
            {/* Banner gradient */}
            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden bg-gradient-to-t from-black/10 to-black/25" aria-hidden="true" />
            {/* Banner content area */}
            <div className="flex flex-col items-center min-h-screen">
                <div className="mx-auto max-w-4xl flex-1 flex flex-col justify-center">
                    <div className="backdrop-blur-sm py-8 sm:py-16 lg:py-32 px-4 sm:px-8 lg:px-16 rounded-xl ring-4 ring-white/10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
            {/* <div className={classNames(
                fullHeight ? 'h-screen':'h-auto',
                className
            )}
            style={style}
            >
                <div className={classNames(
                    fullWidth ? 'w-full':'container'
                )}>
                    {children}
                </div>
            </div> */}
        </>
    )
}

Banner.Title = Title
Banner.Content = Content