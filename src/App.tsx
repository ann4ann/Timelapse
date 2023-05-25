import React from 'react';
import './App.css';
import {Button} from "./app/components/common/Button/Button";
import {align, Text} from "./app/components/common/Text/Text";
import {Timelapse} from "./app/components/ui/Timelapse/Timelapse";
import {InputDate} from "./app/components/common/Input/InputDate/InputDate";

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
        <Timelapse/>
    </div>
  );
}

export default App;
