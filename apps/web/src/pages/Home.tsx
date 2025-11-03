import type { FC } from "react";
import Article from "./components/article";
import Dreams from "./components/Dreams";
import Recommend from "./components/recommend";
import bg from "@/assets/bg/gugong2.jpg"
// import bg from "@/assets/mp4/周星驰功夫.mp4"
import { china, chinaUSA } from "@/assets/Quotes";
import Timeline from "./components/Timeline";
import { Outlet } from "react-router-dom";
import SplitText from "@/components/bits/SplitText"
import WaveHeader from "@/components/demo/WaveHeader";
// import SvgTimeline from "@/components/SvgTimeline";

const Home: FC = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    // const data = [
    //     { time: "2025-07-08 14:20", label: "起飞" },
    //     { time: "2025-07-08 14:22", label: "转弯" },
    //     { time: "2025-07-08 14:25", label: "发现问题" },
    //     { time: "2025-07-08 14:27", label: "飞行" },
    //     { time: "2025-07-08 14:29", label: "飞行" },
    //     { time: "2025-07-08 14:31", label: "飞行" },
    //     { time: "2025-07-08 14:33", label: "转弯" },
    //     { time: "2025-07-08 14:35", label: "飞行" },
    //     { time: "2025-07-08 14:37", label: "降落" },
    //     { time: "2025-07-08 14:39", label: "降落" },
    //     { time: "2025-07-08 14:41", label: "返航" },
    // ];
    return (
        <div className="select-none">
            <Outlet />
            {/* 背景 */}
            <div className="relative h-[100vh] md:h-[70vh]">
                <div className="fixed h-[100vh] w-full md:h-[70vh]">
                    {/* 图片背景 */}
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-200"
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    ></div>
                    {/* 视频背景 */}
                    {/* <div className="relative w-full h-full">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={bg}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div> */}
                    {/* 文字描述层 */}
                    <div className="absolute top-40 left-8 text-white p-4 rounded-lg max-w-[90%] md:max-w-[60%]">
                        <SplitText
                            text={china}
                            className="text-xl font-semibold text-center"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                        <br />
                        <SplitText
                            text={chinaUSA}
                            className="text-xl font-semibold text-center"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                </div>
            </div>
            {/* 文章 */}
            <div className="relative bg-main w-full">
                <WaveHeader />
                <div className="relative bg-main p-5 md:flex md:justify-between gap-4 pb-10 pl-18 pr-18 nb:w-[90vw] hd:w-[70vw] ml-auto mr-auto">
                    <div className="flex-1 basis-1/3">
                        <Article />
                    </div>
                    <div className="flex-1 basis-1/3">
                        <Dreams />
                    </div>
                    <div className="flex-1 basis-1/3">
                        <Recommend />
                    </div>
                </div>
            </div>
            {/* TODO 暂定时间线 后续需要修改*/}
            <div className="relative bg-Timeline w-full">
                <div className="nb:w-[90vw] hd:w-[70vw] ml-auto mr-auto pb-10 pt-10 pl-18 pr-18">
                    {/* <SvgTimeline data={data} maxPerRow={7} /> */}
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default Home;
