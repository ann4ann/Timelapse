import {createContext} from "react";
import {project} from "../../types/types";

export const emptyProject = {
    startDate: "",
    endDate: "",
    projectName: "",
}

export const ProjectContext = createContext<project>(emptyProject)
