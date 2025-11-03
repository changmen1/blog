// TODO 文章组件
import { useEffect, useState, type FC } from "react";
import title from "@/assets/article/title.jpg"
import { useNavigate } from "react-router-dom";
import { getBlogList } from "@/common/article/service";
import dayjs from "dayjs";


const Article: FC = () => {
    const navigate = useNavigate();
    const [datas, setDatas] = useState<Article.IArticle[]>()
    const Init = async () => {
        const { data } = await getBlogList({
            pageNum: 1,
            pageSize: 4
        })
        setDatas(data.rows)
    }
    useEffect(() => {
        Init()
    }, [])
    return (
        <main className="flex flex-col items-start w-full">
            <div className="border-l-4 border-l-bl pl-2 mb-2.5">
                <h1 className="font-ZCOOL text-xl">最新文章</h1>
                <div className="font-YWZCOOL">Latest articles</div>
            </div>
            <div className="group relative mb-3 h-[80px] w-full cursor-pointer overflow-hidden rounded-l-lg hover:text-red-100 ">
                {/* 背景层：图片 */}
                <div className="absolute w-full h-full">
                    <div
                        className="h-full w-full transition-all bg-cover bg-center bg-no-repeat relative"
                        style={{
                            backgroundImage: `url(${title})`,
                        }}
                    >
                        {/* 白色渐变叠加层 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/50"></div>
                    </div>
                </div>

                {/* 内容层 */}
                <div className="relative z-10 flex h-full w-full flex-col items-end justify-between p-2">
                    <div className=" bg-red-500 px-2 py-0.5 font-bold text-sm">
                        {datas?.[0]?.author}
                    </div>
                    <div className="mb-[6.5px] flex flex-col items-end text-right" onClick={() => {
                        navigate('/article/details', { state: datas?.[0]?.id });
                    }}>
                        <div className="mb-1 text-lg leading-tight md:text-base">
                            {datas?.[0]?.title}
                        </div>
                        <div className="text-sm group-hover:text-inherit md:text-xs ">
                            {datas?.[0]?.updatedAt}
                        </div>
                    </div>
                </div>
            </div>
            <ul className="w-full">
                {
                    datas?.map(o => (
                        <li
                            key={o.id}
                            className="flex justify-between w-full mt-3 pb-3 border-b-2 border-transparent hover:border-b-pink-500 transition-colors duration-300 items-center cursor-pointer"
                            onClick={() => {
                                navigate('/article/details', { state: o?.id, });
                            }}
                        >
                            <div className="flex-1 md:text-[13px] text-[10px]">
                                <span className="text-dateCl mr-4 font-Audiowide">{o.author}</span>
                                <span className="text-dateCl mr-4">/</span>
                                <span className="font-KuaiLe">{o.title}</span>
                            </div>
                            <div className="text-dateCl md:text-[13px] text-[10px] font-Audiowide">{dayjs(o.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default Article;