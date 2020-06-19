import React from "react";

import { Searchbar, Footer } from "../../components";

import { HomeWrapper, Logo } from "./HomeRoute.styled";

const HomeRoute = () => {
  return (
    <>
      <HomeWrapper>
        <Logo>Assisto Onde?</Logo>
        <Searchbar></Searchbar>
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default HomeRoute;
