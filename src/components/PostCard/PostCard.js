import Link from "next/link";

import {
  PostFooter,
  PostDate,
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  TitleContent,
  Img,
} from "./PostCardStyles";

const PostCard = ({
  post: {
    slug,
    frontmatter: { cover_image, title, excerpt, date },
  },
}) => (
  <BlogCard>
    <Img src={cover_image} />
    <TitleContent>
      <HeaderThree title="true">{title}</HeaderThree>
      <Hr />
    </TitleContent>
    <CardInfo>{excerpt}</CardInfo>
    <PostFooter>
      <PostDate>{date}</PostDate>
      <Link href={`/blog/${slug}`}>
        <ExternalLinks>Read more</ExternalLinks>
      </Link>
    </PostFooter>
  </BlogCard>
);

export default PostCard;
