import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { GridContainer } from "../../components/Projects/ProjectsStyles";
import PostCard from "../../components/PostCard/PostCard";
import { sortByDate } from "../../utils";

import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Layout } from "../../layout/Layout";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Finn Formica - Blog</title>
        <meta
          name="keywords"
          content="personal blog, nextjs, web development, data science"
        />
        <meta
          name="description"
          content="Hi, I am an aspiring software engineer and data science masters student - welcome to my personal blog!"
        />
      </Head>
      <Layout hidden={true}>
        <Section id="posts" style={{ paddingBottom: "15px" }}>
          <SectionTitle>Blog</SectionTitle>
          <SectionText>
            Whilst working on projects I have often wanted to make a log of some
            my experiences as I journey through the software space. This blog is
            my attempt at documenting my thoughts and experiences.
          </SectionText>
          <GridContainer>
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </GridContainer>
        </Section>
      </Layout>
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
