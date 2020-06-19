import React from "react";

import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      Made with &nbsp;
      <span role="img" aria-label="love">
        ❤️
      </span>
      &nbsp;by
      <a
        href="https://github.com/lucassarcanjo"
        target="_blank"
        rel="noreferrer noopener"
        title="Github"
      >
        Lucas Arcanjo
      </a>
    </FooterContainer>
  );
};

export default Footer;
