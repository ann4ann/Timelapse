import {FC, ReactNode, useReducer} from "react";
import {ProjectContext, ProjectDispatchContext} from "./ProjectContext";
import projectReducer, {initialProjectState} from "./projectReducer";

interface ProjectProviderProps {
    children: ReactNode;
}

const ProjectProvider: FC<ProjectProviderProps> = ({children}) => {

    const [project, projectDispatch] = useReducer(
        projectReducer,
        initialProjectState
    )

    return (
        <ProjectContext.Provider value={project}>
            <ProjectDispatchContext.Provider value={projectDispatch}>
                {children}
            </ProjectDispatchContext.Provider>
        </ProjectContext.Provider>
    )
}

export default ProjectProvider;

