import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(blogDir, file),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      slug,
      ...data,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(blogDir, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  return matter(fileContent);
}
