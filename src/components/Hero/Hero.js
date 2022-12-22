import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding style={{ paddingLeft: "0" }}>
    <LeftSection>
      <SectionTitle main center>
        Welcome!
      </SectionTitle>
      <SectionText
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          textShadow:
            "-5px 0 8px #0F1624, 0 5px 8px #0F1624, 5px 0 8px #0F1624, 0 -5px 8px #0F1624",
        }}
      >
        I am a Mechanical and Electrical engineer graduate completing a
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
