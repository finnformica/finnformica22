import Link from "next/link";
import { BlogLayout } from "../layout/BlogLayout";
import {
  Section,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "../styles/GlobalComponents";
import { ExternalLinks } from "../components/Projects/ProjectsStyles";

const ErrorPage404 = (props) => {
  return (
    <BlogLayout error={true}>
      <Section style={{ padding: "15%" }}>
        <SectionDivider style={{ marginBottom: "30px" }} />
        <SectionTitle>Not found</SectionTitle>
        <SectionText>The page you're looking for was not found.</SectionText>
        <Link href="/">
          <ExternalLinks style={{ width: "175px", margin: 0 }}>
            Return to home
          </ExternalLinks>
        </Link>
      </Section>
    </BlogLayout>
  );
};

export default ErrorPage404;
