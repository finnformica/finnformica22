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

const Footer = ({ hidden }) => {
  return (
    <FooterWrapper>
      {/* <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hello@finnformica.com">
            hello@finnformica.com
          </LinkItem>
        </LinkColumn>
      </LinkList> */}
      {!hidden && (
        <LinkColumn>
          <LinkItem href="#top">Back to top</LinkItem>
        </LinkColumn>
      )}

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
          </SocialContainer>
        </SocialIconsContainer>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
