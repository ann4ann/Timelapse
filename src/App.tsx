import React, {useEffect, useState} from 'react';
import './App.css';
import {Text, textAlign} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {project, projectStage} from "./app/types/types";
import {CreateProjectForm} from "./app/components/ui/CreateProjectForm/CreateProjectForm";
import {ProjectInfo} from "./app/components/ui/ProjectInfo/ProjectInfo";
import {Button} from "./app/components/common/Button/Button";
import {ProjectProvider} from "./app/providers";
import StagesProvider from "./app/providers/StagesProvider/StagesProvider";
import {AddProjectStageForm} from "./app/components/ui/AddProjectStageForm/AddProjectStageForm";

function App() {
    const [projectInEditing, setProjectInEditing] = useState<boolean>(true)
    const [projectData, setProjectData] = useState<project>({
        startDate: "",
        endDate: "",
        projectName: "",
    })
    const [projectStages, setProjectStages] = useState<projectStage[] | []>([])
    const [stagesInEditing, setStagesInEditing] = useState<boolean>(false)
    const emptyProject = {
        dateStr: "",
        dateName: "",
    }
    const [projectStageData,setProjectStageData] = useState<projectStage>(emptyProject)

    useEffect(() => {
        const strData = localStorage.getItem("projectData")
        const strStages = localStorage.getItem("projectStages")
        if (strData) {
            setProjectData(JSON.parse(strData))
            setProjectInEditing(false)
        }
        if (strStages) {
            setProjectStages(JSON.parse(strStages))
        }
    }, [])

    // PROJECT FORM
    const toggleProjectInEditing = () => {
        setProjectInEditing(!projectInEditing)
    }
    const onProjectFormSubmit = (data: any) => {
        localStorage.setItem("projectData", JSON.stringify(data))
        setProjectData(data)
        setProjectInEditing(false)
    };

    // STAGE FORM
    const setNewStagesData = (stagesData: any) => {
        setProjectStages(stagesData)
        localStorage.setItem("projectStages", JSON.stringify(stagesData))
        setStagesInEditing(false)
        setProjectStageData(emptyProject)
    }
    const deleteStageAndGetNewStagesData = (deletedStageData: projectStage) => {
        const newStages = projectStages.filter((stage) =>
            deletedStageData.dateName !== stage.dateName
            && deletedStageData.dateStr !== stage.dateStr
        )
        return newStages
    }
    const onStageFormSubmit = (data: any) => {
        let newStages
        if (projectStageData.dateName) {
            const filteredData = deleteStageAndGetNewStagesData(projectStageData)
            newStages = [
                ...filteredData,
                data
            ]
        } else {
            newStages = [
                ...projectStages,
                data
            ]
        }
        setNewStagesData(newStages)
    };
    const onStageFormCancel = () => {
        setStagesInEditing(false)
        setProjectStageData(emptyProject)
    }
    const onStageFormDelete = () => {
        const newStages = deleteStageAndGetNewStagesData(projectStageData)
        setNewStagesData(newStages)
    }

    const onStageBlockClick = (data: projectStage) => {
        setProjectStageData(data)
        setStagesInEditing(true)
    }

    return (
        <ProjectProvider initialProjectData={projectData}>
            <StagesProvider initialDates={projectStages}>
                <div className="App">
                    <Text
                        title="Timelapse"
                        content="Let's start our timelapse!"
                        align={textAlign.CENTER}
                    />

                    {projectInEditing &&
                        <CreateProjectForm
                            onSubmit={onProjectFormSubmit}
                            onCancel={toggleProjectInEditing}
                        />
                    }

                    {!projectInEditing && !stagesInEditing &&
                        <>
                            <ProjectInfo onClick={toggleProjectInEditing} />
                            <Timelapse onStageBlockClick={onStageBlockClick}/>
                            <Button text="add stage" onClick={() => (setStagesInEditing(true))} />
                        </>
                    }

                    {stagesInEditing &&
                        <AddProjectStageForm
                            defaultValues={projectStageData}
                            onSubmit={onStageFormSubmit}
                            onCancel={onStageFormCancel}
                            onDelete={onStageFormDelete}
                        />
                    }
                </div>
            </StagesProvider>
        </ProjectProvider>
    );
}

export default App;
