import styled from "styled-components";
import { Add } from "@styled-icons/material-twotone";

export const MainContentSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 100%;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: var(--quartenary);

  > h1 {
    font-size: 64px;
  }

  > h3 {
    font-size: 18px;
  }
`;

export const TagsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--gray);
  font-size: 16px;

  > span {
    padding-left: 50px;
  }
`;

export const Description = styled.section`
  font-size: 24px;
  line-height: 150%;
  color: var(--quartenary);
  padding: 0;
`;

export const WatchLaterButton = styled.button`
  display: flex;
  align-items: center;
  color: var(--secondary);

  > span {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-weight: 700;
  }
`;

export const AddSymbol = styled(Add)``;

export const AvailablePlatforms = styled.section``;
