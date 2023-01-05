import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = ({}) => {
  return (
    <FooterWrapper>
      <LinkColumn>
        <LinkItem href="#top">Back to top</LinkItem>
      </LinkColumn>

      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "10px",
        }}
      >
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>
              © 2022 - Web app coded by Finn Formica using React + Next.js
            </Slogan>
          </CompanyContainer>

          <SocialContainer>
            <SocialIcons target="_blank" href="https://github.com/finnformica">
              <AiFillGithub size="3rem" alt="link to github" />
            </SocialIcons>
            <SocialIcons
              target="_blank"
              href="https://www.linkedin.com/in/finnformica"
            >
              <AiFillLinkedin size="3rem" alt="link to linkedin" />
            </SocialIcons>
            <SocialIcons target="_blank" href="mailto:hello@finnformica.com">
              <AiFillMail size="3rem" alt="link to mail" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
