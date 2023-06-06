import {memo, useContext, useEffect, useState} from "react";
import cls from "./Timelapse.module.css"
import {
    addPercentsToDatesAndSort, finalFormatDate, FormatMsDateToString,
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
    const todayMs = Date.now()
    useEffect(() => {
        setTodayDatePercent(getPercentFromStartToDate(projectData.startDate, FormatMsDateToString(todayMs), daysInProject))
        console.log(getPercentFromStartToDate(projectData.startDate, FormatMsDateToString(todayMs), daysInProject), "percent")
        console.log(daysInProject, "proj days")
        console.log(projectData.startDate, "start")
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
            }}>
                <p className={cls.todayDate}>Today {finalFormatDate(todayMs)}</p>
            </div>
        </div>
    )
})