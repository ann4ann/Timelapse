import {memo} from "react";
import cls from "./TimelapseBlock.module.css"
import {createRandomColor} from "../../../../utils/createRandomColor";
import {projectStage} from "../../../../types/types";
import {finalFormatDate} from "../../../../utils/timilapseDatesActions";

interface TimelapseBlockProps {
    blockDate: projectStage,
    onStageBlockClick: (data: projectStage) => void
}

export const TimelapseBlock = memo((props: TimelapseBlockProps) => {
    const {
        blockDate,
        onStageBlockClick
    } = props

    return (
        <div
            className={cls.timelapseBlock}
            key={blockDate.dateName + blockDate.dateStr}
            onClick={() => {
                onStageBlockClick(blockDate)
            }}
            style={{
                width: `${blockDate.absolutePercent}%`,
                backgroundColor: createRandomColor(),
                textAlign: "center"
        }}>
            <p className={cls.name}>{blockDate.dateName}</p>
            <p className={cls.date}>{finalFormatDate(blockDate.dateStr)}</p>
            <p className={cls.percent}>{blockDate.percent + "%"}</p>
        </div>
    )
})