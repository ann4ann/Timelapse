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
import {UploadFileForm} from "./app/components/common/UploadFileForm/UploadFileForm";

interface onEdit {
    project: boolean,
    stage: boolean,
    upload: boolean,
}

function App() {
    const [uploadFile, setUploadFile] = useState<string>("")
    const [isOnEditing, setIsOnEditing] = useState<onEdit>({
        project: true,
        stage: false,
        upload: false,
    })
    const [projectData, setProjectData] = useState<project>({
        startDate: "",
        endDate: "",
        projectName: "",
    })
    const [projectStages, setProjectStages] = useState<projectStage[] | []>([])
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
            setIsOnEditing(prevState => ({
                ...prevState,
                project: false
            }))
        }
        if (strStages) {
            setProjectStages(JSON.parse(strStages))
        }
    }, [])

    // PROJECT FORM
    const toggleProjectInEditing = () => {
        setIsOnEditing(prevState => ({
            ...prevState,
            project: !prevState.project
        }))
    }
    const onProjectFormSubmit = (data: any) => {
        localStorage.setItem("projectData", JSON.stringify(data))
        setProjectData(data)
        setIsOnEditing(prevState => ({
            ...prevState,
            project: false
        }))
    };

    // STAGE FORM
    const setNewStagesData = (stagesData: any) => {
        setProjectStages(stagesData)
        localStorage.setItem("projectStages", JSON.stringify(stagesData))
        setIsOnEditing(prevState => ({
            ...prevState,
            stage: false
        }))
        setProjectStageData(emptyProject)
    }
    const setStageInEditing = () => {
        setIsOnEditing(prevState => ({
            ...prevState,
            stage: true
        }))
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
        setIsOnEditing(prevState => ({
            ...prevState,
            stage: false
        }))
        setProjectStageData(emptyProject)
    }
    const onStageFormDelete = () => {
        const newStages = deleteStageAndGetNewStagesData(projectStageData)
        setNewStagesData(newStages)
    }

    const onStageBlockClick = (data: projectStage) => {
        setProjectStageData(data)
        setIsOnEditing(prevState => ({
            ...prevState,
            stage: true
        }))
    }

    // SAVE / LOAD
    const onSaveProjectClick = () => {
        if(!projectData.projectName) {
            return
        }
        const saveLink = document.createElement("a")
        const data = localStorage.getItem("projectData")
                        + "/"
                        + localStorage.getItem("projectStages")
        console.log(data)
        const dataBlob = new Blob([data ? data : ""], {type: "text/plain"})
        saveLink.href = window.URL.createObjectURL(dataBlob)
        saveLink.download = `${projectData.projectName}.txt`
        saveLink.click()
    }

    const toggleUploadIsEditing = () => {
        setIsOnEditing(prevState => ({
            ...prevState,
            upload: !prevState.upload
        }))
    }

    const onUploadProjectClick = async (data: any) => {
        const formData = new FormData()
        await formData.append("files", data.file[0])
        const fileData = await formData.get("files")
        console.log(fileData)
        const dataBlob = new Blob([fileData ? fileData : ""], {type: "text/plain"})
        const reader = new FileReader()
        reader.onload = function (e) {
            const fileContent = (e.target?.result);
            console.log(typeof fileContent)
            let projDataArr: string[] = []
            if (typeof fileContent === "string") {
                projDataArr = fileContent.split("/")
            }
            const newProjectData = JSON.parse(projDataArr[0])
            const newProjectStagesData = JSON.parse(projDataArr[1])

            if (newProjectData.projectName) {
                setProjectData(newProjectData)
                setProjectStages(newProjectStagesData)
                localStorage.setItem("projectStages", JSON.stringify(newProjectStagesData))
                localStorage.setItem("projectData", JSON.stringify(newProjectData))
                setIsOnEditing(prevState => ({
                    ...prevState,
                    upload: false
                }))
            } else {
                console.log("Wrong file")
            }
        }
        reader.onerror = function (e) {
            console.log("error")
        }
        reader.readAsText(dataBlob)
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
                    {projectData.projectName && <ProjectInfo onClick={toggleProjectInEditing}/>}

                    {isOnEditing.project &&
                        <CreateProjectForm
                            onSubmit={onProjectFormSubmit}
                            onCancel={toggleProjectInEditing}
                        />
                    }

                    {!isOnEditing.project && !isOnEditing.stage &&
                        <>
                            <Timelapse onStageBlockClick={onStageBlockClick}/>
                            <Button text="add stage" onClick={setStageInEditing} />
                        </>
                    }

                    {isOnEditing.stage &&
                        <AddProjectStageForm
                            defaultValues={projectStageData}
                            onSubmit={onStageFormSubmit}
                            onCancel={onStageFormCancel}
                            onDelete={onStageFormDelete}
                        />
                    }
                    {!isOnEditing.project && !isOnEditing.stage &&
                        <div>
                            <Button text="Сохранить проект" onClick={onSaveProjectClick} />
                            <Button text="Загрузить проект" onClick={toggleUploadIsEditing} />
                        </div>
                    }
                    {isOnEditing.upload && <UploadFileForm onSubmit={onUploadProjectClick}/>}
                </div>
            </StagesProvider>
        </ProjectProvider>
    );
}

export default App;
