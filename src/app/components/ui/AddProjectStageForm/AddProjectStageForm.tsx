import React, {memo} from "react";
import {Form} from "../../common/Form/Form";
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input";
import {Text} from "../../common/Text/Text";
import {projectStage} from "../../../types/types";

interface AddProjectStageProps {
    onSubmit: (data: projectStage) => void,
    onCancel: () => void,
    onDelete: () => void,
    defaultValues: projectStage
}

export const AddProjectStageForm = memo((props: AddProjectStageProps) => {
    const {
        onSubmit,
        onCancel,
        onDelete,
        defaultValues,
    } = props

    const titleText = defaultValues.dateName
        ? "Изменить этап проекта"
        : "Добавление этапа проекта"

    return (
        <>
            <Text title={titleText} />
            <Form onSubmit={onSubmit} defaultValues={defaultValues} >
                <Input name="dateName" label="Введите название этапа"/>
                <Input name="dateStr" label="Укажите дату окончания этапа" inputType="date"/>
                <Button text="Confirm" type="submit"/>
                <Button text="Cancel" onClick={onCancel}/>
            </Form>
            {defaultValues.dateName &&
                <Button
                    text="Delete stage"
                    onClick={onDelete}
                />
            }
        </>
    )
})