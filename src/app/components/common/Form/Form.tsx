import React from "react";
import {useForm} from "react-hook-form"
import {resolver} from "./resolver";
import cls from "./Form.module.css"

interface FormProps {
    defaultValues?: any,
    children: any,
    onSubmit: (data: any) => void
}

export const Form = (props: FormProps) => {
    const {
        defaultValues,
        children,
        onSubmit
    } = props
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: resolver,
        defaultValues: defaultValues
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cls.form}
        >
            {Array.isArray(children)
                ? children.map((child) => {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                errors,
                                key: child.props.name
                            }
                        })
                        : child;
                })
                : children}
        </form>
    )
}