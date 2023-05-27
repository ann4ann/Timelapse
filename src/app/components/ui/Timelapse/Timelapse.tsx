import {memo} from "react";
import cls from "./Timelapse.module.css"
import {addPercentsToDatesAndSort, getDaysFromStartToEnd} from "../../../utils/timilapseDatesActions";
import {date, project} from "../../../types/types";
import {createRandomColor} from "../../../utils/createRandomColor";
import {TimelapseBlock} from "./TimelapseBlock/TimelapseBlock";

interface TimelapseProps {
    projectData: project,
    stages: date[]
}

export const Timelapse = memo((props: TimelapseProps) => {
    const {
        projectData,
        stages,
    } = props

    const daysFromStartToEnd = getDaysFromStartToEnd(projectData.startDate, projectData.endDate)
    const sortedArrWithPercents = addPercentsToDatesAndSort(stages, projectData.startDate, daysFromStartToEnd)

    return (
        <div className={cls.timelapse}>{
            sortedArrWithPercents.map(item => (
                <TimelapseBlock blockDate={item} />
            ))
        }</div>
    )
})