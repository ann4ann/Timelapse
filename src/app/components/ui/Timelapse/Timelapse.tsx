import {memo, useContext, useEffect, useState} from "react";
import cls from "./Timelapse.module.css"
import {
    addPercentsToDatesAndSort,
    getDaysBetweenTwoDates,
    getPercentFromStartToDate
} from "../../../utils/timilapseDatesActions";
import {TimelapseBlock} from "./TimelapseBlock/TimelapseBlock";
import {ProjectContext} from "../../../providers";
import {StagesContext} from "../../../providers/StagesProvider/StagesContext";

interface TimelapseProps {
}

export const Timelapse = memo((props: TimelapseProps) => {
    const projectData = useContext(ProjectContext)
    const stages = useContext(StagesContext)

    const [todayDatePercent, setTodayDatePercent] = useState<number>(0)
    const todayStr = Date.now()
    useEffect(() => {
        setTodayDatePercent(getPercentFromStartToDate(projectData.startDate, todayStr, daysInProject))
    }, [projectData, stages])

    const daysInProject = getDaysBetweenTwoDates(projectData.startDate, projectData.endDate)
    const sortedArrWithPercents = addPercentsToDatesAndSort(stages, projectData.startDate, daysInProject)


    return (
        <div className={cls.timelapse}>
            {sortedArrWithPercents.map(item => (
                <TimelapseBlock blockDate={item} key={item.dateName + item.dateStr} />
            ))}
            <div className={cls.today} style={{
                width: `calc((100% - 20px) * ${todayDatePercent} / 100 + 10px)`
            }}></div>
        </div>
    )
})