import React, {ChangeEventHandler, FormEvent, useEffect, useState} from 'react';
import './App.css';
import {align, Text} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {date, project} from "./app/types/types";
import {CreateProjectForm} from "./app/components/ui/CreateProjectForm/CreateProjectForm";
import {ProjectInfo} from "./app/components/ui/ProjectInfo/ProjectInfo";

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
    const [projectExist, setProjectExist] = useState<boolean>(false)

    const [projectData, setProjectData] = useState<project>({
        startDate: "",
        endDate: "",
        projectName: "",
    })
    
    useEffect(() => {
        const strData = localStorage.getItem("projectData")
        if (strData) {
            setProjectData(JSON.parse(strData))
            setProjectExist(true)
        }
    }, [])

    const changeInputHandler: ChangeEventHandler<HTMLInputElement> = ({target}) => {
        setProjectData((prevState) => {
            return ({
                ...prevState,
                [target.name]: target.value
            })
        })
    }
    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            projectData.projectName
            && projectData.startDate
            && projectData.endDate
        ) {
            localStorage.setItem("projectData", JSON.stringify(projectData))
            setProjectExist(true)
        }
    }

    const toggleProjectExist = () => {
        setProjectExist(!projectExist)
    }

    return (
        <div className="App">
            <Text
                title="Timelapse"
                content="Let's start our timelapse!"
                align={align.CENTER}
            />
            {!projectExist && (<CreateProjectForm
                changeInputHandler={changeInputHandler}
                submitFormHandler={submitFormHandler}
                projectData={projectData}

            />)}
            {projectExist && (<>
                <ProjectInfo
                    onClick={toggleProjectExist}
                    projectData={projectData}
                />
                <Timelapse
                    projectData={projectData}
                    stages={dates}
                />
            </>)}
        </div>
    );
}

export default App;
