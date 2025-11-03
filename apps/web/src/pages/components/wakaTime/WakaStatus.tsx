import { useEffect, useState } from 'react';
import useEditor from '@/hooks/use-editor';

// 定义语言统计接口
interface LanguageStat {
    name: string;
    total_seconds: number;
    percent: number;
}

// 定义编辑器统计接口
interface EditorStat {
    name: string;
    total_seconds: number;
    percent: number;
}

export default function WakaLanguageStats() {
    const getEditorIcon = useEditor();
    const [languages, setLanguages] = useState<LanguageStat[]>([]);
    const [editors, setEditors] = useState<EditorStat[]>([]);

    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} 分钟`;
    }

    const handleFetchWakaSummary = async () => {
        try {
            const today = new Date().toISOString().slice(0, 10);
            const res = await fetch(`/wakatime/users/current/summaries?start=${today}&end=${today}`);
            const json = await res.json();
            // console.log(">>>json", json)
            const editorStats: EditorStat[] = json.data?.[0]?.editors || [];
            setEditors(editorStats);
            const languageStats: LanguageStat[] = json.data?.[0]?.languages || [];
            setLanguages(languageStats);
        } catch (err) {
            console.error('小主请求错误了请查看apikey', err);
        } finally {
            console.error('小主接口错误了');
        }
    }

    useEffect(() => {
        handleFetchWakaSummary()
    }, []);

    return (
        <div className="text-sm truncate">
            {languages.length > 0 ? (
                <div className='flex md:text-[8px]  text-[5px]'>
                    <div className='flex mr-10 items-center'>
                        <p className="font-medium text-EditorTl">今日开发环境:</p>
                        <ul className="list-disc ml-4 flex">
                            {editors.map((editor) => {
                                const icon = getEditorIcon(editor.name);
                                return (
                                    <li key={editor.name} className="flex items-center gap-1">
                                        {icon ? (
                                            <img src={icon} alt={editor.name} className="w-4 h-4" />
                                        ) : (
                                            <span>{editor.name}</span>
                                        )}
                                        <span className='text-EditorCl mr-5'>
                                            {(editor.total_seconds / 60).toFixed(1)} 分钟 ({editor.percent.toFixed(1)}%)
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <p className="font-medium text-EditorTl">今日语言使用分布:</p>
                        <ul className="list-disc ml-4 flex">
                            {languages.map((language) => (
                                <li key={language.name} className='text-EditorCl mr-5'>
                                    {language.name}: {formatTime(language.total_seconds)} ({language.percent.toFixed(1)}%)
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className='text-center'>
                    <p className="font-DotGothic16 text-EditorTl">小主今天还没有编码数据</p>
                    <p className="font-Pixelify text-EditorTl">There is no coding data today.</p>
                </div>
            )}
        </div>
    );
}

