import {memo, useContext} from "react";
import cls from "./Timelapse.module.css"
import {addPercentsToDatesAndSort, getDaysFromStartToEnd} from "../../../utils/timilapseDatesActions";
import {TimelapseBlock} from "./TimelapseBlock/TimelapseBlock";
import {ProjectContext} from "../../../providers";
import {StagesContext} from "../../../providers/StagesProvider/StagesContext";

interface TimelapseProps {
}

export const Timelapse = memo((props: TimelapseProps) => {
    const projectData = useContext(ProjectContext)
    const stages = useContext(StagesContext)

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