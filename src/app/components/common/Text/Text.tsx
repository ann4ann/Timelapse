import {memo} from "react";
import cls from "./Text.module.css"

export enum align {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
}

interface TextProps {
    title?: string,
    content?: string,
    align?: align
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        content,
        align,
    } = props

    return (
        <div className={`${cls.text} ${cls[`${align}`]}`}>
            {title && (<p className={cls.title}>{title}</p>)}
            {content && (<p className={cls.content}>{content}</p>)}
        </div>
    )
})