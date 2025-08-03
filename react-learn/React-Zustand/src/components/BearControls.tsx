import { Button, Space } from 'antd'
import useBearStore from "../store/useBearStore";
export default function BearControls() {
    const bears = useBearStore((state) => (state.bears));
    const increaseBears = useBearStore((state) => (state.increaseBears));
    const removeAllBears = useBearStore((state) => (state.removeAllBears));

    return (
        <Space size="large">
            <Button type="primary" onClick={increaseBears}>加一</Button>
            {bears > 0 && <Button type="primary" danger onClick={removeAllBears}>清除所有</Button>}
        </Space>
    )
}