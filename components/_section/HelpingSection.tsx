"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    Heart,
    HandHeart,
    Phone,
    UsersRound,
    LucideIcon,
} from "lucide-react";
import homeData from "@/data/HomeData.json";
import { HelpingData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    Heart,
    HandHeart,
    UsersRound,
    Phone,
};

export default function HelpingSection() {
    const { helping } = homeData as { helping: HelpingData };
    const EyebrowIcon = iconMap[helping.eyebrow.icon] || HandHeart;
    const BadgeIcon = iconMap[helping.donationBadge.icon] || Heart;

    return (
        <main className="min-h-screen bg-[#faf9f6] text-[#092d55]">
            <section className="mx-auto max-w-[1500px] px-5 py-6 lg:px-10">
                <div className="grid min-h-[850px] grid-cols-1 gap-10 lg:grid-cols-[48%_52%]">
                    {/* ================= LEFT SIDE ================= */}
                    <div className="relative min-h-[720px]">
                        {/* Top image */}
                        <div className="absolute left-0 top-0 z-20 h-[260px] w-[280px] overflow-hidden rounded-[24px] border-[7px] border-white shadow-sm">
                            <img
                                src={helping.topImage.src}
                                alt={helping.topImage.alt}
                                className="h-full w-full object-cover object-[10%_10%]"
                            />
                        </div>

                        {/* Vertical donation card */}
                        <div className="absolute left-0 top-[260px] z-30 flex h-[560px] w-[105px] items-center justify-center rounded-b-[22px] rounded-t-none bg-[#062d57]">
                            <div className="flex rotate-[-90deg] items-center whitespace-nowrap">
                                <BadgeIcon
                                    size={23}
                                    fill="#ff9700"
                                    className="mr-4 text-[#ff9700]"
                                />

                                <span className="text-[20px] font-semibold tracking-wide text-white">
                                    {helping.donationBadge.textLine1}{" "}
                                    <span className="text-[#ff9700]">
                                        {helping.donationBadge.textHighlight}
                                    </span>{" "}
                                    {helping.donationBadge.textLine2}
                                </span>
                            </div>
                        </div>

                        {/* Main image */}
                        <div className="absolute left-[100px] top-[65px] h-[630px] w-[500px] overflow-hidden rounded-[28px] border-[7px] border-white shadow-sm">
                            <img
                                src={helping.mainImage.src}
                                alt={helping.mainImage.alt}
                                className="h-full w-full object-cover object-[48%_50%]"
                            />

                            {/* Dark blue overlay */}
                            <div className="absolute inset-0 bg-[#082f59]/35" />

                            {/* Play button */}
                            <button
                                aria-label="Play video"
                                className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff9700] shadow-lg transition hover:scale-105"
                            >
                                <span className="absolute inset-[8px] rounded-full border-2 border-dashed border-[#082f59]" />
                                <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#082f59]" />
                            </button>
                        </div>

                        {/* Bottom image */}
                        <div className="absolute bottom-0 right-0 z-20 h-[260px] w-[300px] overflow-hidden rounded-[25px] border-[7px] border-white shadow-sm">
                            <img
                                src={helping.bottomImage.src}
                                alt={helping.bottomImage.alt}
                                className="h-full w-full object-cover object-[80%_90%]"
                            />
                        </div>

                        {/* Orange connector */}
                        <div className="absolute bottom-[10px] left-[250px] h-[125px] w-[135px] border-b-[3px] border-l-[3px] border-[#ff9700]">
                            <div className="absolute -bottom-[7px] -right-[7px] h-[14px] w-[14px] rounded-full bg-[#ff9700]" />
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="flex flex-col justify-center py-10 lg:pl-4">
                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3">
                            <EyebrowIcon
                                size={32}
                                strokeWidth={1.8}
                                className="text-[#ff9700]"
                            />

                            <span className="font-serif text-[22px] italic text-[#ff9700]">
                                {helping.eyebrow.text}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-[720px] text-[48px] font-bold leading-[1.08] tracking-[-1.5px] text-[#082f59] md:text-[60px]">
                            {helping.title.line1}{" "}
                            <span className="text-[#f39a18]">
                                {helping.title.highlight}
                            </span>{" "}
                            {helping.title.line2}
                        </h1>

                        {/* Description */}
                        <p className="mt-7 max-w-[700px] text-[18px] leading-8 text-[#34383d]">
                            {helping.description}
                        </p>

                        {/* Feature cards */}
                        <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-2">
                            {helping.features.map((feature) => {
                                const FeatureIcon =
                                    iconMap[feature.icon] || UsersRound;
                                return (
                                    <Feature
                                        key={feature.id}
                                        icon={<FeatureIcon size={42} />}
                                        title={feature.title}
                                        text={feature.text}
                                        orange={feature.orange}
                                    />
                                );
                            })}
                        </div>

                        {/* Divider */}
                        <div className="my-7 h-px w-full bg-[#d8dce0]" />

                        {/* Bullet points */}
                        <div className="space-y-5">
                            {helping.bulletPoints.map((point, index) => (
                                <p key={index}>{point}</p>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                            <Link
                                href={helping.button.href}
                                className="group flex h-[82px] items-center justify-between rounded-[40px] bg-[#ff9700] px-7 text-[18px] font-bold text-white transition hover:bg-[#ed8800]"
                            >
                                <span>{helping.button.label}</span>

                                <span className="ml-8 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[#ff9700] transition group-hover:translate-x-1">
                                    <ArrowRight size={25} />
                                </span>
                            </Link>

                            {/* Phone */}
                            <div className="flex h-[82px] items-center gap-5 rounded-[20px] bg-[#e2e8f1] px-7">
                                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#082f59] text-white">
                                    <Phone
                                        size={25}
                                        fill="white"
                                    />
                                </div>

                                <div>
                                    <p className="text-[16px] text-[#34383d]">
                                        {helping.phone.label}
                                    </p>
                                    <a
                                        href={helping.phone.href}
                                        className="text-[20px] font-bold text-[#082f59] hover:underline"
                                    >
                                        {helping.phone.number}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ================= COMPONENTS ================= */

function Feature({
    icon,
    title,
    text,
    orange = false,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
    orange?: boolean;
}) {
    return (
        <div className="flex items-start gap-5">
            <div
                className={`flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full ${
                    orange
                        ? "bg-[#fff0dc] text-[#082f59]"
                        : "bg-[#e2e8f1] text-[#082f59]"
                }`}
            >
                {icon}
            </div>

            <div>
                <h3 className="mb-2 text-[19px] font-bold text-[#082f59]">
                    {title}
                </h3>

                <p className="max-w-[240px] text-[16px] leading-8 text-[#3c4044]">
                    {text}
                </p>
            </div>
        </div>
    );
}
