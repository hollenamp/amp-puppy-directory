'use client';
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export const SubItem = ({
    label,
    route,
    children,
    className,
}: {
    label:string;
    route:string;
    children:React.ReactNode;
    className?:string;
}) => {
    const pathName = usePathname()
    const activeItem = (pathName && pathName.endsWith(route)) ? 'active':'';
    return(
        <div className={classNames(
            className, 
            'nav-item-child',
            activeItem
        )}>
            <div className="nav-item-links">
                <div className="relative">
                    <Link href={route} className="pl-4 pr-2 py-2 block">{label}</Link>
                </div>
                { children &&
                    <div className="relative">
                        <div className="nav-item-children">
                            {children}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
