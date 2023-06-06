import {memo} from "react";
import cls from "./TimelapseBlock.module.css"
import {createRandomColor} from "../../../../utils/createRandomColor";
import {date} from "../../../../types/types";
import {formatDateString} from "../../../../utils/timilapseDatesActions";

interface TimelapseBlockProps {
    blockDate: date,
}

export const TimelapseBlock = memo((props: TimelapseBlockProps) => {
    const {
        blockDate
    } = props

    return (
        <div
            className={cls.timelapseBlock}
            key={blockDate.dateName + blockDate.dateStr}
            style={{
                width: `${blockDate.absolutePercent}%`,
                backgroundColor: createRandomColor(),
                textAlign: "center"
        }}>
            <p className={cls.name}>{blockDate.dateName}</p>
            <div className={cls.info}>
                <p className={cls.date}>{formatDateString(blockDate.dateStr)}</p>
                <p className={cls.percent}>{blockDate.percent + "%"}</p>
            </div>
        </div>
    )
})