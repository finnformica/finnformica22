import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BlogLayout } from "../../layout/BlogLayout";
import { GridContainer } from "../../components/Projects/ProjectsStyles";
import PostCard from "../../components/PostCard/PostCard";
import { sortByDate } from "../../utils";

import { Section, SectionTitle } from "../../styles/GlobalComponents";

const Blog = ({ posts }) => {
  return (
    <BlogLayout>
      <Section id="posts">
        <SectionTitle>Latest</SectionTitle>
        <GridContainer>
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </GridContainer>
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
      posts: posts.sort(sortByDate),
    },
  };
}

export default Blog;
