import { useEffect, type FC } from "react";
import QQFarm from "./QQFarm";

const Test: FC = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            // 37.3598283 -121.9814354
            console.log("🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕", pos.coords.latitude, pos.coords.longitude);
        });
    }, [])
    return (
        <>
            <progress value="70" max="100"></progress>
            <details>
                <summary>游戏列表</summary>
                <p>QQ农场</p>
            </details>
            <QQFarm />
        </>
    )
}

export default Test;