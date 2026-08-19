import React from "react";
import {
    Users,
    MessageSquareText,
    FileCheck,
    Trophy,
    LucideIcon,
} from "lucide-react";
import homeData from "@/data/HomeData.json";
import { StatsData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    Users,
    MessageSquareText,
    FileCheck,
    Trophy,
};

export default function StatsSection() {
    const { stats } = homeData as { stats: StatsData };

    return (
        <section className="relative bg-[#0d1f18] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-50 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url('${stats.backgroundImage}')`,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0d1f18]/30 pointer-events-none" />

            {/* Content */}
            <div className="relative mx-auto w-full max-w-[1650px] px-4 sm:px-6 lg:px-8 xl:px-18">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-14 lg:gap-y-0 lg:gap-0 items-center">
                    {stats.items.map((stat, index) => {
                        const Icon = iconMap[stat.icon] || Users;

                        return (
                            <div
                                key={index}
                                className={`
                                    flex flex-col items-center justify-center
                                    text-center px-4 sm:px-6
                                    relative
                                    ${
                                        index !== stats.items.length - 1
                                            ? "lg:border-r lg:border-dashed lg:border-amber-500/60"
                                            : ""
                                    }
                                `}
                            >
                                {/* Circular Icon */}
                                <div
                                    className="
                                        w-18 h-18
                                        sm:w-20 sm:h-20
                                        rounded-full
                                        border border-gray-400/50
                                        flex items-center justify-center
                                        mb-6 sm:mb-7
                                        bg-black/10
                                        backdrop-blur-xs
                                    "
                                >
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[1.5]" />
                                </div>

                                {/* Number */}
                                <h3
                                    className="
                                        text-5xl
                                        sm:text-6xl
                                        lg:text-6xl
                                        font-black
                                        tracking-tight
                                        leading-none
                                        mb-3
                                    "
                                >
                                    {stat.value}
                                </h3>

                                {/* Label */}
                                <p
                                    className="
                                        text-lg
                                        sm:text-xl
                                        lg:text-2xl
                                        text-gray-300
                                        font-semibold
                                        leading-tight
                                    "
                                >
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}