import {random} from "lodash"

export function createRandomColor() {
    const colorStr = `rgb(
        ${random(100, 220)}, 
        ${random(100, 220)}, 
        ${random(100, 220)}
    )`

    return colorStr
}