import Link from "next/link";
import { getAllPosts } from "../../lib/blog";

export default function Blog({ posts }) {
  return (
    <main>
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
