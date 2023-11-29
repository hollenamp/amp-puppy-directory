'use client';
import Link from "next/link";
import { Icon } from "../Icon";
import classNames from "classnames";
import { AMPThemeIconProps } from "@/interfaces/AMPTheme";
import { usePathname } from "next/navigation";

export const Item = ({
    icon,
    label,
    route,
    children,
    className,
}: {
    icon?:keyof AMPThemeIconProps;
    label:string | null;
    route:string;
    children?:React.ReactNode;
    className?:string;
}) => {
    const pathName = usePathname()
    const activeItem = (pathName && pathName.endsWith(route)) ? 'active':'';
    return(
        <div className={classNames(
            className, 
            activeItem
        )}>
            { icon &&
            <div className='nav-item-icon'>
                <Link href={route} className="py-4 block">
                    <Icon icon={icon} className="w-6 h-6 mx-auto" />
                </Link>
            </div>
            }
            { label &&
            <div className="nav-item-link">
                <div className="relative">
                    <Link href={route} className="px-2 py-4 block font-semibold">{label}</Link>
                </div>
                { children &&
                    <div className="relative">
                        <div className="nav-item-children">
                            {children}
                        </div>
                    </div>
                }
            </div>
            }
        </div>
    )
}
