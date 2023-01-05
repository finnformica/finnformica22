import Link from "next/link";
import Image from "next/image";
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

const Header = ({ hidden }) => (
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
          <div style={{ width: "36px", height: "36px", position: "relative" }}>
            <Image alt="website logo" src="/favicon.png" layout="fill" />
          </div>

          <Span
            style={{ marginLeft: "10px", marginRight: "30px", width: "160px" }}
          >
            Finn Formica
          </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {!hidden && (
        <>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>

          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>

          <Link href="/blog">
            <NavLink>Blog</NavLink>
          </Link>
        </>
      )}
    </Div2>

    <Div3>
      <SocialIcons target="_blank" href="https://github.com/finnformica">
        <AiFillGithub size="3rem" alt="link to github" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/finnformica"
      >
        <AiFillLinkedin size="3rem" alt="link to linkdin" />
      </SocialIcons>
      <SocialIcons target="_blank" href="mailto:hello@finnformica.com">
        <AiFillMail size="3rem" alt="link to mail" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
