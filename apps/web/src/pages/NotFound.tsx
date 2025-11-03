import Aurora from "@/components/bits/Aurora";
import Error from "@/components/bits/Error";
import useHisStore from "@/store";
import { useEffect, useState, type FC } from "react";

const NotFound: FC = () => {
    const [colorStops, setColorStops] = useState<string[]>([]);
    const theme = useHisStore((state) => state.theme)

    // TODO 这里需要监听切换主题的时候来重新动态获取主题变量
    useEffect(() => {
        const root = getComputedStyle(document.documentElement);
        const color1 = root.getPropertyValue("--animatedBg-1").trim();
        const color2 = root.getPropertyValue("--animatedBg-2").trim();
        const color3 = root.getPropertyValue("--animatedBg-3").trim();
        setColorStops([color1, color2, color3]);
    }, [theme]);
    return (
        <div className="pt-5">
            <Aurora
                colorStops={colorStops}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="flex items-center justify-center">
                <Error
                    baseIntensity={0.2}
                >
                    404啦请联系小主
                </Error>
            </div>
        </div>
    )
}

export default NotFound;