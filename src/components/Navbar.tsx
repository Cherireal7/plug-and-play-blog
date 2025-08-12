"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 6);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]); // close on route change

    return (
        <header
            className={[
                "sticky top-0 z-50 transition-shadow",
                scrolled ? "shadow-soft" : "",
            ].join(" ")}
        >
            <div
                className={[
                    "mx-auto max-w-6xl px-4",
                    // frosted / glass effect
                    "backdrop-blur-md bg-white/10 dark:bg-zinc-900/30",
                    "border-b border-white/10 dark:border-white/10",
                    "rounded-b-2xl",
                ].join(" ")}
            >
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-semibold tracking-tight"
                    >
                        <span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_16px_4px_rgba(99,102,241,0.6)]" />
                        <span>Plug & Play Blog</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className={[
                                            "text-sm/6 transition-colors",
                                            pathname === l.href
                                                ? "text-brand-300"
                                                : "text-zinc-200 hover:text-white",
                                        ].join(" ")}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA + mobile toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/blog"
                            className="hidden rounded-xl bg-brand-600 px-3 py-2 text-sm font-medium text-white shadow-soft hover:bg-brand-500 md:inline-block"
                        >
                            Read the Blog
                        </Link>
                        <button
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
                            aria-label="Toggle menu"
                            onClick={() => setOpen((s) => !s)}
                        >
                            <svg
                                className="h-5 w-5 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile sheet */}
                <div
                    className={[
                        "md:hidden overflow-hidden transition-[max-height] duration-300",
                        open ? "max-h-64" : "max-h-0",
                    ].join(" ")}
                >
                    <nav className="pb-3">
                        <ul className="flex flex-col gap-2">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className={[
                                            "block rounded-lg px-3 py-2 text-sm",
                                            pathname === l.href
                                                ? "bg-white/10 text-white"
                                                : "text-zinc-200 hover:bg-white/10 hover:text-white",
                                        ].join(" ")}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/blog"
                                    className="mt-1 block rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-brand-500"
                                >
                                    Read the Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
