import classNames from 'classnames';
import { Icon } from '../Icon'
import Styles  from './Button.module.css';
import type { AMPThemeColors, AMPThemeSizes, AMPThemeIconProps } from '@/interfaces/AMPTheme';
import Link from 'next/link';

type ButtonSizes  = Pick<AMPThemeSizes,  'xs' | 'sm' | 'base' | 'lg' | 'xl'>;

const IconLeft = ({
    iconLeft,
    iconColor
}:{
    iconLeft?:keyof AMPThemeIconProps;
    iconColor?:keyof AMPThemeColors;
}) => {
    return (typeof iconLeft !== 'undefined') ? <span className="pointer-events-none flex items-center w-3 h-3"><Icon className={classNames(
        Styles['btn-icon'],
        Styles.icon
    )} icon={iconLeft} color={iconColor} /></span>:<></>
};

const IconRight = ({
    iconRight,
    iconColor
}:{
    iconRight?:keyof AMPThemeIconProps;
    iconColor?:keyof AMPThemeColors;
}) => {
    return (typeof iconRight !== 'undefined') ? <span className="pointer-events-none flex items-center w-3 h-3"><Icon className={classNames(
        Styles['btn-icon'],
        Styles.icon
    )} icon={iconRight} color={iconColor} /></span>:<></>
};

export const Button = ({
    id,
    label,
    full,
    size = 'base',
    color = 'primary',
    disabled = false,
    className,
    type,
    href,
    tabIndex,
    iconLeft,
    iconRight,
    iconColor,
    onClick
}:{
    id?:string;
    label:string | boolean;
    full?:boolean;
    size?:keyof ButtonSizes;
    color?:keyof AMPThemeColors;
    disabled?:boolean;
    className?:string;
    type?:'button' | 'submit' | 'reset';
    href?:string;
    tabIndex?:any;
    iconLeft?:keyof AMPThemeIconProps;
    iconRight?:keyof AMPThemeIconProps;
    iconColor?:keyof AMPThemeColors;
    onClick?:any;
}) => {
    const btnColor = `btn-${color}`; 
    const btnSize = `btn-${size}`;
    const wFull = typeof full !== 'undefined' && 'w-full';

    return ( 
        <button 
            id={id}
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={classNames(
                wFull,
                Styles.btn,
                Styles[btnColor],
                Styles[btnSize],
                className

            )}

        >
            <IconLeft iconLeft={iconLeft} iconColor={iconColor} />{label && <span>{label}</span>}<IconRight iconRight={iconRight} iconColor={iconColor} />
        </button>
    )
}

export const ButtonLink = ({
    id,
    label,
    full,
    size = 'base',
    color = 'primary',
    className,
    href,
    tabIndex,
    iconLeft,
    iconRight,
    iconColor,
    onClick
}:{
    id?:string;
    label:string | boolean;
    full?:boolean;
    size?:keyof ButtonSizes;
    color?:keyof AMPThemeColors;
    className?:string;
    href:string;
    tabIndex?:any;
    iconLeft?:keyof AMPThemeIconProps;
    iconRight?:keyof AMPThemeIconProps;
    iconColor?:keyof AMPThemeColors;
    onClick?:any;
}) => {
    const btnColor = `btn-${color}`; 
    const btnSize = `btn-${size}`;
    const wFull = typeof full !== 'undefined' && 'w-full';
 
    return ( 
        <Link 
            id={id}
            href={href}
            onClick={onClick}
            className={classNames(
                wFull,
                Styles.btn,
                Styles[btnColor],
                Styles[btnSize],
                className,
            )}
        >
            <IconLeft iconLeft={iconLeft} iconColor={iconColor} />{label && <span>{label}</span>}<IconRight iconRight={iconRight} iconColor={iconColor} />
        </Link>
    )
}