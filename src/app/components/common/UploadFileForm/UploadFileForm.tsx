import {memo} from "react";
// import cls from "./UploadFileForm.module.css"
import {Form} from "../Form/Form";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

export interface uploadedFile extends File{
    file: string
}

interface UploadFileFormProps {
    onSubmit: (data: uploadedFile) => void
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