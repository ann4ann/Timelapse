import {memo} from "react";
import cls from "./Timelapse.module.css"
import {addPercentsToDatesAndSort, timilapseDatesActions} from "../../../utils/timilapseDatesActions";
import {date, project} from "../../../types/types";
import {createRandomColor} from "../../../utils/createRandomColor";

interface TimelapseProps {
    projectData: project,
    stages: date[]
}

export const Timelapse = memo((props: TimelapseProps) => {
    const {
        projectData,
        stages,
    } = props

    const daysFromStartToEnd = timilapseDatesActions(projectData.startDate, projectData.endDate)
    const sortedArrWithPercents = addPercentsToDatesAndSort(stages, projectData.startDate, daysFromStartToEnd)

    return (
        <div className={cls.timelapse}>{
            sortedArrWithPercents.map(item => (
                <div style={{width: `${item.absolutePercent}%`, backgroundColor: createRandomColor(), textAlign: "center"}}>
                    {item.dateName}
                </div>
            ))
        }</div>
    )
})