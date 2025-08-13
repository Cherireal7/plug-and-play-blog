import "./globals.css";
import React from "react";// must include Tailwind directives (@tailwind base; components; utilities)

export const metadata = {
    title: "Plug & Play Blog",
    description: "Baseline layout for hydration testing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // suppressHydrationWarning prevents noise if an extension injects attrs on <html>
        <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
        </body>
        </html>
    );
}
