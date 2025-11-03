import { useMemo, type FC } from "react";
// import menuBg from "@/assets/article/title.jpg"

interface TimelineItem {
    time: string;
    label: string;
}

interface SvgTimelineProps {
    data: TimelineItem[];
    maxPerRow?: number; // 每行最多显示多少个节点
    nodeGapX?: number;  // 横向间隔
    nodeGapY?: number;  // 纵向间隔
    width?: number;     // 容器宽度
}

const SvgTimeline: FC<SvgTimelineProps> = ({
    data,
    maxPerRow = 5,
    nodeGapX = 195,
    nodeGapY = 150,
    width = 843,
}) => {
    /** 节点坐标 */
    const nodes = useMemo(() => {
        return data.map((item, idx) => {
            const row = Math.floor(idx / maxPerRow);
            const col = idx % maxPerRow;
            let x: number, y: number;
            const leftMargin = 50;

            if (row % 2 === 0) {
                x = leftMargin + col * nodeGapX;
            } else {
                x = leftMargin + (maxPerRow - 1 - col) * nodeGapX;
            }
            y = 60 + row * nodeGapY;
            return { ...item, x, y };
        });
    }, [data, maxPerRow, nodeGapX, nodeGapY]);

    /** 连线 */
    const lines = useMemo(() => {
        const arr: { x1: number; y1: number; x2: number; y2: number }[] = [];
        const gap = 10;
        for (let i = 0; i < nodes.length - 1; i++) {
            const { x: x1, y: y1 } = nodes[i];
            const { x: x2, y: y2 } = nodes[i + 1];
            const dx = x2 - x1;
            const dy = y2 - y1;
            const len = Math.sqrt(dx * dx + dy * dy);
            const ratioStart = gap / len;
            const ratioEnd = (len - gap) / len;
            const sx = x1 + dx * ratioStart;
            const sy = y1 + dy * ratioStart;
            const tx = x1 + dx * ratioEnd;
            const ty = y1 + dy * ratioEnd;
            arr.push({ x1: sx, y1: sy, x2: tx, y2: ty });
        }
        return arr;
    }, [nodes]);

    /** SVG 宽高 */
    const svgWidth = maxPerRow * nodeGapX + 100;
    const svgHeight = Math.ceil(data.length / maxPerRow) * nodeGapY + 100;

    return (
        //  flex items-center justify-center
        <div className="h-full w-full">
            <div style={{ width, position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    事件流程
                </div>

                <svg width={svgWidth} height={svgHeight}>
                    {/* 连线 */}
                    {lines.map((line, idx) => (
                        <line
                            key={`line-${idx}`}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            stroke="#fff"
                            strokeWidth={2}
                            markerEnd="url(#arrow)"
                        />
                    ))}

                    {/* 箭头 */}
                    <defs>
                        <marker
                            id="arrow"
                            markerWidth="6"
                            markerHeight="6"
                            refX="6"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path d="M0,0 L6,3 L0,6" fill="#fff" />
                        </marker>
                    </defs>

                    {/* 节点 */}
                    {nodes.slice(0, nodes.length - 1).map((node, idx) => (
                        <circle
                            key={`circle-${idx}`}
                            cx={node.x}
                            cy={node.y}
                            r={4}
                            fill="#fff"
                            stroke="#fff"
                        />
                        // <image
                        //     key={`node-${idx}`}
                        //     href={menuBg}
                        //     x={node.x - 20}   // 让图片居中 (node.x 是圆心坐标)
                        //     y={node.y - 20}
                        //     width={40}        // 控制图片大小
                        //     height={40}
                        // />
                    ))}

                    {/* 时间 */}
                    {nodes.map((node, idx) => (
                        <text
                            key={`time-${idx}`}
                            x={node.x + 10}
                            y={node.y + 30}
                            textAnchor="start"
                            fill="#fff"
                            fontSize={14}
                        >
                            {node.time}
                        </text>
                    ))}

                    {/* 标签 */}
                    {nodes.map((node, idx) => (
                        <>
                            <text
                                key={`label-${idx}`}
                                x={node.x + 10}
                                y={node.y + 55}
                                textAnchor="start"
                                fill="#00eaff"
                                fontSize={16}
                                fontWeight="bold"
                            >
                                {node.label}
                            </text>
                            {/* <image
                                href={menuBg}
                                x={node.x + 80}   // 根据需要偏移
                                y={node.y + 40}
                                className="w-[80px] h-[80px]"
                            /> */}
                        </>
                    ))}
                </svg>
            </div>
        </div>
    );
};

export default SvgTimeline;
