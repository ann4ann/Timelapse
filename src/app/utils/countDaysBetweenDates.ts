import {date} from "../types/types";


export function countDaysBetweenDates(start: string, end: string):number {
    const startDayMs = new Date(start)
    const endDayMs = new Date(end)
    const countDays = (endDayMs.getTime() - startDayMs.getTime())
        / (1000 * 60 * 60 * 24)

    return countDays
}

export function addPercentsToDates(
    datesArr: date[],
    start: string,
    daysInProject: number
): Required<date>[] {
    const resultArr = datesArr.map((item) => {
        const daysAfterStart = countDaysBetweenDates(start, item.dateStr)
        const percent = Math.round(daysAfterStart / daysInProject * 100)
        return ({...item, percent: percent})
    })
    // console.log(resultArr)

    return resultArr
}
