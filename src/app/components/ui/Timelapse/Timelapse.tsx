import {memo} from "react";
import cls from "./Timelapse.module.css"
import {addPercentsToDates, countDaysBetweenDates} from "../../../utils/countDaysBetweenDates";
import {date, project} from "../../../types/types";

interface TimelapseProps {
    projectData: project,
    stages: date[]
}

export const Timelapse = memo((props: TimelapseProps) => {
    const {
        projectData,
        stages,
    } = props

    const allDays = countDaysBetweenDates(projectData.startDate, projectData.endDate)
    const arrWithPercents = addPercentsToDates(stages, projectData.startDate, allDays)

    return (
        <div className={cls.timelapse}>{
            JSON.stringify(arrWithPercents)
        }</div>
    )
})