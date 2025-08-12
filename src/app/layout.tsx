import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata: Metadata = {
    title: "Plug & Play Blog",
    description: "Drop-in blog for Next.js + Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
