import {memo} from "react";
// import cls from "./Input.module.css"
// import {FieldValues, UseFormWatch} from "react-hook-form";
// import {UseFormRegister} from "react-hook-form/dist/types/form";
// import {inputType, Text} from "../../Text/Text";
// import {FormValues} from "../../Form/Form";
//
// export type InputType = "text" | "date" | "password";
//
// export interface InputProps {
//     label?: string,
//     // type нужно обозначить гдето снаружи для полей
//     fieldName: "inputTest",
//     type?: InputType,
//     // registerOptions?: FieldValues,
//     register: UseFormRegister<FormValues>,
//     // watch: UseFormWatch<FormValues>,
//     errors?: FieldValues,
//     isRequired: boolean,
//     maxLength: number,
//     minimLength: number,
// }
//
// export const InputTest = memo((props: InputProps) => {
//     const {
//         label = "",
//         fieldName,
//         type = "text",
//         // registerOptions,
//         register,
//         // watch,
//         errors,
//         isRequired,
//         maxLength,
//         minimLength
//     } = props
//
//     // отслеживает input с {...register(name
//     // console.log(watch(name) + " input")
//
//
//     return (
//         <div className={cls.inputTest}>
//             <label htmlFor={fieldName} className={cls.label}>
//                 {label}
//             </label>
//             <div className={cls.inputBlock}>
//                 <input
//                     className={cls.input}
//                     type={type}
//                     {...register(fieldName, {
//                         required: isRequired,
//                         "message": "This field is required"
//                     })}
//                 />
//                 {/*{errors && <Text content="This field is required" type={inputType.ERROR} />}*/}
//             </div>
//         </div>
//     )
// })