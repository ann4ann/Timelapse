import React from "react";
import {useForm} from "react-hook-form"
import {resolver} from "./resolver";

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
    } = useForm({ resolver: resolver });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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