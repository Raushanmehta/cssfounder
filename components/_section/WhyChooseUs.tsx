import React from "react";
import Image from "next/image";
import {
    Heart,
    Users,
    GraduationCap,
    Sprout,
    ChevronRight,
    HeartHandshake,
    LucideIcon,
} from "lucide-react";
import homeData from "@/data/HomeData.json";
import { WhyChooseUsData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    Heart,
    Users,
    GraduationCap,
    Sprout,
    HeartHandshake,
};

function renderFeatureIcon(iconName: string) {
    switch (iconName) {
        case "Heart":
            return <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff5500] fill-[#ff5500]" />;
        case "Users":
            return <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#155e37]" />;
        case "GraduationCap":
            return <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff5500]" />;
        case "Sprout":
            return <Sprout className="w-6 h-6 sm:w-7 sm:h-7 text-[#155e37]" />;
        default:
            return <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff5500]" />;
    }
}

export default function WhyChooseUs() {
    const { whyChooseUs } = homeData as { whyChooseUs: WhyChooseUsData };
    const SubtitleIcon = iconMap[whyChooseUs.subtitleIcon] || HeartHandshake;
    const OverlayIcon = iconMap[whyChooseUs.overlay.icon] || HeartHandshake;

    return (
        <section className="bg-[#FFFDF9] py-16 sm:py-6 lg:py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* LEFT COLUMN */}
                <div className="lg:col-span-7 space-y-7">
                    {/* Subtitle */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-6 sm:w-10 h-[2px] bg-[#ff5500]" />

                        <SubtitleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#155e37]" />

                        <span className="text-sm sm:text-base font-bold tracking-widest text-[#155e37] uppercase">
                            {whyChooseUs.subtitle}
                        </span>

                        <span className="w-10 sm:w-16 h-[2px] bg-[#ff5500]" />
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-6xl
                            xl:text-6xl
                            font-extrabold
                            text-[#111827]
                            tracking-tight
                            leading-[1.1]
                        "
                    >
                        {whyChooseUs.title.prefix}{" "}
                        <span className="text-[#ff5500]">
                            {whyChooseUs.title.highlight}
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            text-base
                            sm:text-lg
                            lg:text-xl
                            text-gray-600
                            max-w-2xl
                            leading-relaxed
                        "
                    >
                        {whyChooseUs.description}
                    </p>

                    {/* Feature Cards */}
                    <div className="space-y-5 pt-2">
                        {whyChooseUs.features.map((item) => (
                            <div
                                key={item.id}
                                className={`
                                    bg-white
                                    rounded-2xl
                                    p-5
                                    sm:p-6
                                    border
                                    border-gray-100
                                    shadow-sm
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    transition-all
                                    duration-300
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    ${item.borderAccent}
                                `}
                            >
                                {/* Icon + Content */}
                                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-14
                                            h-14
                                            sm:w-16
                                            sm:h-16
                                            rounded-full
                                            ${item.iconBg}
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                        `}
                                    >
                                        {renderFeatureIcon(item.icon)}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0">
                                        <h3
                                            className="
                                                text-lg
                                                sm:text-xl
                                                lg:text-2xl
                                                font-bold
                                                text-[#111827]
                                                mb-1.5
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                text-sm
                                                sm:text-base
                                                lg:text-lg
                                                text-gray-500
                                                max-w-xl
                                                leading-relaxed
                                            "
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <button
                                    type="button"
                                    className={`
                                        w-10
                                        h-10
                                        sm:w-11
                                        sm:h-11
                                        rounded-full
                                        ${item.arrowBg}
                                        ${item.arrowColor}
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                        hover:opacity-80
                                        transition-opacity
                                    `}
                                    aria-label={`Learn more about ${item.title}`}
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-5 relative">
                    <div
                        className="
                            relative
                            rounded-[2.5rem]
                            overflow-hidden
                            shadow-xl
                            aspect-[4/5]
                            w-full
                        "
                    >
                        <Image
                            src={whyChooseUs.image.src}
                            alt={whyChooseUs.image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                        />

                        {/* Overlay */}
                        <div
                            className="
                                absolute
                                bottom-5
                                left-5
                                right-5
                                sm:bottom-7
                                sm:left-7
                                sm:right-7
                                bg-[#0f3822]/95
                                backdrop-blur-sm
                                text-white
                                p-5
                                sm:p-6
                                lg:p-7
                                rounded-2xl
                                border
                                border-emerald-800/40
                                shadow-xl
                                flex
                                items-start
                                gap-4
                            "
                        >
                            {/* Icon */}
                            <div className="p-2 rounded-lg text-[#ff5500] shrink-0 mt-1">
                                <OverlayIcon
                                    className="
                                        w-8
                                        h-8
                                        sm:w-10
                                        sm:h-10
                                        stroke-[1.5]
                                    "
                                />
                            </div>

                            {/* Overlay Text */}
                            <div>
                                <h4
                                    className="
                                        text-xl
                                        sm:text-2xl
                                        lg:text-3xl
                                        font-bold
                                        leading-snug
                                    "
                                >
                                    {whyChooseUs.overlay.titlePrefix}{" "}
                                    <br />
                                    <span className="text-[#ff5500]">
                                        {whyChooseUs.overlay.titleHighlight}
                                    </span>
                                </h4>

                                <p
                                    className="
                                        text-sm
                                        sm:text-base
                                        lg:text-lg
                                        text-gray-300
                                        mt-3
                                        leading-relaxed
                                    "
                                >
                                    {whyChooseUs.overlay.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}