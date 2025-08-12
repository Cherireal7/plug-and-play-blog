import Link from "next/link";
import { formatDateUTC } from "@/lib/date";

type Post = {
    slug: string;
    title: string;
    excerpt?: string | null;
    published_at?: string | null;
};

export default function FeaturedGrid({ posts }: { posts: Post[] }) {
    if (!posts?.length) return null;

    return (
        <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">Featured Posts</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((p) => (
                        <article
                            key={p.slug}
                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                        >
                            <h3 className="text-lg font-semibold text-white">
                                <Link href={`/blog/${p.slug}`}>
                                    <span className="absolute inset-0" />
                                    {p.title}
                                </Link>
                            </h3>

                            {p.excerpt && (
                                <p className="mt-3 line-clamp-3 text-sm text-zinc-400">{p.excerpt}</p>
                            )}

                            {p.published_at && (
                                <time className="mt-4 block text-xs text-zinc-500" dateTime={p.published_at}>
                                    {formatDateUTC(p.published_at)}
                                </time>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
