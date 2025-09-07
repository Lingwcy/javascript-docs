import React, { useState } from "react";
import { useForm, type SubmitHandler } from 'react-hook-form'
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
}

export default function HookForm(): React.JSX.Element {
    const {
        register,
        formState: { errors },
        handleSubmit 
    } = useForm<FormData>()

    const renderCount = React.useRef(0);
    renderCount.current += 1;

    console.log("重渲染了");

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>React Hook Form</h2>

            <div style={{ outline: `${renderCount.current % 2 ? '2px solid red' : '2px solid blue'}` }}>
                {renderCount.current}
                <label>
                    First Name:
                    <input
                        {...register("firstName", {required: true})}
                        
                    />
                </label>
            </div>
            {errors.firstName && <span>This field is required</span>}

            <br />
            <label>
                Last Name:
                <input
                    {...register("lastName")}
                />
            </label>

            <br />
            <label>
                Email:
                <input
                    {...register("email")}
                />
            </label>


            <br />
            <label>
                Age:
                <input
                    {...register("age")}
                />
            </label>


            <br />
            <button type="submit">提交</button>
        </form>
    );
}