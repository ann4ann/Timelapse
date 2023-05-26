import {ChangeEventHandler, memo} from "react";
import cls from "./Input.module.css"
import {Text} from "../../Text/Text";

interface InputDateProps {
    label?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value?: string,
    name: string,
    type?: "text" | "date" | "password"
}

export const Input = memo((props: InputDateProps) => {
    const {
        label = "",
        onChange,
        value = "",
        name = "",
        type = "text",
    } = props

    return (
        <div className={cls.inputDate}>
            <label htmlFor="someDate" className={cls.label}>
                {label}
            </label>
            <input
                className={cls.input}
                onChange={onChange}
                value={value}
                name={name}
                type={type}
            />
            {/*<Text content={value} />*/}
        </div>
    )
})