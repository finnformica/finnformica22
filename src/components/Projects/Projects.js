import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects" style={{ paddingBottom: "15px" }}>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ image, title, description, tags, source, github }, id) => (
          <BlogCard key={id}>
            <Img src={image} alt="project card image" />
            <TitleContent>
              <HeaderThree title="true">{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <Hr style={{ background: "grey", marginTop: "30px" }} />
              <TitleContent style={{ fontWeight: "500" }}>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <div style={{ margin: "2rem 0 4rem 0" }}>
              <ExternalLinks target="_blank" href={github}>
                GitHub
              </ExternalLinks>
              {source && (
                <ExternalLinks target="_blank" href={source}>
                  Source
                </ExternalLinks>
              )}
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
