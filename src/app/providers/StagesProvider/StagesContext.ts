import {createContext} from "react";
import {projectStage} from "../../types/types";

interface StagesContextType {
    dateStr: "",
    dateName: "",
    onStageClick?: () => void
}

export const emptyDate: StagesContextType = {
    dateStr: "",
    dateName: "",
    onStageClick: () => {}
}

export const StagesContext = createContext<projectStage[] | []>([emptyDate])
