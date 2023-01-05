import Link from "next/link";
import { Layout } from "../layout/Layout";
import {
  Section,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "../styles/GlobalComponents";
import { ExternalLinks } from "../components/Projects/ProjectsStyles";

const ErrorPage404 = (props) => {
  return (
    <Layout error={true}>
      <Section style={{ padding: "15%" }}>
        <SectionDivider style={{ marginBottom: "40px" }} />
        <SectionTitle>Not found</SectionTitle>
        <SectionText>The page you're looking for was not found.</SectionText>
        <Link href="/">
          <ExternalLinks style={{ width: "173px", margin: 0 }}>
            Return to home
          </ExternalLinks>
        </Link>
      </Section>
    </Layout>
  );
};

export default ErrorPage404;
