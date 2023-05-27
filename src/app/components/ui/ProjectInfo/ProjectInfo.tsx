import React, {memo} from "react";
import cls from "./ProjectInfo.module.css"
import {Button} from "../../common/Button/Button";
import {Text} from "../../common/Text/Text";
import {project} from "../../../types/types";

interface ProjectInfoProps {
    onClick: () => void,
    projectData: project,
}

export const ProjectInfo = memo((props: ProjectInfoProps) => {
    const {
        onClick,
        projectData,
    } = props

    return (
        <div className={cls.projectInfo}>
            <Button
                text={"Редактировать проект"}
                onClick={onClick}
            />
            <Text title={projectData.projectName} />
        </div>
    )
})