/*
 * Author: zxl
 * Created on Sun Jul 06 2025
 * 个人博客 - 1.0
 * Copyright (c) 2025 Dv
 */

import { type FC } from "react";
import { Button } from "@/components/ui/button"
import _S from "@/assets/shang.svg"
import wx from "@/assets/shang/wx.png"
import al from "@/assets/shang/al.jpg"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

/**
 * 
 * @returns 赏
 */
const Reward: FC = () => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                {/* className="w-8 h-8 animate-heartbeat" */}
                <div className="w-10 h-7 animate-heartbeat cursor-pointer">
                    <img src={_S} alt="China Flag" className="w-10 h-7 mr-2 " />
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="flex">
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>谢谢你的赞助</DrawerTitle>
                            <DrawerDescription>Thank you for your sponsorship.</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <h3>赞助成功会在赞助榜显示您的微信头像/支付宝头像，需要显示留言，可以在赞助的时候加上备注。</h3>
                            <div className="flex justify-between">
                                <img src={wx} alt="China Flag" className="w-44 h-52" />
                                <img src={al} alt="China Flag" className="w-44 h-52" />
                            </div>
                        </div>
                        <DrawerFooter>
                            <Button>再想一下吧</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">下次一定</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                    {/* 赞助者 */}
                    <div className="p-4 pb-0 flex-1">
                        <h2 className="h4 mb-3">
                            <a data-view-component="true" className="Link--primary no-underline Link d-flex flex-items-center">
                                赞助者
                                <span title="335" data-view-component="true" className="ml-1">335</span></a></h2>
                        <ul className="flex flex-wrap">
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/5153846?s=64&amp;v=4" alt="@dwelle" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/in/29110?s=64&amp;v=4" alt="@dependabot[bot]" height="32" width="32" data-view-component="true" className="avatar" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/11256141?s=64&amp;v=4" alt="@ad1992" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/125676?s=64&amp;v=4" alt="@lipis" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/in/2141?s=64&amp;v=4" alt="@dependabot-preview[bot]" height="32" width="32" data-view-component="true" className="avatar" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/197597?s=64&amp;v=4" alt="@vjeux" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/14358394?s=64&amp;v=4" alt="@zsviczian" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/14922478?s=64&amp;v=4" alt="@mtolmacs" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/77840495?s=64&amp;v=4" alt="@excalibot" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/47294779?s=64&amp;v=4" alt="@ryan-di" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/20387666?s=64&amp;v=4" alt="@Mrazator" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/145676?s=64&amp;v=4" alt="@tomayac" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/23306911?s=64&amp;v=4" alt="@Fausto95" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                            <li className="mb-2 mr-2">
                                <img src="https://avatars.githubusercontent.com/u/605742?s=64&amp;v=4" alt="@kbariotis" height="32" width="32" data-view-component="true" className="avatar circle" />
                            </li>
                        </ul>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default Reward;