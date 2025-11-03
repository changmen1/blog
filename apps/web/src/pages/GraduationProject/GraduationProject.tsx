import { useLayoutEffect, useRef, useState, type FC } from "react";
import style from "./GraduationProject.module.less"
import qj from "@/assets/mp3/001.mp3"
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// 分页模块
import { Pagination } from 'swiper/modules';
import TextOne from "./components/TextOne"
import pub from "@/assets/h5/weddingInvitations/pub-1.png"
import logo from "@/assets/h5/weddingInvitations/logo.png"
import video1 from "@/assets/h5/weddingInvitations/婚礼现场2.mp4"
import page1 from "@/assets/h5/weddingInvitations/page-1-1.png"
import video2 from "@/assets/h5/weddingInvitations/婚礼背景4.jpg"
import page2 from "@/assets/h5/weddingInvitations/page-2-1.png"
import bg2 from "@/assets/h5/weddingInvitations/婚礼背景2.jpg"
import hua8 from "@/assets/h5/weddingInvitations/感谢背景3.mp4"
import thanks from "@/assets/h5/weddingInvitations/thanks.png"
import { useZxlIsMobile } from "@/hooks/use-idMobile";

// Vertical 垂直
// Mousewheel control 鼠标控制
// TODO 存在问题 首次进入无法加载动画类 .slide-move .logo 后期优化
// TODO 加入微信分享连接后 加入自定义内容
// TODO 婚礼请柬H5
const GraduationProject: FC = () => {
    const myRef = useRef(null)
    // 当前 slide 索引
    const [activeIndex, setActiveIndex] = useState(0);
    // 控制分享层显示
    const [showShare, setShowShare] = useState(false);

    const [mobal, setMobal] = useState<boolean>(false)

    useLayoutEffect(() => {
        const data = useZxlIsMobile()
        setMobal(data)
    }, [])

    return (
        <>
            {
                mobal ?
                    <>
                        <div className='md:p-0'>
                            {/* 播放器 */}
                            <div className={`${style['rotate']} ${style['autiobtn']}`}>
                                <audio src={qj} id="media" autoPlay loop preload="auto"></audio>
                            </div>
                        </div>
                        {/* 微信分享层 */}
                        {
                            showShare &&
                            <div className={`${style['vx']}`} onClick={() => setShowShare(false)} />
                        }
                        {/* 内容层 */}
                        <Swiper
                            direction={'vertical'}
                            ref={myRef}
                            modules={[Pagination]}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            className={style["swiper-container"]}
                        >
                            <SwiperSlide className={`${activeIndex === 0 ? style["slide-move"] : ""}`}>
                                <video
                                    id="myVideo"
                                    src={video1}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline   // 移动端内联播放
                                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                                />
                                <div className={style['logo']}>
                                    <img src={logo} alt=""></img>
                                </div>
                                <div className={style['one-slide-1']}>
                                    <img src={page1} alt=""></img>
                                    {/* <button onClick={() => document.getElementById("myVideo")?.play()}>
                                        点击播放
                                    </button> */}
                                </div>
                                <div className={style['pub-passdown']}>
                                    <img src={pub} alt=""></img>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className={`${activeIndex === 1 ? style["slide-move"] : ""}`}
                                style={{
                                    backgroundImage: `url(${video2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className={style['two-slide-1']}>
                                    <img src={page2} />
                                </div>
                                <div className={style['two-slide-2']}>
                                    <p className={style['desc']}>人与人之间的心墙，只需要一句平常的话语，就能完全打开</p>
                                    <p className={style['desc']}>“这里网不好，回家用滴滴再付车费吧。”</p>
                                </div>
                                <div className={style['pub-passdown']}>
                                    <img src={pub} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className={`${activeIndex === 2 ? style["slide-move"] : ""}`}
                                style={{
                                    backgroundImage: `url(${bg2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className={style['two-slide-1']}>
                                    <img src={page2} />
                                </div>
                                <TextOne />
                                <div className={style['pub-passdown']}>
                                    <img src={pub} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className={`${activeIndex === 3 ? style["slide-move"] : ""}`}
                            >
                                <video
                                    src={hua8}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline   // 移动端内联播放
                                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                                />
                                <div className={style['logo']}>
                                    <img src={logo} alt=""></img>
                                </div>
                                <div className={style['three-slide-1']}>
                                    <p className={style['orange']}>寒冬里，</p>
                                    <p className={style['orange']}>请在下车的时候，</p>
                                    <p className={style['orange']}>对默默奉献的师傅们，</p>
                                    <p className={style['orange']}>说一声：</p>
                                </div>
                                <div className={style['three-slide-2']}><img src={thanks} /></div>
                                <button className='absolute top-[80%] left-[13%] text-center text-white bg-[#ff8900] w-[300px] h-[80px] rounded-2xl text-3xl' onClick={() => setShowShare(true)}>
                                    将资源分享给更多人
                                </button>
                            </SwiperSlide>
                        </Swiper>
                    </>
                    : <h1 className="text-center text-red-600 text-9xl">请在手机上打开</h1>
            }

        </>
    )
}

export default GraduationProject;