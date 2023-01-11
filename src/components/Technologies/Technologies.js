import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import { TechnologiesData } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a broad range of technologies in software development.
    </SectionText>
    <List>
      {TechnologiesData.map((item, i) => (
        <ListItem key={i}>
          {item.icon}
          <br />
          <ListContainer>
            <ListTitle>{item.title}</ListTitle>
            <ListParagraph>
              {/* Experience with <br /> */}
              {item.technology}
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
