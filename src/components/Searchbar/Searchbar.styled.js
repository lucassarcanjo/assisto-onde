import styled from "styled-components";
import { Search } from "@styled-icons/evaicons-solid";

export const SearchBox = styled.section`
  position: relative;
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

export const SearchIcon = styled(Search)`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 11px;
  left: 11px;

  color: var(--quaternary);
`;
