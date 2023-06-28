import {project} from "../../types/types";
const localStorageProj = localStorage.getItem("projectData")
export const emptyProject = {
    startDate: "",
    endDate: "",
    projectName: "",
}
export const initialProjectState: project = localStorageProj && JSON.parse(localStorageProj)  || emptyProject

export enum ProjectActionKind {
    CREATE_PROJECT = "CREATE PROJECT"
}

export interface ProjectAction {
    type: ProjectActionKind,
    payload: project,
}

function projectReducer(state: project, action:ProjectAction): project {
    const {type, payload} = action
    switch (type) {
    case ProjectActionKind.CREATE_PROJECT:
        console.log("НАконец-то!!")
        localStorage.setItem("projectData", JSON.stringify(payload))
        return {
            ...state,
            startDate: payload.startDate,
            endDate: payload.endDate,
            projectName: payload.projectName,
        };
    default:
        return state
    }
}

export default projectReducer;