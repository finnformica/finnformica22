import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { GiAbstract065 } from "react-icons/gi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container id="top">
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <img src="favicon.png" style={{ width: "36px" }} />
          {/* <GiAbstract065 size="3rem" /> */}
          <Span
            style={{ marginLeft: "10px", marginRight: "30px", width: "160px" }}
          >
            Finn Formica
          </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/finnformica">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/finnformica"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="mailto:hello@finnformica.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
