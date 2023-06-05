import React, {memo, useContext} from "react";
import cls from "./ProjectInfo.module.css"
import {Button} from "../../common/Button/Button";
import {Text} from "../../common/Text/Text";
import {formatDateString} from "../../../utils/timilapseDatesActions";
import {ProjectContext} from "../../../providers";

interface ProjectInfoProps {
    onClick: () => void,
}

export const ProjectInfo = memo((props: ProjectInfoProps) => {
    const {
        onClick,
    } = props

    const {projectName, startDate, endDate} = useContext(ProjectContext)

    return (
        <div className={cls.projectInfo}>
            <Text
                title={projectName}
                content={`
                ${formatDateString(startDate)} - 
                ${formatDateString(endDate)}`}
            />
            <Button
                text={"Редактировать проект"}
                onClick={onClick}
            />
        </div>
    )
})