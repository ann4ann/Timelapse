import {memo} from "react";
import cls from "./Text.module.css"

export enum textAlign {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
}

export enum inputType {
    ERROR = "error",
    NORMAL = "normal",
}

interface TextProps {
    title?: string,
    content?: string,
    align?: textAlign,
    type?: inputType,
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        content,
        align = textAlign.LEFT,
        type = inputType.NORMAL,
    } = props

    return (
        <div className={`${cls.text} ${cls[`${align}`]} ${cls[`${type}`]}`}>
            {title && (<p className={cls.title}>{title}</p>)}
            {content && (<p className={cls.content}>{content}</p>)}
        </div>
    )
})