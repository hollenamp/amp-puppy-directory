import themeDefault from '@/components/Icon/Theme';
import { AMPThemeColors, AMPThemeIconProps } from "@/interfaces/AMPTheme";
import Styles from './Icon.module.css';
import classNames from 'classnames';
import React from 'react';

interface IconProps {
    className?:string;
    icon:keyof AMPThemeIconProps;
    color?:keyof AMPThemeColors;
}

export const Icon = ({icon, color, className, ...props}:IconProps) => {
    const { icon:AMPThemeIcons } = themeDefault;
    const path = AMPThemeIcons[icon].path;
    const iconColor = ( color !== 'undefined') ? `icon-${color}`:'icon-primary'
    return(
        <svg className={
            classNames(
                Styles[iconColor],
                className
            )
        } {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" role="img" focusable="false" aria-hidden="true">
            <path d={`${path}`} />
        </svg>   
    )
}

interface IconCircleProps {
    className?:string;
    children?:React.ReactNode;
}

export const IconCircle = ({className, children}:IconCircleProps) => {
    return(
        <div className={`${className} rounded-full overflow-hidden flex justify-center items-center`}>
            {children}
        </div>
    )
}