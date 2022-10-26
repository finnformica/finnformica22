import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 2px 2px 15px rgba(80, 78, 78, 0.5);
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 1.6rem;
  padding: 1rem 2.5rem;
  margin: auto 1rem;
  border-radius: 25px;
  border: 1px solid white;
  transition: 0.5s;
  &:hover {
    border-radius: 8px;
    color: black;
    background: white;
  }
`;

export const BlogHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const TitleSection = styled.div`
  margin-left: 30px;
  width: 50%;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 0;
    width: 100%;
  }
`;
