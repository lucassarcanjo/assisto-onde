import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(
      180deg,
      #333333 0%,
      #333333 0.01%,
      rgba(195, 195, 195, 0.00520885) 54.69%,
      #333333 100%
    ),
    url("https://images.justwatch.com/backdrop/8704173/s1440/interestelar") top
      center no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
`;

export const Wrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 100%;
`;

export const Topbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const SmallLogo = styled.div`
  > h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.025em;
    color: var(--quaternary);
  }
`;

export const SiteNav = styled(Topbar)`
  margin-right: 55px;
  padding: 0;

  > a {
    text-decoration: none;
    color: var(--quaternary);
    font-size: 18px;
  }
`;
