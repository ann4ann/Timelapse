import {memo, ReactNode} from "react";
// import cls from "./Form.module.css"
// import {FieldValues, SubmitHandler, useForm} from "react-hook-form"
// import {Button} from "../Button/Button";
// import {InputDateProps} from "../Input/Input/Input";
// import {InputTest} from "../Input/Input/InputTest";
//
// export type FormValues = {
//     inputTest: string;
// }
//
// interface FormProps {
//     inputs?: InputDateProps,
//     onSubmit: SubmitHandler<FormValues>,
//
// }
//
// export const Form = memo((props: FormProps) => {
//     const {
//         inputs,
//         onSubmit,
//     } = props
//
//     const {register, handleSubmit, watch, formState: {errors}} = useForm<FormValues>()
//     // const onSubmit = (data: any) => console.log(data)
//
//
//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form
//             onSubmit={handleSubmit(onSubmit)}
//             className={cls.form}
//         >
//             {/*/!* include validation with required or other standard HTML validation rules *!/*/}
//             {/*{inputs.map(item => (*/}
//                 <InputTest
//                     name="inputTest"
//                     label="Тестовый инпут"
//                     register={register}
//                     watch={watch}
//                     registerOptions={{required: true}}
//                     errors={errors.inputTest}
//                 />
//
//             <Button
//                 text={"Отправить"}
//                 type="submit"
//             />
//         </form>
//     )
// })