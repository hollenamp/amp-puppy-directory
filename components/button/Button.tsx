import classNames from 'classnames';
import { Icon } from '../Icon'
import Styles  from './Button.module.css';
import type { AMPThemeColors, AMPThemeSizes, AMPThemeIconProps } from '@/interfaces/AMPTheme';
import Link from 'next/link';

type ButtonSizes  = Pick<AMPThemeSizes,  'xs' | 'sm' | 'base' | 'lg' | 'xl'>;

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
    const ButtonType = (href) ? Link:'button';

    const IconRight = () => {
        return (typeof iconRight !== 'undefined') ? <span className="pointer-events-none flex items-center w-3 h-3"><Icon className={classNames(
            Styles['btn-icon'],
            Styles.icon
        )} icon={iconRight} color={iconColor} /></span>:<></>
    };

    const IconLeft = () => {
        return (typeof iconLeft !== 'undefined') ? <span className="pointer-events-none flex items-center w-3 h-3"><Icon className={classNames(
            Styles['btn-icon'],
            Styles.icon
        )} icon={iconLeft} color={iconColor} /></span>:<></>
    };

    return <ButtonType 
        href={href ? href :''}
        id={id}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={classNames(
            wFull,
            Styles.btn,
            Styles[btnColor],
            Styles[btnSize],
            className,
        )}
    >
        <IconLeft />{label && <span>{label}</span>}<IconRight />
    </ButtonType>
}