import { useEffect, useState, useEffectEvent, type FC } from "react";

// TODO useEffectEvent 使用案列
const Test: FC = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const demo = useEffectEvent(() => {
        console.log("useEffectEvent执行了a=", a)
        console.log("useEffectEvent执行了b=", a)
    })
    // const demo = () => {
    //     console.log("useEffectEvent执行了a=", a)
    //     console.log("useEffectEvent执行了b=", b)
    // }
    useEffect(() => {
        demo()
        console.log("useEffect执行了a=", a)
        console.log("useEffect执行了b=", b)
    }, [a])
    return (
        <>
            <h1>A:{a}</h1>
            <h1>B:{b}</h1>
            <button onClick={() => setA(a + 1)}>测试</button>
            <button onClick={() => setB(b + 1)}>测试</button>
        </>
    )
}

export default Test;