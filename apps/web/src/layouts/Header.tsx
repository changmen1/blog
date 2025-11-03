/*
 * Author: zxl
 * Created on Thu Jul 10 2025
 * 个人博客 - 1.0
 * Copyright (c) 2025 Dv
 */

import Nav from "@/components/bits/Nav";
import TrueFocus from "@/components/bits/TrueFocus";
import { type FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
    const navigate = useNavigate();

    const handlePath = (path: string) => {
        navigate(path, {
            replace: true,
        });
    }
    return (
        <>
            {/* 顶部导航栏固定 */}
            <header className="fixed top-0 right-0 left-0 z-22 h-12 border-b bg-customGray px-3 py-2">
                <div className="nb:w-[90vw] hd:w-[70vw] ml-auto mr-auto md:pl-18 md:pr-18 fixed top-0 right-0 left-0 z-22 flex h-12 items-center justify-between border-b bg-customGray px-3 py-2">
                    <TrueFocus
                        sentence="Zxl Blog"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="pink"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                    {/* 菜单栏 */}
                    <Nav />
                </div>
            </header>
            {/* 标题栏固定在导航下方 */}
            <div className="bg-headerColorF w-full hidden md:flex fixed top-12 right-0 left-0 z-20 h-20">
                <div className="nb:w-[90vw] hd:w-[70vw] ml-auto mr-auto pl-18 pr-18 hidden md:flex fixed top-12 right-0 left-0 z-20 h-20 items-center bg-headerColorF justify-between border-b px-3 py-2">
                    <div className="flex items-center cursor-pointer hover:text-pink-600 text-center" onClick={() => handlePath('/')}>
                        <div className='bg-local-chuyu w-[120px] h-[80px]' />
                        <div>
                            <h1 className="font-ZCOOL text-2xl">初遇</h1>
                            <div className="font-YWZCOOL">First Encounter</div>
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-pink-600 text-center" onClick={() => handlePath('/article')}>
                        <div className='bg-local-wenzhang w-[120px] h-[80px]' />
                        <div>
                            <h1 className="font-ZCOOL text-2xl">文章</h1>
                            <div className="font-YWZCOOL">article</div>
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-pink-600 text-center" onClick={() => handlePath('/landscape')}>
                        <div className='bg-local-fengjing w-[120px] h-[80px]' />
                        <div>
                            <h1 className="font-ZCOOL text-2xl">风景</h1>
                            <div className="font-YWZCOOL">landscape</div>
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-pink-600 text-center" onClick={() => handlePath('/gourmetFood')}>
                        <div className='bg-local-meishi w-[120px] h-[80px]' />
                        <div>
                            <h1 className="font-ZCOOL text-2xl">美食</h1>
                            <div className="font-YWZCOOL">gourmet food</div>
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-pink-600 text-center" onClick={() => window.open("/h5/graduationProject", "_blank")}>
                        <div className='bg-local-mengjing w-[120px] h-[80px]' />
                        <div>
                            <h1 className="font-ZCOOL text-2xl">在线活动</h1>
                            <div className="font-YWZCOOL">Online Activities</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
