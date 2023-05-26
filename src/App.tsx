import React from 'react';
import './App.css';
import {Button} from "./app/components/common/Button/Button";
import {align, Text} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {InputDate} from "./app/components/common/Input/InputDate/InputDate";
import {date, project} from "./app/types/types";

//==================Данные для теста==================

const testProject: project = {
    startDate: "2023-05-10",
    endDate: "2023-06-30",
    name: "TestProj"
}

const dates: date[] = [
    {
        dateStr: "2023-05-25",
        name: "first"
    },
    {
        dateStr: "2023-05-29",
        name: "second"
    },
]

//===========================================

function App() {
  return (
    <div className="App">
        <Text
            title="Timelapse"
            content="Let's start our timelapse!"
            align={align.CENTER}
        />
        <Button text="Let's timelapse!"/>
        <InputDate/>
        <Timelapse projectData={testProject} stages={dates}/>
    </div>
  );
}

export default App;
