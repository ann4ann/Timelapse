export {}
// import {FC, ReactNode, useReducer} from "react";
// import {ProjectContext} from "./ProjectContext";
// import projectReducer, {initialProjectState} from "./projectReducer";
//
// interface ProjectProviderProps {
//     children: ReactNode;
// }
//
// const ProjectProvider: FC<ProjectProviderProps> = ({children}) => {
//     const [projectState, projectDispatch] = useReducer(projectReducer, initialProjectState)
//
//     const values = {
//         projectState,
//         projectDispatch
//     }
//
//     return (
//         <ProjectContext.Provider value={values}>
//             {children}
//         </ProjectContext.Provider>
//     )
// }
//
// export default ProjectProvider;
//
