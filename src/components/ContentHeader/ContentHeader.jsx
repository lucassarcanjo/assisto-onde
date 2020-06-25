import React from "react";

import {
  Header,
  Wrapper,
  Topbar,
  SmallLogo,
  SiteNav,
} from "./ContentHeader.styled";

const ContentHeader = () => {
  return (
    <Header>
      <Wrapper>
        <Topbar>
          <SmallLogo>
            <h1>Assisto Onde?</h1>
          </SmallLogo>
          <SiteNav>
            <a href="">Anuncie</a>
            <a href="">Sobre</a>
            <a href="">Login</a>
          </SiteNav>
        </Topbar>
      </Wrapper>
    </Header>
  );
};

export default ContentHeader;
