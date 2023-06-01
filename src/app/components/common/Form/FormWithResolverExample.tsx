import {useForm} from "react-hook-form";
import React, {memo} from "react";
import {FormValues, resolver} from "./resolver";
import {Button} from "../Button/Button";

type inputData = {
    fieldName: string,
    label: string,
}

interface FormProps {
    inputsData?: inputData[]
}

// ===================
const inputsDataTest = [
    {
        fieldName: "projectName",
        label: "Имя проекта"
    },
    {
        fieldName: "startDate",
        label: "Дата начала"
    },
    {
        fieldName: "startDate",
        label: "Дата окончания"
    },
]
// ===================


export const Form = memo((props: FormProps) => {
    const {
        inputsData = inputsDataTest,
    } = props

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver})
    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <form onSubmit={onSubmit}>

            <div style={{marginBottom: "15px"}}>
                <input {...register("projectName")} placeholder="projectName" />
                {errors?.projectName && <p>{errors.projectName?.message}</p>}
            </div>

            {/*<div style={{marginBottom: "15px"}}>*/}
            {/*    <input {...register("startDate")} placeholder="startDate" />*/}
            {/*    {errors?.startDate && <p>{errors.startDate?.message}</p>}*/}
            {/*</div>*/}

            {/*<div style={{marginBottom: "15px"}}>*/}
            {/*    <input {...register("endDate")} placeholder="endDate" />*/}
            {/*    {errors?.endDate && <p>{errors.endDate?.message}</p>}*/}
            {/*</div>*/}

            <Button text="Let's check form!" type="submit"/>
        </form>
    )
})