import useBearStore from "../store/useBearStore";

export default function BearCounter(){
    const bears = useBearStore((state) => (state.bears))
    return <h1>这里有 {bears} 只狗熊 !</h1>

}