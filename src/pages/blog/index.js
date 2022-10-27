import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BlogLayout } from "../../layout/BlogLayout";
import { GridContainer } from "../../components/Projects/ProjectsStyles";
import PostCard from "../../components/PostCard/PostCard";
import { sortByDate } from "../../utils";

import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Finn Formica | Blog</title>
      </Head>
      <BlogLayout>
        <Section id="posts" style={{ paddingBottom: "15px" }}>
          <SectionTitle>Blog</SectionTitle>
          <SectionText>
            Whilst working on software projects I have stumbled across topics
            that may be useful or interesting to others. I have written these
            posts as a high-level way of documenting my thoughts.
          </SectionText>
          <GridContainer>
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </GridContainer>
        </Section>
      </BlogLayout>
    </>
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
