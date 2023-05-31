import React from "react";
import {useForm} from "react-hook-form"

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
    const { handleSubmit, register } = useForm({ defaultValues });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(children)
                ? children.map((child) => {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register,
                                key: child.props.name
                            }
                        })
                        : child;
                })
                : children}
        </form>
    )
}