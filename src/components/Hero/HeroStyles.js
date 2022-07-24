import styled from "styled-components";

export const LeftSection = styled.div`
  width: 70rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 45rem;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
