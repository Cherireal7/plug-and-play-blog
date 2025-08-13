// app/page.tsx
export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <section className="text-center p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to Plug & Play Blog
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    This is a minimal Next.js + Tailwind CSS landing page for testing.
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full p-8">
                {Array.from({ length: 6 }).map((_, index) => (
                    <article
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Blog Post {index + 1}
                        </h2>
                        <p className="text-gray-600">
                            This is a short excerpt for the blog post. Replace with actual content later.
                        </p>
                    </article>
                ))}
            </section>
        </main>
    );
}
