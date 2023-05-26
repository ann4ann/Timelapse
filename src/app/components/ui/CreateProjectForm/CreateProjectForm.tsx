import React, {ChangeEventHandler, FormEvent, memo} from "react";
import cls from "./CreateProjectForm.module.css"
import {Input} from "../../common/Input/Input/Input";
import {Button} from "../../common/Button/Button";
import {project} from "../../../types/types";

interface CreateProjectFormProps {
    changeInputHandler: ChangeEventHandler<HTMLInputElement>
    submitFormHandler: (e: FormEvent<HTMLFormElement>) => void,
    projectData: project
}

export const CreateProjectForm = memo((props: CreateProjectFormProps) => {
    const {
        changeInputHandler,
        submitFormHandler,
        projectData,
    } = props



    return (
        <form onSubmit={submitFormHandler} className={cls.createProjectForm}>
            <Input
                label="Введите имя проекта:"
                onChange={changeInputHandler}
                value={projectData.projectName}
                name={"projectName"}
                type={"text"}
            />
            <Input
                label="Выберите начало проекта:"
                onChange={changeInputHandler}
                value={projectData.startDate}
                name={"startDate"}
                type={"date"}
            />
            <Input
                label="Выберите окончание проекта:"
                onChange={changeInputHandler}
                value={projectData.endDate}
                name={"endDate"}
                type={"date"}
            />
            <Button text="Let's timelapse!" type={"submit"}/>
        </form>
    )
})