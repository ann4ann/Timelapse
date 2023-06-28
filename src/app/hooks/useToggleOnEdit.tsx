import {useCallback, useState} from "react";

interface onEdit {
    project: boolean,
    stage: boolean,
    upload: boolean,
}
type editingNameType = "project" | "stage" | "upload"

export const useToggleOnEdit = (initialState: onEdit, editingName: editingNameType) => {
    const [isToggled, setIsToggled] = useState(initialState);
    const toggle = useCallback(() => {
        setIsToggled(prevState => ({
            ...prevState,
            [editingName]: !prevState[editingName]
        }))
    },
    [isToggled])
    return [isToggled, toggle]
}
