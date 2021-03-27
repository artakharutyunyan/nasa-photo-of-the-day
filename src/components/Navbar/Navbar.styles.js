import styled from "styled-components";

export const NavBarDiv = styled.div`
  h1 {
    font-size: 5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  margin: auto;
`;
export const NavSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin: auto;
  @media (max-width: 800px) {
    display: block;
    margin-top: 5%;
  }
`;
