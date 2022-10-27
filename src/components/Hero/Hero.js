import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome!
      </SectionTitle>
      <SectionText>
        I am a Mechanical and Electrical engineer graduate, completing a
        Financial Technology with Data Science MSc. I have a keen interest in
        Data Science, Web Development, and Artificial Intelligence.
      </SectionText>
      {/* <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
