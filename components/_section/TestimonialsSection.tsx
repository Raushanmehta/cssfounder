"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Heart, Quote, LucideIcon } from "lucide-react";
import homeData from "@/data/HomeData.json";
import { TestimonialsData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    Heart,
};

export default function TestimonialsSection() {
    const [activeTab, setActiveTab] = useState(0);
    const { testimonials } = homeData as { testimonials: TestimonialsData };
    const SubtitleIcon = iconMap[testimonials.subtitleIcon] || Heart;

    return (
        <section className="bg-[#FAFDFB] py-16 sm:py-20 lg:py-24 overflow-hidden">
            <div className="mx-auto w-full max-w-[1650px] px-4 sm:px-6 lg:px-8 xl:px-18 text-center">
                {/* Subtitle */}
                <div className="flex items-center justify-center gap-2 mb-3">
                    <SubtitleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2d5d3b]" />

                    <span className="text-lg sm:text-xl lg:text-2xl font-serif italic text-[#2d5d3b]">
                        {testimonials.subtitle}
                    </span>
                </div>

                {/* Heading */}
                <h2
                    className="
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-extrabold
                        leading-[1.1]
                        tracking-tight
                        text-[#0d1f18]
                        mb-6
                    "
                >
                    {testimonials.title.prefix}{" "}
                    <span className="text-[#ffb400]">
                        {testimonials.title.highlight}
                    </span>
                    <br />
                    {testimonials.title.suffix}
                </h2>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="w-10 sm:w-16 lg:w-20 h-[2px] bg-[#ffb400]" />

                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d5d3b] fill-[#2d5d3b]" />

                    <span className="w-10 sm:w-16 lg:w-20 h-[2px] bg-[#ffb400]" />
                </div>

                {/* Description */}
                <p
                    className="
                        text-base
                        sm:text-lg
                        lg:text-xl
                        leading-relaxed
                        text-gray-600
                        max-w-3xl
                        mx-auto
                        mb-14
                        px-2
                    "
                >
                    {testimonials.description}
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10">
                    {testimonials.items.map((item) => {
                        const isYellow = item.highlighted;

                        return (
                            <div
                                key={item.id}
                                className={`
                                    relative
                                    rounded-3xl
                                    bg-white
                                    p-6
                                    sm:p-8
                                    lg:p-9
                                    pt-12
                                    sm:pt-14
                                    text-left
                                    transition-all
                                    duration-300
                                    border
                                    flex
                                    flex-col
                                    justify-between
                                    min-h-[360px]
                                    sm:min-h-[400px]
                                    lg:min-h-[430px]
                                    shadow-sm
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    ${
                                        isYellow
                                            ? "border-[#ffb400]"
                                            : "border-gray-100"
                                    }
                                `}
                            >
                                {/* Quote Badge */}
                                <div
                                    className={`
                                        absolute
                                        -top-5
                                        left-6
                                        sm:left-8
                                        w-12
                                        h-12
                                        sm:w-14
                                        sm:h-14
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                        shadow-md
                                        ${
                                            isYellow
                                                ? "bg-[#ffb400]"
                                                : "bg-[#0d6e3f]"
                                        }
                                    `}
                                >
                                    <Quote
                                        className="
                                            w-6
                                            h-6
                                            sm:w-7
                                            sm:h-7
                                            fill-current
                                        "
                                    />
                                </div>

                                <div>
                                    {/* Stars */}
                                    <div className="flex justify-center gap-1.5 mb-7">
                                        {Array.from({
                                            length: item.rating,
                                        }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="
                                                    w-5
                                                    h-5
                                                    sm:w-6
                                                    sm:h-6
                                                    fill-[#ffb400]
                                                    text-[#ffb400]
                                                "
                                            />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p
                                        className="
                                            text-gray-600
                                            text-base
                                            sm:text-lg
                                            lg:text-md
                                            leading-[1.8]
                                            mb-2
                                            text-center
                                            sm:text-left
                                        "
                                    >
                                        {item.quote}
                                    </p>
                                </div>

                                {/* Profile */}
                                <div className="relative pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-4">
                                        {/* Avatar */}
                                        <div
                                            className="
                                                relative
                                                w-14
                                                h-14
                                                sm:w-16
                                                sm:h-16
                                                rounded-full
                                                overflow-hidden
                                                bg-gray-200
                                                flex-shrink-0
                                            "
                                        >
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                fill
                                                sizes="64px"
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* User Info */}
                                        <div>
                                            <h4
                                                className="
                                                    font-bold
                                                    text-[#0d1f18]
                                                    text-lg
                                                    sm:text-xl
                                                "
                                            >
                                                {item.name}
                                            </h4>

                                            <p
                                                className="
                                                    text-sm
                                                    sm:text-base
                                                    text-gray-500
                                                    mt-1
                                                "
                                            >
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Colored Bar */}
                                    <div
                                        className={`
                                            absolute
                                            -bottom-9
                                            -left-6
                                            -right-6
                                            sm:-left-8
                                            sm:-right-8
                                            lg:-left-9
                                            lg:-right-9
                                            h-3
                                            rounded-b-3xl
                                            ${
                                                isYellow
                                                    ? "bg-[#ffb400]"
                                                    : "bg-[#0d6e3f]"
                                            }
                                        `}
                                    >
                                        {/* Arrow */}
                                        <div
                                            className={`
                                                mx-auto
                                                w-0
                                                h-0
                                                border-l-[7px]
                                                border-l-transparent
                                                border-r-[7px]
                                                border-r-transparent
                                                -mt-1.5
                                                ${
                                                    isYellow
                                                        ? "border-b-[7px] border-b-[#ffb400]"
                                                        : "border-b-[7px] border-b-[#0d6e3f]"
                                                }
                                            `}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center items-center gap-3 mt-10">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                                h-3
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                    activeTab === index
                                        ? "w-8 bg-[#ffb400]"
                                        : "w-3 bg-gray-300 hover:bg-gray-400"
                                }
                            `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}