import {useCallback, useState} from "react";

export const useToggle = (initialState: boolean) => {
    const [isToggled, setIsToggled] = useState(initialState);
    const toggle: () => void = useCallback(() => setIsToggled(!isToggled),
        [isToggled])
    return [isToggled, toggle ]
}
