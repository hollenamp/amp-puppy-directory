"use client"

import classNames from "classnames";
import { useState, useEffect } from "react";
import Styles from "./Form.module.css"

interface IEvent {
    event:React.ChangeEvent<HTMLInputElement>
    target?:any
}
export const FancyInput = ({ 
    ref,
    disabled = false, 
    className='', 
    id,
    name, 
    label, 
    value, 
    groupStart, 
    groupEnd, 
    defaultValue,
    ...props 
}: {
    tabIndex?:number | -1,
    ref?:any,
    id:string,
    name?:string,
    type:string,
    value?:any,
    disabled?: boolean,
    onChange?:any,
    required?:any,
    autoComplete?:any,
    autoFocus?:any,
    className?: string,
    label?:string;
    groupStart?:React.ReactNode,
    groupEnd?:React.ReactNode,
    onInput?:any,
    defaultValue?:any,
}) => {
    const [inputHasValue, setInputHasValue] = useState<boolean>(false)

    useEffect(()=>{
        if(value){
            setInputHasValue(true);
        }
        if(defaultValue){
            setInputHasValue(true);
        }
    }, [value, defaultValue])

    const handleInputChange = (value:string) => {
        if(value){
            setInputHasValue(true);
        } else {
            setInputHasValue(false);
        }
    };

    return(
        <div className={classNames(
            inputHasValue ? "pt-4":"pt-0",
            disabled && 'opacity-50',
            className,
            Styles.formInput
        )}>
            { groupStart &&
                <div>{groupStart}</div>
            }
            <label htmlFor={id} className={classNames(
                inputHasValue ? "top-0 opacity-100":"-top-8 opacity-0",
                Styles.formLabel,
            )}>{label}</label>
            <input 
                id={id} 
                name={name ? name:id}
                disabled={disabled}
                aria-label={label}
                placeholder={label}
                value={value}
                onChange={(event:IEvent) => handleInputChange(event.target.value)}
                defaultValue={defaultValue}
                {...props}
            />
            { groupEnd &&
                <div>{groupEnd}</div>
            }
        </div>
    )
}



