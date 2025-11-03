import Aurora from "@/components/bits/Aurora";
import useHisStore from "@/store";
import { useEffect, useState, type FC } from "react";
import logo from "@/assets/article/hua2.jpg"
import author from "@/assets/author/author3.jpg"

const Blog: FC = () => {
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
        <div className="md:text-[16px] text-[10px]">
            <Aurora
                colorStops={colorStops}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <div className="md:w-[1200px] md:mx-auto">
                <div className="text-center mb-5">关于我</div>
                <div className="flex md:m-20 m-2.5">
                    <div>
                        <img src={author} alt="" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover rounded-full" />
                    </div>
                    <ul className="md:ml-50 ml-2.5 leading-5 md:leading-10">
                        <li>&emsp;&emsp;兰州理工大学本科毕业，毕业从事前端开发至今</li>
                        <li>&emsp;&emsp;最老的00后，喜欢美剧，打篮球，打乒乓球，打游戏，看日落，看美女</li>
                        <li>&emsp;&emsp;工作主要使用React.js平时自己也折腾一下全栈开发，做出完整的项目</li>
                        <li>&emsp;&emsp;比较喜欢的老师，前端张鑫旭，后端翁恺。未完待续...</li>
                    </ul>
                </div>
                <div className="text-center">关于本站</div>
                <div className="md:m-20 m-2.5 leading-5 md:leading-10">
                    <div>
                        &emsp;&emsp;本站当初建立，主要原因是因为工作中都是CRUD，相信有一部分的前后端开发都是这样，所以想在空闲的时间自己开发一个网站，
                        可以使用新学的技术，毕竟作为程序员，应该有一个属于自己的网站才对。
                    </div>
                    <div>
                        &emsp;&emsp;博客界面如果你觉得丑，请保留~~~，哈哈哈，改不改是需要看心情的，如果有严重BUG欢迎到我的github去留言，看到的话我会考虑的~~~~~~
                    </div>
                </div>
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
                <img src={logo} alt="必胜" className="object-cover text-center mx-auto" />
            </div>
        </div>
    )
}

export default Blog;