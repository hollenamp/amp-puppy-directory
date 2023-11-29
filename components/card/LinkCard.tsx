import Link from "next/link"
import { Card } from "."
import { AMPThemeColors, AMPThemeRadius } from "@/interfaces/AMPTheme"
import classNames from "classnames"

type CardRadius = Pick<AMPThemeRadius, 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'>;

export const LinkCard = ({
    title,
    blurb,
    color,
    className,
    radius,
    href
}:{
    title:string|null
    blurb:string|null
    color?:keyof AMPThemeColors
    className?:string
    radius?:keyof CardRadius
    href:string
}) =>{
    return(
    <Link href={href}>
        <Card color={color} radius={radius} className={classNames(
            'h-full',
            className
        )}>
            <Card.Head>
                <h2>{title}</h2>
            </Card.Head>
            <Card.Body>
                {blurb}
            </Card.Body>
        </Card>
    </Link>
    )
}