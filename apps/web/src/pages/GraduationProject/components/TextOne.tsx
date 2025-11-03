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
                {/* <div className="w-10 h-7 animate-heartbeat cursor-pointer">
                    <img src={_S} alt="China Flag" className="w-10 h-7 mr-2 " />
                </div> */}
                <button className='absolute top-[70%] left-[25%] text-center text-white bg-[#ff8900] w-[200px] h-[80px] rounded-2xl text-3xl'>
                    点击阅读
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div>
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
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default Reward;