"use client";

import React from "react";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { IconType } from "react-icons";
import homeData from "@/data/HomeData.json";
import { FooterData } from "@/types/HomeTypes";

const socialIconMap: Record<string, IconType> = {
    FaFacebook,
    BsTwitter,
    LiaLinkedin,
};

export default function Footer() {
    const { footer } = homeData as { footer: FooterData };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden bg-[#1a1a1a] text-gray-300 font-sans">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url('${footer.backgroundImage}')`,
                }}
            />

            {/* Main Content */}
            <div className="relative mx-auto w-full max-w-[1650px] px-4 sm:px-6 lg:px-8 xl:px-18 pt-12 sm:pt-14 lg:pt-16 pb-7">
                {/* Newsletter + Contact */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pb-10 sm:pb-12 border-b border-gray-800">
                    {/* Newsletter */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center sm:text-left leading-tight">
                                {footer.newsletter.titleLine1}
                                <br className="hidden sm:block" />
                                {footer.newsletter.titleLine2}
                            </h3>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex w-full max-w-lg bg-gray-700 rounded-full p-1.5"
                            >
                                <input
                                    type="email"
                                    placeholder={footer.newsletter.placeholder}
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        px-4
                                        sm:px-5
                                        py-3
                                        text-base
                                        sm:text-lg
                                        text-white
                                        focus:outline-none
                                        placeholder:text-gray-400
                                    "
                                />

                                <button
                                    type="submit"
                                    className="
                                        shrink-0
                                        bg-[#f15a24]
                                        hover:bg-[#d94e1f]
                                        text-white
                                        px-5
                                        sm:px-7
                                        py-3
                                        rounded-full
                                        text-base
                                        sm:text-lg
                                        font-semibold
                                        transition
                                    "
                                >
                                    {footer.newsletter.button}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#333333] flex items-center justify-center text-white">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm sm:text-base text-gray-400 mb-1">
                                    {footer.hotline.label}
                                </p>

                                <a
                                    href={footer.hotline.href}
                                    className="block text-base sm:text-lg font-bold text-white hover:text-[#f15a24] truncate"
                                >
                                    {footer.hotline.number}
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#333333] flex items-center justify-center text-white">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm sm:text-base text-gray-400 mb-1">
                                    {footer.emailContact.label}
                                </p>

                                <a
                                    href={footer.emailContact.href}
                                    className="block text-base sm:text-lg font-bold text-white hover:text-[#f15a24] truncate"
                                >
                                    {footer.emailContact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 py-12 sm:py-14">
                    {/* About */}
                    <div>
                        <div className="mb-5">
                            <Link
                                href="/"
                                className="inline-block text-[#f15a24] text-3xl sm:text-4xl font-bold"
                            >
                                {footer.company.name}
                            </Link>

                            <p className="text-sm sm:text-base text-gray-400 tracking-widest uppercase mt-2">
                                {footer.company.tagline}
                            </p>
                        </div>

                        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-7 max-w-sm">
                            {footer.company.description}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {footer.socialLinks.map((item) => {
                                const Icon = socialIconMap[item.icon] || FaFacebook;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        aria-label={item.name}
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            border
                                            border-gray-700
                                            flex
                                            items-center
                                            justify-center
                                            text-gray-400
                                            hover:text-white
                                            hover:border-white
                                            transition
                                        "
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {footer.quickLinks.title}
                        </h4>

                        <div className="flex items-center gap-1 mb-6">
                            <span className="w-5 h-[2px] bg-[#f15a24]" />
                            <span className="w-3 h-[2px] bg-[#f15a24]" />
                        </div>

                        <ul className="space-y-4 text-base sm:text-lg text-gray-400">
                            {footer.quickLinks.items.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-[#f15a24] transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {footer.services.title}
                        </h4>

                        <div className="flex items-center gap-1 mb-6">
                            <span className="w-5 h-[2px] bg-[#f15a24]" />
                            <span className="w-3 h-[2px] bg-[#f15a24]" />
                        </div>

                        <ul className="space-y-4 text-base sm:text-lg text-gray-400">
                            {footer.services.items.map((service, idx) => (
                                <li key={`${service.name}-${idx}`}>
                                    <Link
                                        href={service.href}
                                        className="hover:text-[#f15a24] transition"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {footer.contact.title}
                        </h4>

                        <div className="flex items-center gap-1 mb-6">
                            <span className="w-5 h-[2px] bg-[#f15a24]" />
                            <span className="w-3 h-[2px] bg-[#f15a24]" />
                        </div>

                        <ul className="space-y-6 text-base sm:text-lg text-gray-400">
                            {/* Address */}
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15a24] shrink-0 mt-1" />

                                <span className="leading-relaxed">
                                    {footer.contact.address}
                                </span>
                            </li>

                            {/* Phone */}
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15a24] shrink-0" />

                                <a
                                    href={footer.contact.phoneHref}
                                    className="hover:text-white transition"
                                >
                                    {footer.contact.phone}
                                </a>
                            </li>

                            {/* Email */}
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15a24] shrink-0" />

                                <a
                                    href={footer.contact.emailHref}
                                    className="break-all hover:text-white transition"
                                >
                                    {footer.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-7 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-400 gap-5 text-center md:text-left">
                    <p>
                        Copyright © {footer.copyright.year}{" "}
                        <span className="text-[#f15a24] font-semibold">
                            {footer.copyright.companyName}
                        </span>{" "}
                        {footer.copyright.rights}
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                        {footer.legalLinks.map((legal) => (
                            <Link
                                key={legal.name}
                                href={legal.href}
                                className="hover:text-white transition"
                            >
                                {legal.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll To Top */}
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to Top"
                className="
                    fixed
                    bottom-4
                    right-4
                    sm:bottom-6
                    sm:right-6
                    z-50
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    rounded-full
                    bg-white
                    text-[#1a1a1a]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    border
                    border-emerald-400
                    hover:bg-emerald-50
                    transition
                "
            >
                <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
            </button>
        </footer>
    );
}