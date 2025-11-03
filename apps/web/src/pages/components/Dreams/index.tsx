// TODO 梦境组件
import type { FC } from "react";
import title from "@/assets/Dreams/title.jpg"


const Dreams: FC = () => {
    return (
        <main className="flex flex-col items-start w-full">
            <div className="border-l-4 border-l-bl pl-2 mb-2.5">
                <h1 className="font-ZCOOL text-xl">梦境</h1>
                <div className="font-YWZCOOL">Dreams</div>
            </div>
            <div className="group relative mb-3 h-[80px] w-full cursor-pointer overflow-hidden rounded-l-lg  hover:text-red-100 ">
                {/* 背景层：图片 */}
                <div className="absolute w-full h-full">
                    <div
                        className="h-full w-full transition-all bg-cover bg-center bg-no-repeat relative"
                        style={{
                            backgroundImage: `url(${title})`,
                        }}
                    >
                        {/* 白色渐变叠加层 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/100"></div>

                        {/* 可选：额外混合层（保留你之前的） */}
                        <div className="h-full w-full opacity-20 mix-blend-color-dodge"></div>
                    </div>
                </div>

                {/* 内容层 */}
                <div className="relative z-10 flex h-full w-full flex-col items-end justify-between p-2">
                    <div className=" bg-red-500 px-2 py-0.5 font-bold text-sm">
                        55 °C
                    </div>
                    <div className="mb-[6.5px] flex flex-col items-end text-right">
                        <div className="mb-1 text-lg leading-tight md:text-base">
                            时间之河与本我的航程
                        </div>
                        <div className="text-sm group-hover:text-inherit md:text-xs ">
                            2025-06-08 15:26:29
                        </div>
                    </div>
                </div>
            </div>
            <ul className="w-full">
                <li className="flex justify-between w-full mt-3 pb-3 border-b-2 border-transparent hover:border-b-pink-500 transition-colors duration-300 items-center cursor-pointer">
                    <div className="flex-1 md:text-[13px] text-[10px]">
                        <span className="text-dateCl mr-4 font-Audiowide">131℃</span>
                        <span className="text-dateCl mr-4">/</span>
                        <span className="font-KuaiLe">吃火锅</span>
                    </div>
                    <div className="text-dateCl md:text-[13px] text-[10px] font-Audiowide">2025-06-15 1:50</div>
                </li>
                <li className="flex justify-between w-full mt-3 pb-3 border-b-2 border-transparent hover:border-b-pink-500 transition-colors duration-300 items-center cursor-pointer">
                    <div className="flex-1 md:text-[13px] text-[10px]">
                        <span className="text-dateCl mr-4 font-Audiowide">131℃</span>
                        <span className="text-dateCl mr-4">/</span>
                        <span className="font-KuaiLe">吃火锅</span>
                    </div>
                    <div className="text-dateCl md:text-[13px] text-[10px] font-Audiowide">2025-06-15 1:50</div>
                </li>
                <li className="flex justify-between w-full mt-3 pb-3 border-b-2 border-transparent hover:border-b-pink-500 transition-colors duration-300 items-center cursor-pointer">
                    <div className="flex-1 md:text-[13px] text-[10px]">
                        <span className="text-dateCl mr-4 font-Audiowide">131℃</span>
                        <span className="text-dateCl mr-4">/</span>
                        <span className="font-KuaiLe">吃火锅</span>
                    </div>
                    <div className="text-dateCl md:text-[13px] text-[10px] font-Audiowide">2025-06-15 1:50</div>
                </li>
                <li className="flex justify-between w-full mt-3 pb-3 border-b-2 border-transparent hover:border-b-pink-500 transition-colors duration-300 items-center cursor-pointer">
                    <div className="flex-1 md:text-[13px] text-[10px]">
                        <span className="text-dateCl mr-4 font-Audiowide">131℃</span>
                        <span className="text-dateCl mr-4">/</span>
                        <span className="font-KuaiLe">吃火锅</span>
                    </div>
                    <div className="text-dateCl md:text-[13px] text-[10px] font-Audiowide">2025-06-15 1:50</div>
                </li>
            </ul>
        </main>
    )
}

export default Dreams;