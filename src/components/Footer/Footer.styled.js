import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  padding: 20px;

  > a {
    text-decoration: none;
    color: var(--primary);
    padding-left: 6px;
  }
`;
