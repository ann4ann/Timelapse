import {date} from "../types/types";
import {sortBy} from "lodash"

export function formatDateString(date: string): string {
    const [year, monthNum, day] = date.split("-")
    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const month = monthArr[Number(monthNum) - 1]
    return `${day} ${month} ${year}`
}

export function getDaysFromStartToEnd(start: string, end: string):number {
    const startDayMs = new Date(start)
    const endDayMs = new Date(end)
    const countDays = (endDayMs.getTime() - startDayMs.getTime())
        / (1000 * 60 * 60 * 24)

    return countDays
}

export function addPercentsToDatesAndSort(
    datesArr: date[],
    start: string,
    daysInProject: number
): Required<date>[] {
    const arrWithPercents = datesArr.map((item) => {
        const daysAfterStart = getDaysFromStartToEnd(start, item.dateStr)
        const percent = Math.round(daysAfterStart / daysInProject * 100)
        return ({...item, percent: percent})
    })
    const sortedArr = sortBy(arrWithPercents, o => o.percent)
    const resultArr = sortedArr.map((item, index) => {
        if (index === 0 ) {
            return ({...item, absolutePercent: item.percent})
        }
        const absolutePercent = item.percent - sortedArr[index - 1].percent
        return ({...item, absolutePercent: absolutePercent})
    })
    // console.log(sortedArr)

    return resultArr
}
