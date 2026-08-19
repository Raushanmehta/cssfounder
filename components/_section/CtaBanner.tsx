"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, HeartHandshake, X, LucideIcon } from "lucide-react";
import homeData from "@/data/HomeData.json";
import { CtaData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    HeartHandshake,
};

export default function CtaBanner() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { cta } = homeData as { cta: CtaData };

    const VolunteerIcon = iconMap[cta.volunteer.icon] || HeartHandshake;
    const DonationIcon = iconMap[cta.donation.icon] || HeartHandshake;

    return (
        <section className="relative w-full min-h-[380px] md:min-h-[430px] lg:min-h-[460px] grid grid-cols-1 md:grid-cols-3 overflow-hidden font-sans">
            {/* =====================================================
                LEFT SECTION - VOLUNTEER
            ====================================================== */}
            <div className="relative bg-[#001f3f] text-white px-6 py-12 sm:px-8 lg:px-10 flex flex-col items-center justify-center text-center z-10">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-multiply pointer-events-none"
                    style={{
                        backgroundImage: `url('${cta.volunteer.backgroundImage}')`,
                    }}
                />

                <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="mb-4">
                        <VolunteerIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white stroke-[1.5]" />
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base lg:text-lg font-medium tracking-wide text-gray-200 mb-3 leading-relaxed max-w-xs">
                        {cta.volunteer.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl lg:text-4xl xl:text-3xl font-extrabold leading-tight mb-7">
                        {cta.volunteer.title}
                    </h3>

                    {/* Button */}
                    <Link
                        href={cta.volunteer.button.href}
                        className="
                            bg-[#007a53]
                            hover:bg-[#006041]
                            text-white
                            text-base
                            sm:text-lg
                            font-bold
                            px-8
                            sm:px-10
                            py-3
                            sm:py-3.5
                            rounded-full
                            transition-all
                            duration-300
                            shadow-md
                            hover:scale-105
                        "
                    >
                        {cta.volunteer.button.label}
                    </Link>
                </div>

                {/* Torn Right Border */}
                <div className="hidden md:block absolute top-0 -right-[15px] bottom-0 w-[30px] z-20 pointer-events-none fill-[#001f3f]">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 100 1000"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 Q30,100 10,200 T40,400 T10,600 T30,800 T0,1000 L0,0 Z" />
                    </svg>
                </div>
            </div>

            {/* =====================================================
                MIDDLE SECTION - VIDEO
            ====================================================== */}
            <div className="relative bg-gray-900 min-h-[280px] sm:min-h-[320px] md:min-h-full flex items-center justify-center p-8 z-0">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
                    style={{
                        backgroundImage: `url('${cta.video.backgroundImage}')`,
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Play Button */}
                <button
                    onClick={() => setIsVideoOpen(true)}
                    className="relative z-10 group flex items-center justify-center focus:outline-none"
                    aria-label="Play Video"
                >
                    {/* Outer Circle */}
                    <div
                        className="
                            w-24
                            h-24
                            sm:w-28
                            sm:h-28
                            lg:w-32
                            lg:h-32
                            rounded-full
                            bg-black/50
                            backdrop-blur-xs
                            flex
                            items-center
                            justify-center
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        {/* Inner Circle */}
                        <div
                            className="
                                w-14
                                h-14
                                sm:w-16
                                sm:h-16
                                lg:w-20
                                lg:h-20
                                rounded-full
                                bg-[#ffb400]
                                border-2
                                border-dashed
                                border-gray-900
                                flex
                                items-center
                                justify-center
                                text-gray-900
                                shadow-lg
                            "
                        >
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-current ml-1" />
                        </div>
                    </div>
                </button>
            </div>

            {/* =====================================================
                RIGHT SECTION - DONATION
            ====================================================== */}
            <div className="relative bg-[#e65c00] text-white px-6 py-12 sm:px-8 lg:px-10 flex flex-col items-center justify-center text-center z-10">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply pointer-events-none"
                    style={{
                        backgroundImage: `url('${cta.donation.backgroundImage}')`,
                    }}
                />

                {/* Torn Left Border */}
                <div className="hidden md:block absolute top-0 -left-[15px] bottom-0 w-[30px] z-20 pointer-events-none fill-[#e65c00]">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 100 1000"
                        preserveAspectRatio="none"
                    >
                        <path d="M100,0 Q70,100 90,200 T60,400 T90,600 T70,800 T100,1000 L100,0 Z" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="mb-4">
                        <DonationIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white stroke-[1.5]" />
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base lg:text-lg font-medium tracking-wide text-orange-100 mb-3 leading-relaxed max-w-xs">
                        {cta.donation.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl lg:text-4xl xl:text-3xl font-extrabold leading-tight mb-7">
                        {cta.donation.title}
                    </h3>

                    {/* Button */}
                    <Link
                        href={cta.donation.button.href}
                        className="
                            bg-[#ffb400]
                            hover:bg-[#e09e00]
                            text-gray-900
                            text-base
                            sm:text-lg
                            font-bold
                            px-8
                            sm:px-10
                            py-3
                            sm:py-3.5
                            rounded-full
                            transition-all
                            duration-300
                            shadow-md
                            hover:scale-105
                        "
                    >
                        {cta.donation.button.label}
                    </Link>
                </div>
            </div>

            {/* =====================================================
                VIDEO MODAL
            ====================================================== */}
            {isVideoOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        bg-black/80
                        flex
                        items-center
                        justify-center
                        p-4
                        sm:p-6
                    "
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="
                            relative
                            w-full
                            max-w-5xl
                            bg-black
                            rounded-xl
                            overflow-hidden
                            aspect-video
                            shadow-2xl
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="
                                absolute
                                top-3
                                right-3
                                sm:top-4
                                sm:right-4
                                z-20
                                text-white
                                bg-black/60
                                hover:bg-black
                                w-9
                                h-9
                                sm:w-10
                                sm:h-10
                                rounded-full
                                flex
                                items-center
                                justify-center
                                transition
                            "
                            aria-label="Close video"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* YouTube Video */}
                        <iframe
                            className="w-full h-full"
                            src={cta.video.videoUrl}
                            title="Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}