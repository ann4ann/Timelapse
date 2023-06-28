import React, {memo, useContext} from "react";
import cls from "./ProjectInfo.module.css"
import {Button} from "../../common/Button/Button";
import {Text} from "../../common/Text/Text";
import {finalFormatDate} from "../../../utils/timilapseDatesActions";
import {ProjectContext} from "../../../providers";

interface ProjectInfoProps {
    onClick: () => void,
}

export const ProjectInfo = memo((props: ProjectInfoProps) => {
    const {
        onClick,
    } = props

    const projectData = useContext(ProjectContext)

    return (
        <div className={cls.projectInfo}>
            <Text
                title={projectData.projectName}
                content={`
                ${finalFormatDate(projectData.startDate)} - 
                ${finalFormatDate(projectData.endDate)}`}
            />
            <Button
                text={"Редактировать проект"}
                onClick={onClick}
            />
        </div>
    )
})