import { getAllPosts } from "./lib/post";

export default async function BlogSection() {
  const posts = await getAllPosts();

  return (
    <section id="blog" style={{ padding: "4rem 1rem" }}>
      <h2>Blog</h2>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {posts.map((p) => (
            <article key={p.slug} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: 12 }}>
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <small>{p.date}</small>
              {p.excerpt ? <p>{p.excerpt}</p> : null}
              <a href={`/blog/${p.slug}`}>Read more</a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
