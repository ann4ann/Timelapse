export {}
// import {project} from "../../../types/types";
// import {FC, ReactNode, useState} from "react";
// import {currentProj, ProjectContext} from "./ProjectContext222";
//
// interface ProjectProviderProps {
//     children: ReactNode;
// }
//
// const ProjectProvider: FC<ProjectProviderProps> = ({children}) => {
//     const [projectData, setProjectData] = useState<project>(currentProj)
//
//     const saveProject = (newProjectValue: project) => {
//         setProjectData(newProjectValue)
//         console.log("no, im done")
//         localStorage.setItem("projectData", JSON.stringify(newProjectValue))
//     }
//
//     // const defaultProps = useMemo(() => ({
//     //     projectData,
//     //     saveProject
//     // }), [projectData])
//
//     return (
//         <ProjectContext.Provider value={{saveProject, projectData}}>
//             {children}
//         </ProjectContext.Provider>
//     )
// }
//
// export default ProjectProvider;