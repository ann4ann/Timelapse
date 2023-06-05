import React, {memo} from "react";
import {Form} from "../../common/Form/Form";
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input/Input";

interface AddProjectStageProps {
    onSubmit: (data: any) => void,
}

const tempDate = {
    dateStr: "",
    dateName: ""
}

export const AddProjectStageForm = memo((props: AddProjectStageProps) => {
    const {
        onSubmit,
    } = props


    return (
        <Form onSubmit={onSubmit} defaultValues={tempDate} >
            <Input name="dateName" label="Введите название этапа"/>
            <Input name="dateStr" label="Укажите дату окончания этапа" inputType="date"/>
            <Button text="Confirm" type="submit"/>
        </Form>
    )
})