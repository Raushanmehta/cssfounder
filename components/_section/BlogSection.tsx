import Image from "next/image";
import Link from "next/link";
import { SquarePen, Calendar, ArrowRight, LucideIcon } from "lucide-react";
import homeData from "@/data/HomeData.json";
import { BlogData } from "@/types/HomeTypes";

const iconMap: Record<string, LucideIcon> = {
    SquarePen,
};

export default function BlogSection() {
    const { blog } = homeData as { blog: BlogData };
    const SubtitleIcon = iconMap[blog.subtitleIcon] || SquarePen;

    return (
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto text-center">
                {/* Subtitle */}
                <div className="flex items-center justify-center gap-2 mb-3">
                    <SubtitleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff5500]" />

                    <span className="text-sm sm:text-base font-bold tracking-widest text-[#2d4d3a] uppercase">
                        {blog.subtitle}
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
                        leading-tight
                        text-[#111827]
                        mb-5
                    "
                >
                    {blog.title.prefix}{" "}
                    <span className="text-[#ff5500]">
                        {blog.title.highlight}
                    </span>
                </h2>

                {/* Decorative Line */}
                <div className="w-14 sm:w-16 h-1 bg-[#ff5500] mx-auto rounded-full mb-5" />

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
                    "
                >
                    {blog.description}
                </p>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-14">
                    {blog.posts.map((post) => (
                        <article
                            key={post.id}
                            className="
                                bg-white
                                rounded-2xl
                                overflow-hidden
                                shadow-sm
                                border
                                border-gray-100
                                hover:shadow-xl
                                hover:-translate-y-1
                                transition-all
                                duration-300
                                flex
                                flex-col
                                text-left
                            "
                        >
                            {/* Image */}
                            <div className="relative w-full h-56 sm:h-64 lg:h-60">
                                <Image
                                    src={post.imageSrc}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />

                                {/* Category */}
                                <span
                                    className={`
                                        absolute
                                        top-4
                                        left-4
                                        ${post.categoryBg}
                                        text-white
                                        text-sm
                                        font-semibold
                                        px-4
                                        py-2
                                        rounded-lg
                                        shadow-sm
                                    `}
                                >
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base font-medium mb-4">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff5500]" />

                                        <span>{post.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="
                                            text-xl
                                            sm:text-2xl
                                            font-bold
                                            text-[#111827]
                                            leading-snug
                                            mb-4
                                            hover:text-[#ff5500]
                                            transition-colors
                                        "
                                    >
                                        <Link href={post.href}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="
                                            text-gray-500
                                            text-sm
                                            sm:text-lg
                                            leading-relaxed
                                            mb-7
                                        "
                                    >
                                        {post.description}
                                    </p>
                                </div>

                                {/* Read More */}
                                <Link
                                    href={post.href}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-base
                                        font-bold
                                        text-[#ff5500]
                                        hover:text-[#d94800]
                                        transition-colors
                                        w-fit
                                    "
                                >
                                    {blog.readMoreLabel}

                                    <span className="w-8 h-8 rounded-full bg-[#ff5500] text-white flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Blogs */}
                <Link
                    href={blog.viewAll.href}
                    className="
                        inline-flex
                        items-center
                        gap-3
                        bg-[#ff5500]
                        hover:bg-[#d94800]
                        text-white
                        font-bold
                        text-base
                        sm:text-lg
                        px-8
                        sm:px-10
                        py-3.5
                        sm:py-4
                        rounded-full
                        shadow-md
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >
                    {blog.viewAll.label}

                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}