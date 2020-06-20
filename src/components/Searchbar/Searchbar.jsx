import React from "react";

import { SearchInput, SearchBox, SearchIcon } from "./Searchbar.styled";

const Searchbar = () => {
  return (
    <>
      <SearchBox>
        <SearchIcon />
        <SearchInput placeholder="Digite aqui seu filme/série favorito"></SearchInput>
      </SearchBox>
    </>
  );
};

export default Searchbar;
