import WakaStatus from "@/pages/components/wakaTime/WakaStatus";
import type { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="fixed bottom-0 right-0 left-0 z-20 h-10 border-t shadow-sm bg-main">
            <div className="h-full px-4 flex items-center justify-center text-sm">
                <WakaStatus />
            </div>
        </footer>
    )
}

export default Footer;