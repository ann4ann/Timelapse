import {memo, useContext} from "react";
import cls from "./Timelapse.module.css"
import {addPercentsToDatesAndSort, getDaysFromStartToEnd} from "../../../utils/timilapseDatesActions";
import {date} from "../../../types/types";
import {TimelapseBlock} from "./TimelapseBlock/TimelapseBlock";
import {ProjectContext} from "../../../providers";

interface TimelapseProps {
    stages: date[]
}

export const Timelapse = memo((props: TimelapseProps) => {
    const {
        stages,
    } = props

    const projectData = useContext(ProjectContext)

    const daysFromStartToEnd = getDaysFromStartToEnd(projectData.startDate, projectData.endDate)
    const sortedArrWithPercents = addPercentsToDatesAndSort(stages, projectData.startDate, daysFromStartToEnd)

    return (
        <div className={cls.timelapse}>{
            sortedArrWithPercents.map(item => (
                <TimelapseBlock blockDate={item} key={item.dateName + item.dateStr} />
            ))
        }</div>
    )
})