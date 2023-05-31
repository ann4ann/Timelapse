import React from "react";
import {UseFormRegister} from "react-hook-form";
import cls from "./Input.module.css";

export type inputType = "text" | "date"

interface InputProps {
    register?: UseFormRegister<any>,
    // ?
    name: string,
    label?: string,
    inputType?: inputType,
}
interface SelectProps {
    register?: UseFormRegister<any>,
    // ?
    name: string
    // ??????????????????????????
    options: string[],
    label?: string,
}

export const Input = (props: InputProps) => {
    const {register, name, label = "", inputType = "text", ...rest} = props

    if (register) {
        return (
            <div className={cls.inputTest}>
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
                <input
                    {...register(name)} {...rest}
                    className={cls.input}
                    type={inputType}
                />
            </div>
        )
    } else {
        return null
    }
}

export const Select = (props: SelectProps) => {
    const {register, options, name, label = "", ...rest} = props

    if (register) {
        return (

        <div className={cls.inputTest}>
            <label htmlFor={name} className={cls.label}>
                {label}
            </label>
            <select
                {...register(name)} {...rest}
                className={cls.input}
            >
                {options.map(value => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
        )
    } else {
        return null
    }
}