import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-500/10 via-transparent to-transparent">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-32">
                <div className="max-w-2xl text-center mx-auto backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-3xl shadow-soft">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Plug & Play Blog
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-300">
                        Drop this blog into any Next.js project. Powered by Supabase,
                        production-ready in minutes.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <Link
                            href="/blog"
                            className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-brand-500"
                        >
                            View Blog
                        </Link>
                        <Link
                            href="/"
                            className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                        >
                            How it Works
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
