import {date} from "../types/types";
import {sortBy} from "lodash"

type anyDate = string | Date | number

export function FormatMsDateToString(date: number): string {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()

    return `${year}-${month < 10 ? "0"+month : month}-${day < 10 ? "0"+day : day}`
}

export function finalFormatDate(date: string | number): string {
    const dateStr = typeof date === "string"
        ? date
        : FormatMsDateToString(date)
    const [year, monthNum, day] = dateStr.split("-")
    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const monthName = monthArr[Number(monthNum) - 1]

    return `${day} ${monthName} ${year}`
}

export function getDaysBetweenTwoDates(
    start: anyDate, end: anyDate
):number {
        const startDay = new Date(start)
        const endDay = new Date(end)
        const countDays = (endDay.getTime() - startDay.getTime())
            / (1000 * 60 * 60 * 24)

        return countDays
}

export function getPercentFromStartToDate(
    start: anyDate,
    date: anyDate,
    daysInProject: number,
): number {
    const daysAfterStart = getDaysBetweenTwoDates(start, date)
    const percent = Math.round((daysAfterStart / daysInProject) * 100)

    return percent
}

export function addPercentsToDatesAndSort(
    datesArr: date[],
    start: string | Date,
    daysInProject: number
): Required<date>[] {
    const arrWithPercents = datesArr.map((item) => {
        const percent = getPercentFromStartToDate(start, item.dateStr, daysInProject)
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

    return resultArr
}
