import styled, { keyframes } from "styled-components";
import { Search } from "@styled-icons/evaicons-solid";

export const SearchBox = styled.section`
  position: relative;
`;

const searchFrames = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 250px;
  }
`;

export const SearchInput = styled.input`
  background-color: var(--secondary);
  border-radius: 10px;
  width: 560px;
  height: 60px;
  box-shadow: 2px 3px 4px #e6221e;
  color: var(--quaternary);
  padding-left: 60px;
  font-size: 18px;

  ::placeholder {
    color: var(--quaternary);
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const SearchSuggestions = styled.div`
  display: ${({ isLoading, suggestions }) =>
    isLoading || suggestions.length ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 51px;
  width: 560px;
  background-color: var(--secondary);
  box-shadow: 2px 3px 4px #e6221e;
  font-weight: 300;
  font-size: 18px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 3;
  animation-name: ${searchFrames};
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  > ul {
    list-style-type: none;
    width: 100%;

    > li {
      color: var(--quaternary);
      margin: 10px 15px;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 11px;
  left: 11px;
  color: var(--quaternary);
`;
