import {date} from "../../types/types";
import {FC, ReactNode, useMemo} from "react";
import {StagesContext} from "./StagesContext";

interface ProjectProviderProps {
    initialDates?: date[] | [];
    children: ReactNode;
}

const StagesProvider: FC<ProjectProviderProps> = (props) => {
    const {
        initialDates,
        children,
    } = props;

    const updatedProjectData = useMemo(() => {
        return initialDates as date[] || [];
    }, [initialDates])

    return (
        <StagesContext.Provider value={updatedProjectData}>
            {children}
        </StagesContext.Provider>
    )
}

export default StagesProvider;