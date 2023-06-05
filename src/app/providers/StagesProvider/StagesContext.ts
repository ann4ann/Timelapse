import {createContext} from "react";
import {date} from "../../types/types";

export const emptyDate: date = {
    dateStr: "",
    dateName: "",
}

export const StagesContext = createContext<date[] | []>([emptyDate])
