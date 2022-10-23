import React from "react";

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
  UtilityList,
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
        ({ id, image, title, description, tags, source, github }) => (
          <BlogCard key={id}>
            <Img src={image} />
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
