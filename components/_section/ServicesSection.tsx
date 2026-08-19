import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Utensils,
    Heart,
    GraduationCap,
    ArrowRight,
    HeartHandshake,
    LucideIcon,
} from "lucide-react";
import homeData from "@/data/HomeData.json";
import { ServicesData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    Utensils,
    Heart,
    GraduationCap,
    HeartHandshake,
};

export default function ServicesSection() {
    const { services } = homeData as { services: ServicesData };
    const TaglineIcon = iconMap[services.taglineIcon] || HeartHandshake;

    return (
        <section className="bg-[#FAF7F2] py-14 sm:py-16 lg:py-24">
            <div className="mx-auto w-full max-w-[1650px] px-4 sm:px-6 lg:px-8 xl:px-18 text-center">
                {/* Section Header */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                    <span className="w-6 sm:w-10 h-[1px] bg-[#2d4d3a]" />

                    <TaglineIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2d4d3a]" />

                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#2d4d3a] uppercase">
                        {services.tagline}
                    </span>

                    <span className="w-6 sm:w-10 h-[1px] bg-[#2d4d3a]" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#2d4d3a] mb-5">
                    {services.title.prefix}{" "}
                    <span className="text-[#ff5500]">
                        {services.title.highlight}
                    </span>
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-14">
                    {services.description}
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {services.items.map((service) => {
                        const Icon = iconMap[service.icon] || Heart;

                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center relative text-center group"
                            >
                                {/* Image */}
                                <div className="relative w-full h-60 sm:h-64 lg:h-72 overflow-hidden">
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Floating Icon */}
                                <div
                                    className={`-mt-7 sm:-mt-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full ${service.iconBgColor} flex items-center justify-center border-4 border-white shadow-md z-10`}
                                >
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>

                                {/* Content */}
                                <div className="px-5 sm:px-7 lg:px-8 pt-4 pb-7 flex-1 flex flex-col justify-between items-center w-full">
                                    <div>
                                        {/* Card Title */}
                                        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1f2937] mb-1 sm:mb-4 leading-snug">
                                            {service.title}
                                        </h3>

                                        {/* Card Description */}
                                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-1">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Divider + Button */}
                                    <div className="w-full">
                                        <div className="w-full h-px bg-gray-100 mb-5 sm:mb-6" />

                                        <Link
                                            href={service.href || "#"}
                                            className={`inline-flex items-center gap-2 font-semibold text-base sm:text-lg ${service.buttonTextColor} hover:opacity-80 transition-opacity`}
                                        >
                                            {services.readMoreLabel}

                                            <span className="p-1 sm:p-1.5 rounded-full border border-current">
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}