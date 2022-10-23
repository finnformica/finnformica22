import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { GiAbstract065, GiCirclingFish } from "react-icons/gi";

import { Container, Div1, Div3, SocialIcons, Span } from "./BlogHeaderStyles";

const BlogHeader = () => (
  <Container id="welcome">
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <GiAbstract065 size="3rem" />
          <Span
            style={{ marginLeft: "10px", marginRight: "30px", width: "160px" }}
          >
            Finn Formica
          </Span>
        </a>
      </Link>
    </Div1>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/finnformica">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/finn-formica-29093a1ab"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="mailto:hello@finnformica.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default BlogHeader;
