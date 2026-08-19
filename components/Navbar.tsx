"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Phone,
    Heart,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import homeData from "@/data/HomeData.json";
import { NavbarData } from "@/types/HomeTypes";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);

    const { navbar } = homeData as { navbar: NavbarData };

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setPagesOpen(false);
    };

    return (
        <header className="absolute left-0 top-0 z-50 w-full">
            <div className="mx-auto w-full max-w-[1650px] px-4 sm:px-6 lg:px-8 xl:px-18">
                <nav className="flex h-[80px] items-center justify-between sm:h-[90px] lg:h-[100px] xl:h-[105px]">
                    {/* ================= LOGO ================= */}
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex shrink-0 items-center bg-transparent"
                    >
                        <img
                            src={navbar.logo.src}
                            alt={navbar.logo.alt}
                            className="h-[58px] w-auto object-contain bg-transparent sm:h-[68px] lg:h-[76px] xl:h-[85px]"
                        />
                    </Link>

                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <div className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
                        {navbar.navLinks.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative whitespace-nowrap py-8 text-[15px] font-medium transition-all duration-300 xl:text-[17px] 2xl:text-[18px] ${index === 0
                                    ? "text-orange-500"
                                    : "text-white hover:text-orange-500"
                                    }`}
                            >
                                {item.name}

                                {/* Active underline */}
                                {index === 0 && (
                                    <span className="absolute bottom-[10px] left-0 h-[3px] w-full bg-orange-500" />
                                )}
                            </Link>
                        ))}

                        {/* ================= PAGES ================= */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setPagesOpen(!pagesOpen)}
                                className="flex items-center gap-1 whitespace-nowrap py-8 text-[15px] font-medium text-white transition-all duration-300 hover:text-orange-500 xl:text-[17px] 2xl:text-[18px]"
                            >
                                {navbar.pages.name}

                                <ChevronDown
                                    size={17}
                                    className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {pagesOpen && (
                                <div className="absolute left-0 top-[75px] w-48 overflow-hidden rounded-lg border border-white/10 bg-black/95 shadow-2xl backdrop-blur-md">
                                    {navbar.pages.links.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setPagesOpen(false)}
                                            className="block px-5 py-3 text-sm text-white transition-all duration-200 hover:bg-orange-500"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ================= CONTACT ================= */}
                        <Link
                            href={navbar.contact.href}
                            className="whitespace-nowrap py-8 text-[15px] font-medium text-white transition-all duration-300 hover:text-orange-500 xl:text-[17px] 2xl:text-[18px]"
                        >
                            {navbar.contact.name}
                        </Link>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="hidden items-center gap-4 lg:flex xl:gap-5">
                        {/* Phone */}
                        <div className="flex items-center gap-2 xl:gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 xl:h-14 xl:w-14">
                                <Phone
                                    size={21}
                                    className="text-white xl:size-[25px]"
                                />
                            </div>

                            <div className="hidden xl:block">
                                <p className="text-sm font-medium text-white 2xl:text-[15px]">
                                    {navbar.phone.label}
                                </p>

                                <a
                                    href={navbar.phone.href}
                                    className="whitespace-nowrap text-sm font-bold text-orange-500 2xl:text-[17px]"
                                >
                                    {navbar.phone.number}
                                </a>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden h-[55px] w-px bg-white/30 xl:block" />

                        {/* Donate */}
                        <Link
                            href={navbar.donate.href}
                            className="flex h-12 items-center gap-2 whitespace-nowrap rounded-[14px] bg-orange-500 px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 xl:h-[54px] xl:px-6 xl:text-[17px]"
                        >
                            <Heart
                                size={20}
                                fill="currentColor"
                            />
                            {navbar.donate.label}
                        </Link>
                    </div>

                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-orange-500 hover:text-orange-500 lg:hidden sm:h-11 sm:w-11"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* ================= MOBILE MENU ================= */}
                {mobileOpen && (
                    <div className="max-h-[calc(100vh-90px)] overflow-y-auto rounded-b-2xl border-t border-white/10 bg-black/95 px-4 py-4 shadow-2xl backdrop-blur-xl sm:px-6 sm:py-5 lg:hidden">
                        {/* Main Links */}
                        {navbar.navLinks.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMobileMenu}
                                className={`block border-b border-white/10 py-3.5 text-[15px] font-medium transition-colors sm:py-4 sm:text-base ${index === 0
                                    ? "text-orange-500"
                                    : "text-white hover:text-orange-500"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Mobile Pages */}
                        <button
                            type="button"
                            onClick={() => setPagesOpen(!pagesOpen)}
                            className="flex w-full items-center justify-between border-b border-white/10 py-3.5 text-left text-[15px] font-medium text-white transition-colors hover:text-orange-500 sm:py-4 sm:text-base"
                        >
                            <span>{navbar.pages.name}</span>

                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Pages Submenu */}
                        {pagesOpen && (
                            <div className="ml-3 border-l border-orange-500/50 pl-4">
                                {navbar.pages.links.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block py-2.5 text-sm text-white/80 transition-colors hover:text-orange-500"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Contact */}
                        <Link
                            href={navbar.contact.href}
                            onClick={closeMobileMenu}
                            className="block border-b border-white/10 py-3.5 text-[15px] font-medium text-white transition-colors hover:text-orange-500 sm:py-4 sm:text-base"
                        >
                            {navbar.contact.name}
                        </Link>

                        {/* Mobile Phone */}
                        <div className="mt-5 flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 sm:h-12 sm:w-12">
                                <Phone
                                    size={20}
                                    className="text-white"
                                />
                            </div>

                            <div>
                                <p className="text-xs text-white/80 sm:text-sm">
                                    {navbar.phone.label}
                                </p>

                                <a
                                    href={navbar.phone.href}
                                    className="text-sm font-semibold text-orange-500 sm:text-base"
                                >
                                    {navbar.phone.number}
                                </a>
                            </div>
                        </div>

                        {/* Mobile Donate */}
                        <Link
                            href={navbar.donate.href}
                            onClick={closeMobileMenu}
                            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 sm:h-[52px] sm:text-base"
                        >
                            <Heart
                                size={19}
                                fill="currentColor"
                            />
                            {navbar.donate.label}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}