import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <p className="text-sm text-zinc-400" suppressHydrationWarning>
                        © {new Date().getUTCFullYear()} Plug & Play Blog. All rights reserved.
                    </p>
                    <nav>
                        <ul className="flex items-center gap-5 text-sm">
                            <li><Link className="text-zinc-300 hover:text-white" href="/">Privacy</Link></li>
                            <li><Link className="text-zinc-300 hover:text-white" href="/">Terms</Link></li>
                            <li><Link className="text-zinc-300 hover:text-white" href="/">RSS</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
