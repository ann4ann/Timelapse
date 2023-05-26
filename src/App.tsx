import React, {ChangeEventHandler, useState} from 'react';
import './App.css';
import {Button} from "./app/components/common/Button/Button";
import {align, Text} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {InputDate} from "./app/components/common/Input/InputDate/InputDate";
import {date, project} from "./app/types/types";

//==================Данные для теста==================

// const testProject: project = {
//     startDate: "2023-05-10",
//     endDate: "2023-06-30",
//     projectName: "TestProj"
// }

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

    const changeInputHandler:ChangeEventHandler<HTMLInputElement> = ({target}) => {
        console.log(target)
        setProjectData((prevstate) => {
            return ({
                ...prevstate,
                [target.name]: target.value
            })
        })
    }

    return (
        <div className="App">
            <Text
                title="Timelapse"
                content="Let's start our timelapse!"
                align={align.CENTER}
            />
            <InputDate
                label="Введите имя проекта:"
                onChange={changeInputHandler}
                value={projectData.projectName}
                name={"projectName"}
                type={"text"}
            />
            <InputDate
                label="Выберите начало проекта:"
                onChange={changeInputHandler}
                value={projectData.startDate}
                name={"startDate"}
                type={"date"}
            />
            <InputDate
                label="Выберите окончание проекта:"
                onChange={changeInputHandler}
                value={projectData.endDate}
                name={"endDate"}
                type={"date"}
            />
            <Button text="Let's timelapse!"/>
            <Timelapse projectData={projectData} stages={dates}/>
        </div>
    );
}

export default App;
