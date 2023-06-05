import React from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import cls from "./Input.module.css";

interface SelectProps {
    register?: UseFormRegister<any>,
    errors?: FieldErrors<any>,
    name: string
    options: string[],
    label?: string,
}

export const Select = (props: SelectProps) => {
    const {
        register,
        options,
        name,
        label = "",
        ...rest
    } = props

    if (register) {
        return (
            <div className={cls.input}>
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
                <select
                    {...register(name)} {...rest}
                    className={cls.inputField}
                    id={name}
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