import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDateUTC } from "@/lib/date";

export const metadata = { title: "Blog" };

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-6 text-3xl font-bold text-white">Blog</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => (
                    <article
                        key={p.slug}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                    >
                        <h2 className="text-lg font-semibold text-white">
                            <Link href={`/blog/${p.slug}`}>
                                <span className="absolute inset-0" />
                                {p.title}
                            </Link>
                        </h2>

                        {p.excerpt && (
                            <p className="mt-3 text-sm text-zinc-400">{p.excerpt}</p>
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
    );
}
