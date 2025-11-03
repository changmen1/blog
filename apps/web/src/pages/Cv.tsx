import Aurora from "@/components/bits/Aurora";
import useHisStore from "@/store";
import { useEffect, useState, type FC } from "react";
import author from "@/assets/author/author3.jpg"

const Cv: FC = () => {
    const [colorStops, setColorStops] = useState<string[]>([]);
    const theme = useHisStore((state) => state.theme)

    // const [htmlContent, setHtmlContent] = useState('');

    // useEffect(() => {
    //     // TODO 加载ASCII文件
    //     fetch('/src/pages/ASCII.txt')
    //         .then((res) => res.text())
    //         .then((text) => {
    //             setHtmlContent(text);
    //         });
    // }, []);

    // TODO 这里需要监听切换主题的时候来重新动态获取主题变量
    useEffect(() => {
        const root = getComputedStyle(document.documentElement);
        const color1 = root.getPropertyValue("--animatedBg-1").trim();
        const color2 = root.getPropertyValue("--animatedBg-2").trim();
        const color3 = root.getPropertyValue("--animatedBg-3").trim();
        setColorStops([color1, color2, color3]);
    }, [theme]);
    return (
        <div className="md:text-[16px] text-[10px]">
            <Aurora
                colorStops={colorStops}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="md:w-[1200px] md:mx-auto">
                <div className="text-center mb-5">个人简历</div>
                <div className="flex md:m-20 m-2.5">
                    <div>
                        <img src={author} alt="" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover rounded-full" />
                    </div>
                    <ul className="md:ml-50 ml-2.5 leading-5 md:leading-10">
                        <li>&emsp;&emsp;兰州理工大学本科毕业，毕业从事前端开发至今</li>
                        {/* <li></li> */}
                        <li>&emsp;&emsp;2024-01 宁波戴维医疗器械股份有限公司 / 前端开发工程师</li>
                        <li>&emsp;&emsp;2022-10 兰州新昊源电子信息科技有限公司 / 前端开发工程师</li>
                        <li>&emsp;&emsp;2021-01 上海逻讯信息科技有限公司-兰州分部[在校兼职] / 全栈开发工程师</li>
                        <li>&emsp;&emsp;微信 zxl1907395787</li>
                        <li>&emsp;&emsp;电话 17339811909 || 18506550823</li>
                        <li>&emsp;&emsp;邮箱 zxl1907395787@163.com || zhangmen099@gmail.com</li>
                        <li>&emsp;&emsp;QQ 1907395787 || 82927850</li>
                    </ul>
                </div>
                <div>&emsp;&emsp;非常喜欢翁凯老师的这段话，学计算机，一定要有一个非常强大的心理状态，计算机的所有东西都是人做出来的，别人能想出来的，我也一定能想出来，在计算机里头没有任何黑魔法，所有的东西，只不过是我现在还不知道，总有一天，我会把所有的细节，所有的内部的东西全都搞明白的。</div>
                <div className="text-center">本站所用技术栈</div>
                <div className="flex md:m-20 m-2.5">
                    <ul className="md:ml-50 ml-2.5 leading-5 md:leading-10">
                        <li>前端：React shadcn</li>
                        <li>管理端：React Antd</li>
                        <li>服务端：SringBoot</li>
                        <li>数据库：MySql</li>
                        <li>本站源码Github：
                            <a className="text-blue-700" href="https://github.com/changmen1/zxl-blog" target="_blank" rel="noopener noreferrer">https://github.com/changmen1/zxl-blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cv;