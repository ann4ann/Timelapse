import React, {useEffect, useState} from 'react';
import './App.css';
import {Text, textAlign} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {date, project} from "./app/types/types";
import {CreateProjectForm} from "./app/components/ui/CreateProjectForm/CreateProjectForm";
import {ProjectInfo} from "./app/components/ui/ProjectInfo/ProjectInfo";
import {Button} from "./app/components/common/Button/Button";

//==================Данные для теста==================

const dates: date[] = [
    {
        dateStr: "2023-05-24",
        dateName: "third"
    },
    {
        dateStr: "2023-05-20",
        dateName: "second"
    },
    {
        dateStr: "2023-05-15",
        dateName: "first"
    },
]
//===========================================


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

    const onSubmit = (data: any) => {
        setProjectData(data)
        localStorage.setItem("projectData", JSON.stringify(data))
        setProjectInEditing(false)
    };

    return (
        <div className="App">
            <Text
                title="Timelapse"
                content="Let's start our timelapse!"
                align={textAlign.CENTER}
            />
            {projectInEditing
                ? <CreateProjectForm
                    onSubmit={onSubmit}
                    projectData={projectData}
                />
                : <>
                    <ProjectInfo
                        onClick={toggleProjectInEditing}
                        projectData={projectData}
                    />
                    <Timelapse
                        projectData={projectData}
                        stages={projectStages}
                    />
                    {stagesInEditing
                        ? <div>
                            ... adding stage
                        </div>
                        : <Button text="add stage" onClick={toggleStagesInEditing} />
                    }
                </>}
        </div>
    );
}

export default App;
