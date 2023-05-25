import {memo} from "react";
import cls from "./Button.module.css"

interface ButtonProps {
    text: string,
    onClick?: () => void,
}

export const Button = memo((props: ButtonProps) => {
    const {
        text,
        onClick
    } = props

    return (
        <button onClick={onClick} className={cls.button}>{text}</button>
    )
})