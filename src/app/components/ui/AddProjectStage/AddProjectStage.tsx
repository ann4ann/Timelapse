import {memo} from "react";
import cls from "./AddProjectStage.module.css"

interface AddProjectStageProps {

}

export const AddProjectStage = memo((props: AddProjectStageProps) => {
    const {} = props

    return (
        <div className={cls.addProjectStage}>AddProjectStage</div>
    )
})