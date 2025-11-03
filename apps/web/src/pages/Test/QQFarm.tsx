/*
 * Author: zxl
 * 文件描述: QQ农场小游戏
 * 创建时间 2025年10月16日 16:40:43
 */

import type { FC } from "react";


const QQFarm: FC = () => {
    return (
        <div className='mx-auto w-[1024px] h-[768px] relative overflow-hidden bg-qq-farm'>
            <ul className="list-none w-[760px] overflow-hidden mt-[300px] mr-0 mb-0 ml-[170px]">
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">1</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">2</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">3</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">4</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">5</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">6</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">7</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">8</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">9</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">10</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">11</li>
                <li className="w-[150px] h-[87px] m-[20px] float-left relative">12</li>
            </ul>
        </div>
    )
}

export default QQFarm;