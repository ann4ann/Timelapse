import {ChangeEventHandler, memo, useState} from "react";
import cls from "./InputDate.module.css"
import {Button} from "../../Button/Button";
import {Text} from "../../Text/Text";

interface InputDateProps {
    label?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value?: string,
    name: string,
    type?: "text" | "date" | "password"
}

export const InputDate = memo((props: InputDateProps) => {
    const {
        label = "",
        onChange,
        value = "",
        name = "",
        type = "text",
    } = props

    return (
        <div className={cls.inputDate}>
            <label htmlFor="someDate">{label}</label>
            <input
                onChange={onChange}
                value={value}
                name={name}
                type={type}
            />
            <Text content={value} />
        </div>
    )
})