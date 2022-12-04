import { useEffect } from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Link from "next/link";
import Head from "next/head";

import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";

import { BlogLayout } from "../../layout/BlogLayout";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import {
  ExternalLinks,
  Img,
  BlogHeader,
  TitleSection,
} from "../../styles/BlogStyles";
import { SectionDivider } from "../../styles/GlobalComponents";

// set options for syntax highlighting
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
});

const PostPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  useEffect(() => {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <Head>
        <title>Finn Formica - Blog</title>
      </Head>

      <BlogLayout>
        <Section>
          <BlogHeader>
            <Img
              src={cover_image}
              style={{
                borderRadius: "20px",
                marginBottom: "10px",
              }}
            />
            <TitleSection>
              <SectionTitle>{title}</SectionTitle>
              <div style={{ margin: "4rem 0 4rem 0" }}>
                <strong style={{ color: "#b9d9eb", marginRight: "40px" }}>
                  <span>{date}</span>
                </strong>
                <Link href="/blog">
                  <ExternalLinks style={{ width: "115px" }}>
                    Go back
                  </ExternalLinks>
                </Link>
              </div>
            </TitleSection>
          </BlogHeader>

          <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
            style={{
              backgroundColor: "rgba(27,39,64, 0.5)",
              borderRadius: "10px",
              padding: "25px",
              color: "#cfcfcf",
              lineHeight: 1.7,
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          ></div>
          <SectionDivider style={{ marginTop: "35px" }} />
        </Section>
      </BlogLayout>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: { frontmatter, slug, content },
  };
}

export default PostPage;
