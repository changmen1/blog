import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AnimatePresence } from "motion/react";

const DefaultLayout: FC = () => {
    const location = useLocation();
    return (
        <SidebarProvider>
            <SidebarInset>
                <Header />
                {/* TODO Footer组件fixed 高度40 所以设置 mb-10    Header组件高度128px 所以设置 md:pt-[128px] pt-10 */}
                <main className="flex-1 bg-main mb-10 md:pt-[128px] pt-10">
                    <AnimatePresence mode="wait">
                        <Outlet key={location.pathname} />
                    </AnimatePresence>
                </main>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DefaultLayout;
