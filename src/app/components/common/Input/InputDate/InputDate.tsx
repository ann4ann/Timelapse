import {ChangeEventHandler, memo, useState} from "react";
import cls from "./InputDate.module.css"
import {Button} from "../../Button/Button";
import {Text} from "../../Text/Text";

interface InputDateProps {

}

export const InputDate = memo((props: InputDateProps) => {
    const {} = props
    const [date, setDate] = useState<string>("")

    const helper:ChangeEventHandler<HTMLInputElement> = (e) => {
        setDate(e.currentTarget.value)
    }

    return (
        <div className={cls.inputDate}>
            <label htmlFor="someDate">someDate</label>
            <input onChange={helper} type="date" name="someDate" value={date}/>
            <Text content={date} />
        </div>
    )
})