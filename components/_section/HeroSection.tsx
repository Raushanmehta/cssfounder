"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Play,
    GraduationCap,
    Users,
    HandHeart,
    Soup,
    Sprout,
    LucideIcon,
} from "lucide-react";
import homeData from "@/data/HomeData.json";
import { HeroData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    GraduationCap,
    Users,
    HandHeart,
    Soup,
    Sprout,
    Heart,
    Play,
};

export default function HeroSection() {
    const { hero } = homeData as { hero: HeroData };
    const BadgeIcon = iconMap[hero.badge.icon] || Sprout;

    return (
        <section className="relative isolate overflow-hidden bg-black font-roboto">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={hero.backgroundImage}
                    alt={hero.backgroundImageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/40" />

            {/* Left Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20" />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-black/90 to-transparent" />

            {/* Hero Content */}
            <div className="mx-auto flex min-h-[720px] w-full max-w-[1650px] items-center px-4 pb-10 pt-28 sm:min-h-[760px] sm:px-6 sm:pt-32 lg:min-h-[780px] lg:px-8 xl:px-18 lg:pb-48 lg:pt-32">
                <div className="w-full max-w-[650px]">
                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-500 sm:mb-6 sm:px-5 sm:text-sm">
                        <BadgeIcon
                            size={17}
                            fill="currentColor"
                            className="shrink-0"
                        />
                        <span>{hero.badge.text}</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-[38px] font-bold leading-[1.08] tracking-tight text-white xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px]">
                        {hero.title.line1}

                        <span className="block text-orange-500">
                            {hero.title.highlight}
                        </span>

                        <span className="block">
                            {hero.title.line2}
                            <span className="ml-1 text-2xl text-orange-500 sm:ml-2 sm:text-3xl">
                                {hero.title.heartSymbol}
                            </span>
                        </span>
                    </h1>

                    {/* Orange Line */}
                    <div className="my-5 h-[3px] w-32 bg-orange-500 sm:w-48 md:w-60" />

                    {/* Description */}
                    <p className="max-w-[570px] text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:text-lg">
                        {hero.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex w-full flex-row items-center gap-3 sm:mt-7 sm:gap-4">
                        {/* Donate */}
                        <Link
                            href={hero.primaryButton.href}
                            className="group flex h-[52px] flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 sm:h-[54px] sm:flex-none sm:gap-3 sm:px-5 sm:text-base"
                        >
                            <span>{hero.primaryButton.label}</span>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-orange-500 sm:h-9 sm:w-9">
                                <Heart
                                    size={18}
                                    fill="currentColor"
                                />
                            </span>
                        </Link>

                        {/* Watch Story */}
                        <Link
                            href={hero.secondaryButton.href}
                            className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/70 bg-black/20 px-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-orange-500 hover:text-orange-500 sm:h-[54px] sm:flex-none sm:gap-3 sm:px-5 sm:text-base"
                        >
                            <span>{hero.secondaryButton.label}</span>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500 text-orange-500">
                                <Play
                                    size={14}
                                    fill="currentColor"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Impact Cards */}
            <div className="relative z-20 mx-auto w-full max-w-[1650px] px-4 pb-5 sm:px-6 lg:absolute lg:bottom-6 lg:left-1/2 lg:w-full lg:-translate-x-1/2 lg:px-8 xl:px-18">
                <div className="grid overflow-hidden rounded-2xl border border-white/25 bg-black/60 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
                    {hero.impactItems.map((item, index) => {
                        const Icon = iconMap[item.icon] || GraduationCap;

                        return (
                            <div
                                key={item.title}
                                className={`relative flex items-center gap-4 px-4 py-5 sm:px-5 lg:px-6 ${
                                    index !== hero.impactItems.length - 1
                                        ? "border-b border-white/20 sm:border-b lg:border-b-0 lg:border-r"
                                        : ""
                                }`}
                            >
                                {/* Icon */}
                                <div
                                    className={`flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-full shadow-[0_0_25px_rgba(255,255,255,0.12)] sm:h-16 sm:min-h-16 sm:w-16 sm:min-w-16 lg:h-[68px] lg:min-h-[68px] lg:w-[68px] lg:min-w-[68px] ${
                                        item.color === "orange"
                                            ? "bg-orange-500"
                                            : "bg-green-600"
                                    }`}
                                >
                                    <Icon
                                        size={28}
                                        strokeWidth={1.8}
                                        className="text-white sm:size-8"
                                    />
                                </div>

                                {/* Text */}
                                <div className="min-w-0">
                                    <h3 className="text-sm font-bold leading-5 text-white sm:text-[16px] lg:text-[17px] lg:leading-6">
                                        {item.title}

                                        <span className="block">
                                            {item.subtitle}
                                        </span>
                                    </h3>

                                    <p className="mt-1 text-xs leading-4 text-white/80 sm:text-sm sm:leading-5">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}