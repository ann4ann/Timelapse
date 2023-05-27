import React, {memo} from "react";
import cls from "./ProjectInfo.module.css"
import {Button} from "../../common/Button/Button";
import {Text} from "../../common/Text/Text";
import {project} from "../../../types/types";
import {formatDateString} from "../../../utils/timilapseDatesActions";

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
            <Text
                title={projectData.projectName}
                content={`
                ${formatDateString(projectData.startDate)} - 
                ${formatDateString(projectData.endDate)}`}
            />
            <Button
                text={"Редактировать проект"}
                onClick={onClick}
            />
        </div>
    )
})