export type Post = {
    slug: string;
    title: string;
    excerpt?: string | null;
    body?: string | null;
    cover?: string | null;
    published_at?: string | null;
    featured?: boolean;
};

export const POSTS: Post[] = [
    {
        slug: "hello-world",
        title: "Hello World",
        excerpt: "Kickstarting the plug-and-play blog.",
        body: "## Hello\nThis is a mock post. Replace with Supabase later.",
        published_at: "2025-08-12",
        featured: true,
    },
    {
        slug: "architecture",
        title: "Architecture Overview",
        excerpt: "Next.js + Supabase + ISR.",
        body: "### Stack\nNext.js App Router + Supabase.\n",
        published_at: "2025-08-12",
        featured: true,
    },
    {
        slug: "importer",
        title: "Markdown Importer",
        excerpt: "Write in MD, ship to DB.",
        body: "CLI parses front-matter and upserts rows.",
        published_at: "2025-08-12",
        featured: true,
    },
    {
        slug: "why-cache-tags",
        title: "Why Cache Tags Matter",
        excerpt: "Deterministic revalidation beats time-based.",
        body: "Use revalidateTag('posts') on publish.",
        published_at: "2025-08-12",
        featured: false,
    },
];

// helpers
export function getFeaturedPosts(limit = 6) {
    return POSTS.filter((p) => p.featured).slice(0, limit);
}

export function getAllPosts() {
    return [...POSTS].sort((a, b) =>
        (b.published_at ?? "").localeCompare(a.published_at ?? "")
    );
}

export function getPostBySlug(slug: string) {
    return POSTS.find((p) => p.slug === slug) ?? null;
}
