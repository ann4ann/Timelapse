import React, {memo} from "react";
import {Form} from "../../common/Form/Form";
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input/Input";
import {Text} from "../../common/Text/Text";

interface AddProjectStageProps {
    onSubmit: (data: any) => void,
    onCancel: () => void,
}

const tempDate = {
    dateStr: "",
    dateName: "",
}

export const AddProjectStageForm = memo((props: AddProjectStageProps) => {
    const {
        onSubmit,
        onCancel,
    } = props



    return (
        <>
            <Text title="Добавление этапа проекта" />
            <Form onSubmit={onSubmit} defaultValues={tempDate} >
                <Input name="dateName" label="Введите название этапа"/>
                <Input name="dateStr" label="Укажите дату окончания этапа" inputType="date"/>
                <Button text="Confirm" type="submit"/>
                <Button text="Cancel" onClick={onCancel}/>
            </Form>
        </>
    )
})