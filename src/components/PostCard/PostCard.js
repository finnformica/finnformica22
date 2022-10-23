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
    <div style={{ margin: "4rem 0 4rem 0" }}>
      <strong style={{ color: "#b9d9eb", marginRight: "40px" }}>
        <span>{date}</span>
      </strong>
      <Link href={`/blog/${slug}`}>
        <ExternalLinks>Read more</ExternalLinks>
      </Link>
    </div>
  </BlogCard>
);

export default PostCard;
