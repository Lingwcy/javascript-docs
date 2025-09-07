import React, { useState, useCallback, type ChangeEvent, type FocusEvent, type FormEvent } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
}

interface TouchedState {
    [key: string]: boolean;
}

interface ErrorsState {
    [key: string]: string;
}

export default function TraditionalForm(): React.JSX.Element {

    const renderCount = React.useRef(0);
    renderCount.current += 1;
    /* 1. 把所有字段全部塞进一个 state —— 样板代码起点 */
    const [form, setForm] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        age: ""
    });

    console.log("重渲染了");
    /* 2. 自己维护 touched / errors —— 样板代码继续膨胀 */
    const [touched, setTouched] = useState<TouchedState>({});
    const [errors, setErrors] = useState<ErrorsState>({});

    /* 3. 手写验证逻辑 —— 又臭又长 */
    const validate = useCallback((values: FormData): ErrorsState => {
        const newErrors: ErrorsState = {};
        if (!values.firstName) newErrors.firstName = "必填";
        if (!values.lastName) newErrors.lastName = "必填";
        if (!values.email) {
            newErrors.email = "必填";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            newErrors.email = "格式错误";
        }
        if (!values.age) {
            newErrors.age = "必填";
        } else if (isNaN(Number(values.age)) || Number(values.age) < 0) {
            newErrors.age = "必须是非负数";
        }
        return newErrors;
    }, []);

    /* 4. onChange 里 setState —— 每输入一个字符就整表单重渲染 */
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    /* 5. onBlur 时标记 touched + 再次验证 —— 样板代码继续叠加 */
    const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors(validate(form));
    };

    /* 6. 提交时再整体验证一次 —— 还是 setState */
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newErrors = validate(form);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert("提交成功！");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>传统受控组件写法（问题暴露版）</h2>

            {/* 每个字段都要 value + onChange + onBlur + error 提示 */}
            <div style={{ outline: `${renderCount.current % 2 ? '2px solid red' : '2px solid blue'}` }}>
                {renderCount.current}
                <label>
                    First Name:
                    <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </label>
            </div>
            {touched.firstName && errors.firstName && (
                <div style={{ color: "red" }}>{errors.firstName}</div>
            )}
            <br />
            <label>
                Last Name:
                <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            {touched.lastName && errors.lastName && (
                <div style={{ color: "red" }}>{errors.lastName}</div>
            )}

            <br />
            <label>
                Email:
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            {touched.email && errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
            )}

            <br />
            <label>
                Age:
                <input
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            {touched.age && errors.age && (
                <div style={{ color: "red" }}>{errors.age}</div>
            )}

            <br />
            <button type="submit">提交</button>
        </form>
    );
}