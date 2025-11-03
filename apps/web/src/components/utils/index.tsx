/*
 * Author: zxl
 * Created on Thu Jul 10 2025
 * 个人博客 - 1.0
 * Copyright (c) 2025 Dv
 */

import { useEffect, useRef, useState, type FC } from "react";

const Utils: FC = () => {
    const [visible, setVisible] = useState(false);
    const dragRef = useRef<HTMLDivElement | null>(null)
    const [position, setPosition] = useState(() => ({
        x: window.innerWidth - 60 - 25, // 60按钮宽度，25右边距
        y: window.innerHeight - 60 - 400, // 60按钮高度，400底部边距
    }))
    const [isDragging, setIsDragging] = useState(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const rect = dragRef.current?.getBoundingClientRect()
        if (!rect) return
        setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
        setIsDragging(true)
    }

    // TODO 全屏
    const toggleFullScreen = () => {
        let doc: any = window.document;
        let docEl: any = doc.documentElement;
        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        }
        else {
            cancelFullScreen.call(doc);
        }
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            })
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, offset])

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 100); // 超过 100px 时显示按钮
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div
            ref={dragRef}
            onMouseDown={handleMouseDown}
            className='fixed z-50 cursor-move h-[180px] bg-toolbar p-2 rounded-[12px]'
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            {/* TODO 小主按钮 */}
            <div className='cursor-pointer bg-local-banner w-[35px] h-[35px] mb-2 flex flex-col justify-center text-[#000] rounded-[12px] border border-[#ccc] bg-[#c7e191] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] box-border'></div>
            {/* TODO 音乐 */}
            <div className='cursor-pointer bg-local-music w-[35px] h-[35px] mb-2 flex flex-col justify-center items-center text-[#000] rounded-[12px] border border-[#ccc] bg-[#c7e191] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] box-border' />
            {/* TODO 全屏 */}
            <div
                className='cursor-pointer bg-local-full-screen w-[35px] h-[35px] mb-2 flex flex-col justify-center items-center text-[#000] rounded-[12px] border border-[#ccc] bg-[#c7e191] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] box-border'
                onClick={toggleFullScreen}
            />
            {/* TODO 回到顶部 */}
            {visible && (
                <div
                    onClick={scrollToTop}
                    className='cursor-pointer bg-local-top w-[35px] h-[35px] flex flex-col justify-center items-center text-[#000] rounded-[12px] border border-[#ccc] bg-[#c7e191] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] box-border'
                />
            )}
        </div>
    )
}

export default Utils