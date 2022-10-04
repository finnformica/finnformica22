import Link from "next/link";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  TitleContent,
  Img,
} from "./PostCardStyles";

const PostCard = ({ post, id }) => {
  return (
    <BlogCard key={id}>
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
  );
};

export default PostCard;
