import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import Link from "next/link";

import { BlogLayout } from "../../layout/BlogLayout";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import {
  ExternalLinks,
  Img,
  BlogHeader,
  TitleSection,
} from "../../styles/BlogStyles";

const PostPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <BlogLayout>
      <Section>
        <BlogHeader>
          <Img
            src={cover_image}
            style={{
              borderRadius: "30px",
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
            color: "#cfcfcf",
            textDecoration: "none",
            lineHeight: 1.7,
          }}
        ></div>
      </Section>
    </BlogLayout>
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
