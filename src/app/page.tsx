import Hero from "../components/Hero";
import FeaturedGrid from "../components/FeaturedGrid";
import { getFeaturedPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getFeaturedPosts(6); // static/mock data
  return (
      <>
        <Hero />
        <FeaturedGrid posts={posts} />
      </>
  );
}
