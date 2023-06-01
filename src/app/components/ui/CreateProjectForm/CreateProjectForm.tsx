import React, {memo} from "react";
import {Input} from "../../common/Input/Input/Input";
import {Button} from "../../common/Button/Button";
import {project} from "../../../types/types";
import {Form} from "../../common/Form/Form";

interface CreateProjectFormProps {
    onSubmit: (data: any) => void,
    projectData: project
}

export const CreateProjectForm = memo((props: CreateProjectFormProps) => {
    const {
        onSubmit,
        projectData,
    } = props

    return (
        <Form onSubmit={onSubmit} defaultValues={projectData}>
            <Input name="projectName" label="Введите имя проекта"/>
            <Input name="startDate" label="Укажите начало проекта" inputType="date" />
            <Input name="endDate" label="Укажите окончание проекта" inputType="date" />
            {/*<Select name="urgently" label="Важность проекта" options={["Urgent", "Not urgent"]} />*/}
            <Button text="Start timelapse!" type="submit"/>
        </Form>
    )
})