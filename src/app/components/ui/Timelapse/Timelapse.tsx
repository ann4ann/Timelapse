import {memo} from "react";
import cls from "./Timelapse.module.css"

interface TimelapseProps {

}

const datas = [
    {
        date: "2023-05-10",
        name: "start"
    },
    {
        date: "2023-05-25",
        name: "start"
    },
    {
        date: "2023-06-30",
        name: "end"
    },
]

export const Timelapse = memo((props: TimelapseProps) => {
    const {} = props

    function CountTheDays(start: string, end: string) {
        const startDayMs = new Date(start)
        const endDayMs = new Date(end)
        const duration = (endDayMs.getTime() - startDayMs.getTime())
            / (1000 * 60 * 60 * 24)
        return duration
    }

    return (
        <div className={cls.timelapse}>{
            CountTheDays(datas[0].date, datas[2].date)
            // JSON.stringify(getDateFromString(datas[0].date))
        }</div>
    )
})