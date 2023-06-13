import React, {memo, useContext} from "react";
import {Input} from "../../common/Input/Input/Input";
import {Button} from "../../common/Button/Button";
import {Form} from "../../common/Form/Form";
import {ProjectContext} from "../../../providers";
import {Text} from "../../common/Text/Text";

interface CreateProjectFormProps {
    onSubmit: (data: any) => void,
    onCancel: () => void,
}

export const CreateProjectForm = memo((props: CreateProjectFormProps) => {
    const {
        onSubmit,
        onCancel,
    } = props

    const projectData = useContext(ProjectContext)

    const titleText = projectData.projectName
        ? "Изменить проект"
        : "Создание проекта"

    return (
        <>
            <Text title={titleText} />
            <Form onSubmit={onSubmit} defaultValues={projectData}>
                <Input name="projectName" label="Введите имя проекта"/>
                <Input name="startDate" label="Укажите начало проекта" inputType="date" />
                <Input name="endDate" label="Укажите окончание проекта" inputType="date" />
                {/*<Select name="urgently" label="Важность проекта" options={["Urgent", "Not urgent"]} />*/}
                <Button text="Start timelapse!" type="submit"/>
                <Button text="Cancel" onClick={onCancel}/>
            </Form>
        </>
    )
})