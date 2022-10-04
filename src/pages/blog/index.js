import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BlogLayout } from "../../layout/BlogLayout";
import { GridContainer } from "./BlogStyles";

// import { PostCard } from "../../components/PostCard/PostCard";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "./PostCardStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

// create personal blog here:
// https://youtu.be/MrjeefD8sac

const Blog = ({ posts }) => {
  return (
    <BlogLayout>
      <Section id="posts">
        <SectionTitle>Dev Blog</SectionTitle>
        <GridContainer>
          {posts.map((post, index) => (
            <BlogCard key={index}>
              <Img src={post.frontmatter.cover_image} />
              <TitleContent>
                <HeaderThree title="true">{post.frontmatter.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{post.frontmatter.excerpt}</CardInfo>
              <div style={{ margin: "4rem 0 4rem 0" }}>
                <ExternalLinks target="_blank" href="#">
                  Read more
                </ExternalLinks>
              </div>
            </BlogCard>
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
      posts,
    },
  };
}

export default Blog;
