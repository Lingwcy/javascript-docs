import { createContext, useContext} from "react";
import { ItemTest } from "./FormItemTest";

// 该上下文对象本身不包含任何信息
// 调用 useContext(SomeContext) 获取上方距离它最近的上下文 provider 的 value。
const TestContext = createContext('WTF');

export function ContextTestEnv () {
    return (
        <TestContext value={'WTF'}>
            <ItemTest>
                <EndPoint />
            </ItemTest>
        </TestContext>
    )
}

export function EndPoint(){
    const value = useContext(TestContext);
    return <div>{value}</div>
}