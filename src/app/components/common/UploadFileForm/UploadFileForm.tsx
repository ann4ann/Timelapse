import {memo} from "react";
import {Form} from "../Form/Form";
import {Input} from "../Input/Input/Input";
import {Button} from "../Button/Button";
import {inputType, Text, textAlign} from "../Text/Text";

export interface uploadedFile extends File{
    file: string
}

interface UploadFileFormProps {
    onSubmit: (data: uploadedFile) => void,
    wrongFileErr: boolean
}

export const UploadFileForm = memo((props: UploadFileFormProps) => {
    const {
        onSubmit,
        wrongFileErr
    } = props

    return (
        <>
            {wrongFileErr && <Text
                type={inputType.ERROR}
                align={textAlign.RIGHT}
                content="Wrong file, upload error."
            />}
            <Form onSubmit={onSubmit}>
                <Input name="file" inputType="file" label="Выберите файл проекта для загрузки:" />
                <Button text="Загрузить проект" type="submit" />
            </Form>
        </>
    )
})