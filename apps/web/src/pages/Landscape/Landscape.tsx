import Masonry from "@/components/bits/Masonry";
import type { FC } from "react";


const Landscape: FC = () => {
    const items = [
        {
            id: "1",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 250,
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 600,
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1032/600/700?grayscale",
            url: "https://example.com/four",
            height: 300,
        },
        {
            id: "5",
            img: "https://picsum.photos/id/1043/600/850?grayscale",
            url: "https://example.com/five",
            height: 350,
        },
        {
            id: "6",
            img: "https://picsum.photos/id/1050/600/780?grayscale",
            url: "https://example.com/six",
            height: 420,
        },
        {
            id: "7",
            img: "https://picsum.photos/id/1066/600/770?grayscale",
            url: "https://example.com/seven",
            height: 280,
        },
        {
            id: "8",
            img: "https://picsum.photos/id/1074/600/720?grayscale",
            url: "https://example.com/eight",
            height: 360,
        },
        {
            id: "9",
            img: "https://picsum.photos/id/1082/600/860?grayscale",
            url: "https://example.com/nine",
            height: 480,
        },
        {
            id: "10",
            img: "https://picsum.photos/id/1010/600/800?grayscale",
            url: "https://example.com/ten",
            height: 500,
        },
        {
            id: "11",
            img: "https://picsum.photos/id/1009/600/800?grayscale",
            url: "https://example.com/ten",
            height: 500,
        },
        {
            id: "12",
            img: "https://picsum.photos/id/10008/600/800?grayscale",
            url: "https://example.com/ten",
            height: 500,
        },
    ];

    return (
        <div className="mt-10">
            <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
            />
        </div>

    )
}

export default Landscape;