import {memo} from "react";
import cls from "./UploadFileForm.module.css"
import {Form} from "../Form/Form";
import {Input} from "../Input/Input/Input";
import {Button} from "../Button/Button";

interface UploadFileFormProps {
    onSubmit: (data: any) => void
}

export const UploadFileForm = memo((props: UploadFileFormProps) => {
    const {
        onSubmit
    } = props

    return (
        <Form onSubmit={onSubmit}>
            <Input name="file" inputType="file" label="Выберите файл проекта для загрузки:" />
            <Button text="Загрузить проект" type="submit" />
        </Form>
    )
})