import React from "react";
import "./WaveAnimation.css"; // 👈 引入关键帧动画样式

const WaveHeader: React.FC = () => {
    return (
        <div className="absolute hidden md:flex top-[-125px] left-0 w-full">
            <svg
                className="relative w-full h-[15vh] min-h-[100px] max-h-[150px] -mb-[7px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 
              88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="0"
                        className="fill-current text-main/70"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="3"
                        className="fill-current text-main/50"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="5"
                        className="fill-current text-main/30"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="7"
                        className="fill-current text-main"
                    />
                </g>
            </svg>
        </div>
    );
};

export default WaveHeader;
