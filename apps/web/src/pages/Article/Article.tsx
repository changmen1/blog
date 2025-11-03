import { getBlogList } from "@/common/article/service";
import Pagination from "@/components/Pagination";
import dayjs from "dayjs";
import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";


const Article: FC = () => {
    const [datas, setDatas] = useState<Article.IArticle[]>()
    const [total, setTotal] = useState<number>()
    const navigate = useNavigate();

    const Init = async () => {
        const { data } = await getBlogList({
            pageNum: 1,
            pageSize: 1
        })
        setDatas(data.rows)
        setTotal(data.total)
    }

    useEffect(() => {
        Init()
    }, [])

    return (
        <div className="md:p-0 p-2.5">
            <div className="md:w-[960px] block ml-auto mr-auto pb-5 mt-10">
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
                                    <span className="text-dateCl mr-4 text-[14px] font-Audiowide">{o.author}</span>
                                    <span className="text-dateCl mr-4">/</span>
                                    <span className="font-KuaiLe text-[18px]">{o.title}</span>
                                </div>
                                <div className="text-dateCl md:text-[13px] text-[10px] font-Audiowide">{dayjs(o.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</div>
                            </li>
                        ))
                    }
                </ul>
                <Pagination totle={total ?? 0} count={10} handleSearch={async (num: number) => {
                    const { data } = await getBlogList({
                        pageNum: num,
                        pageSize: 10
                    })
                    setDatas(data.rows)
                    setTotal(data.total)
                }} />
            </div>
        </div>
    )
}

export default Article;