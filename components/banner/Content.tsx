import classNames from "classnames"
import Styles from './Banner.module.css'

export const Content = ({
    className,
    children
}:{
    className?:string
    children: React.ReactNode
}) => {
    return (
        <div className={classNames(
            className,
            Styles.bannerContent
        )}>
            {children}
        </div>
    )
}