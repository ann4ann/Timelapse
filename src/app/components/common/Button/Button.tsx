import {memo, ReactNode} from "react";
import cls from "./Button.module.css"

interface ButtonProps {
    text: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children?: ReactNode,
}

export const Button = memo((props: ButtonProps) => {
    const {
        text,
        onClick,
        type = "button",
        children
    } = props

    return (
        <button
            onClick={onClick}
            type={type}
            className={cls.button}
        >
            {children? children : text}
        </button>
    )
})