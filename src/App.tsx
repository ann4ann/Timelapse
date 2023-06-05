import React, {useEffect, useState} from 'react';
import './App.css';
import {Text, textAlign} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {date, project} from "./app/types/types";
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
    const [projectStages, setProjectStages] = useState<date[] | []>([])
    const [stagesInEditing, setStagesInEditing] = useState<boolean>(false)

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

    const toggleProjectInEditing = () => {
        setProjectInEditing(!projectInEditing)
    }
    const toggleStagesInEditing = () => {
        setStagesInEditing(!stagesInEditing)
    }

    const onProjectFormSubmit = (data: any) => {
        localStorage.setItem("projectData", JSON.stringify(data))
        setProjectData(data)
        setProjectInEditing(false)
    };
    const onStageFormSubmit = (data: any) => {
        console.log(data)
        const newStages = [
            ...projectStages,
            data
        ]
        setProjectStages(newStages)
        localStorage.setItem("projectStages", JSON.stringify(newStages))
        setStagesInEditing(false)
    };

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
                            <Timelapse />
                            <Button text="add stage" onClick={toggleStagesInEditing} />
                        </>
                    }
                    {stagesInEditing &&
                        <AddProjectStageForm
                            onSubmit={onStageFormSubmit}
                            onCancel={toggleStagesInEditing}
                        />
                    }
                </div>
            </StagesProvider>
        </ProjectProvider>
    );
}

export default App;
