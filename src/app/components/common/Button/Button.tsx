import {memo} from "react";
import cls from "./Button.module.css"

interface ButtonProps {
    text: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = memo((props: ButtonProps) => {
    const {
        text,
        onClick,
        type = "button"
    } = props

    return (
        <button
            onClick={onClick}
            type={type}
            className={cls.button}
        >
            {text}
        </button>
    )
})