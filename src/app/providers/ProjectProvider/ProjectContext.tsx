import {createContext, Dispatch, useContext} from "react";
import {project} from "../../types/types";
import {ProjectAction} from "./projectReducer";

export const emptyProject = {
    startDate: "",
    endDate: "",
    projectName: "",
}

export const ProjectContext = createContext<project>(emptyProject)
export const ProjectDispatchContext = createContext<Dispatch<ProjectAction> | null>(null)

export function useProject() {
    return useContext(ProjectContext)
}

export function useProjectDispatch() {
    return useContext(ProjectDispatchContext)
}












