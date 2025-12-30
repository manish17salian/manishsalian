import { getAllPosts, getPostBySlug } from "../../lib/blog";
import { remark } from "remark";
import html from "remark-html";

export default function Post({ post }) {
  return (
    <main>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data, content } = getPostBySlug(params.slug);
  const processed = await remark().use(html).process(content);

  return {
    props: {
      post: {
        ...data,
        content: processed.toString(),
      },
    },
  };
}
