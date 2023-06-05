import {Resolver} from "react-hook-form";

export type FormValues = {
    projectName: string,
    startDate: string,
    endDate: string,
    dateStr: string,
    dateName: string,
};

type validation = "required" | "minLength"

export const resolver: Resolver<FormValues> = async (values, options) => {

    function getFieldErr (fieldValue: string, ...validation: validation[]) {
        // REQUIRED
        if (validation.includes("required") && !fieldValue) {
            return (
                {
                    type: "required",
                    message: `This field is required`
                }
            )
        }
        // MIN LENGTH
        if (validation.includes("minLength") && fieldValue.trim().length <= 5) {
            return (
                {
                    type: "minLength",
                    message: `This field must contain 5 or more characters`
                }
            )
        }
    }

    const errors = {
        projectName: "projectName" in values &&
            getFieldErr(values.projectName, "required", "minLength"),
        startDate: "startDate" in values &&
            getFieldErr(values.startDate, "required"),
        endDate: "endDate" in values &&
            getFieldErr(values.endDate, "required"),
        dateStr: "dateStr" in values &&
            getFieldErr(values.dateStr, "required"),
        dateName: "dateName" in values &&
            getFieldErr(values.dateName, "required"),
    }
    const isAnyErrors = Object.values(errors).some(v => v)

    return {
        values: !isAnyErrors ? values : {},
        errors: isAnyErrors ? errors : {}
    };
};