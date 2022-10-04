import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BlogLayout } from "../../layout/BlogLayout";
import { Section } from "../../styles/GlobalComponents";

// create personal blog here:
// https://youtu.be/MrjeefD8sac

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <BlogLayout>
      <Section>
        <h1>Welcome to my blog!</h1>
      </Section>
    </BlogLayout>
  );
};

export async function getStaticProps() {
  // get files from the posts dir
  const files = fs.readdirSync(path.join("src/posts"));

  // get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
