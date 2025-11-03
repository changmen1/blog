const RentalAgreementA4 = () => {
    return (
        <>
            <div className="relative md:w-[70vw] h-[1123px] mx-auto  p-10 text-[15px] leading-relaxed font-serif">
                <p className="font-bold float-right">编号：_____________</p>
                {/* 标题和信息 */}
                <h1 className="text-2xl font-bold text-center mt-[250px]">租房合同</h1>
                <div className="font-bold mt-[500px] w-fit mx-auto text-left">
                    <p className="mb-2">甲方（出租人）：郑博文</p>
                    <p className="mb-2">乙方（承租人）：朱昕龙</p>
                    <p className="mb-6">签订日期：2024 年 11 月 10 日</p>
                </div>
                <p className="absolute bottom-5 right-0 left-0 text-center text-sm">-- 第 1 页 共 2 页 --</p>
            </div>
            <br />
            <div className="relative md:w-[70vw] h-[1123px] mx-auto p-10 text-[15px] leading-relaxedfont-serif">
                <p>出租人（以下简称甲方）：</p>
                <p>承租人（以下简称乙方）：</p>
                <p>甲、乙双方当事人经充分协商，达成房屋租赁合同如下：</p>
                <ol style={{ listStyleType: 'cjk-ideographic' }} className=" ml-8 space-y-3">
                    <li>该房屋位于 <span className="border-b border-gray-400 h-6 w-64 mt-2">宁波市鄞州区下应路洋江水岸</span> ，房型<span className="border-b border-gray-400 h-6 w-64 mt-2">一室</span>，使用面积为 <span className="border-b border-gray-400 h-6 w-64 mt-2">20</span> 平方米，房屋质量良好。
                        <br />  <span>甲方提供设施有：<span className="border-b border-gray-400 h-6 w-64 mt-2">燃气灶，洗衣机，燃气热水器，空调</span></span>
                    </li>
                    <li>
                        租赁期共 <span className="border-b border-gray-400 h-6 w-64 mt-2">12</span> 个月，从 <span className="border-b border-gray-400 h-6 w-64 mt-2">2024</span> 年<span className="border-b border-gray-400 h-6 w-64 mt-2">11</span> 月 <span className="border-b border-gray-400 h-6 w-64 mt-2">10</span>日起至 <span className="border-b border-gray-400 h-6 w-64 mt-2">2025</span> 年 <span className="border-b border-gray-400 h-6 w-64 mt-2">11</span> 月<span className="border-b border-gray-400 h-6 w-64 mt-2">10</span> 日止。

                    </li>
                    <li>该房屋租金为人民币<span className="border-b border-gray-400 h-6 w-64 mt-2">壹仟</span>圆整（¥<span className="border-b border-gray-400 h-6 w-64 mt-2">1000</span>）。</li>
                    <li>乙方向甲方交付保证金人民币 <span className="border-b border-gray-400 h-6 w-64 mt-2">壹仟</span>圆整（￥<span className="border-b border-gray-400 h-6 w-64 mt-2">1000</span>），该保证金应在该合同终止时全额退还乙方。</li>
                    <li>租赁期间的水电费用由乙方自付（电表读数：<span className="border-b border-gray-400 h-6 w-64 mt-2">5121</span>水表读数：<span className="border-b border-gray-400 h-6 w-64 mt-2">260</span>）。</li>
                    <li>
                        乙方有以下情况之一的，甲方有权终止合同并收回房屋：
                        <ul className="list-decimal ml-6 mt-1">
                            <li>乙方利用承租房屋进行非法活动或影响他人正常生活；</li>
                            <li>乙方拖欠租金。</li>
                        </ul>
                    </li>
                    <li>租赁期满前，如需提前终止合同，需提前 <span className="border-b border-gray-400 h-6 w-64 mt-2">1</span> 个月书面通知对方。</li>
                    <li>乙方不得擅自改动房屋结构。</li>
                    <li>房屋质量问题由双方协商修缮。</li>
                    <li>房屋内意外责任由乙方承担。</li>
                    <li>如有争议，双方协商解决；协商不成，依法处理。</li>
                </ol>

                <p className="mt-6">
                    本合同经双方签字后生效，本合同一式两份，甲方，乙方各执一份。
                </p>

                {/* 签名部分 */}
                <div className="mt-10 flex justify-between">
                    <div>
                        <p>甲方（签章）：</p>
                        <div className="border-b border-gray-400 h-6 md:w-64 mt-2">郑博文</div>
                    </div>
                    <div>
                        <p>乙方（签章）：</p>
                        <div className="border-b border-gray-400 h-6 md:w-64 mt-2">朱昕龙</div>
                    </div>
                </div>

                <div className="text-right mt-8">
                    <p>签署日期：2024 年 11 月 10 日</p>
                </div>

                <p className="absolute bottom-5 right-0 left-0 text-center text-sm">--第 2 页 共 2 页 --</p>
            </div>
        </>
    );
};

export default RentalAgreementA4;
