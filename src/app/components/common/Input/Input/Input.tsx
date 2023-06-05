import React from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import cls from "./Input.module.css";

export type inputType = "text" | "date" | "password"

interface InputProps {
    register?: UseFormRegister<any>,
    errors?: FieldErrors<any>,
    name: string,
    label?: string,
    inputType?: inputType,
}

export const Input = (props: InputProps) => {
    const {
        register,
        errors,
        name,
        label = "",
        inputType = "text",
        ...rest
    } = props

    const errorMessage = errors?[name]
        && errors[name]?.message : null

    if (register) {
        return (
            <div className={cls.input}>
                <label htmlFor={name} className={cls.label}>
                    {label}
                </label>
                <div className={cls.inputBlock}>
                    <input
                        {...register(name)} {...rest}
                        className={cls.inputField}
                        type={inputType}
                        id={name}
                    />
                    {errorMessage && <div  className={cls.error}>{errorMessage.toString()}</div>}
                </div>
            </div>
        )
    } else {
        return null
    }
}