// TODO 卡片时间线 时间线还未解决
import TiltedCard from '@/components/bits/TiltedCard';
import nb from "@/assets/Timeline/nb.jpg"

const Timeline = () => {

    const cardData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        imageSrc: nb,
        altText: `海晏北路`,
        captionText: `宁波`,
    }));


    return (
        <>
            <div className="relative bg-Timeline grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                {cardData.map((item) => (
                    <TiltedCard
                        key={item.id}
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        captionText={item.captionText}
                        containerHeight="100px"
                        containerWidth="200px"
                        imageHeight="100px"
                        imageWidth="200px"
                        rotateAmplitude={15}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text">
                                {item.captionText}
                            </p>
                        }
                    />
                ))}
            </div>
        </>
    );
};

export default Timeline;

