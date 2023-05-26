import React, {ChangeEventHandler, FormEvent, useEffect, useState} from 'react';
import './App.css';
import {align, Text} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {date, project} from "./app/types/types";
import {CreateProjectForm} from "./app/components/ui/CreateProjectForm/CreateProjectForm";

//==================Данные для теста==================

const dates: date[] = [
    {
        dateStr: "2023-05-25",
        dateName: "first"
    },
    {
        dateStr: "2023-05-29",
        dateName: "second"
    },
]
//===========================================

function App() {
    const [projectData, setProjectData] = useState<project>({
        startDate: "",
        endDate: "",
        projectName: ""
    })
    
    useEffect(() => {
        const strData = localStorage.getItem("projectData")
        if (strData) {
            setProjectData(JSON.parse(strData))
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
        localStorage.setItem("projectData", JSON.stringify(projectData))
    }

    return (
        <div className="App">
            <Text
                title="Timelapse"
                content="Let's start our timelapse!"
                align={align.CENTER}
            />
            <CreateProjectForm
                changeInputHandler={changeInputHandler}
                submitFormHandler={submitFormHandler}
                projectData={projectData}
            />
            <Timelapse projectData={projectData} stages={dates}/>
        </div>
    );
}

export default App;
