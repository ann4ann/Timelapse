export {}
// import {createContext, Dispatch, FC, ReactNode, useReducer} from "react";
// import {project} from "../../../types/types";
// import projectReducer, {initialProjectState, ProjectAction} from "../projectReducer"
//
// interface ProjectContextType {
//     projectState: project,
//     projectDispatch: Dispatch<ProjectAction>
// }
//
// const initialProjContext = {
//     projectState: initialProjectState,
//     projectDispatch: (data: ProjectAction) => {}
// }
//
// export const ProjectContext = createContext(initialProjContext)
//
// interface ProjectProviderProps {
//     children: ReactNode;
// }
//
// export const ProjectProvider:FC<ProjectProviderProps> = ({children}) => {
//     const [projectState, projectDispatch] = useReducer(projectReducer, initialProjectState)
//
//     const values = {
//         projectState,
//         projectDispatch
//     };
//
//     return (
//         <ProjectContext.Provider value={values}>
//             {children}
//         </ProjectContext.Provider>
//     );
// }
//
//
//
//
//
//
