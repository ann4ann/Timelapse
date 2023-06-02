import {project} from "../../types/types";
import {FC, ReactNode, useMemo} from "react";
import {emptyProject, ProjectContext} from "./ProjectContext";

const defaultProjectData = localStorage.getItem("projectData") || emptyProject

interface ProjectProviderProps {
    initialProjectData?: project;
    children: ReactNode;
}

const ProjectProvider: FC<ProjectProviderProps> = (props) => {
    const {
        initialProjectData,
        children,
    } = props;

    const updatedProjectData = useMemo(() => {
        return initialProjectData as project || defaultProjectData
    }, [initialProjectData])

    return (
        <ProjectContext.Provider value={updatedProjectData}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider;