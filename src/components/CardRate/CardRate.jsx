import React from "react";

import { Rate, StarOutlineIcon, StarContainer } from "./CardRate.styled";

const CardRate = ({ children }) => {
  return (
    <Rate>
      {children}
      <br />
      <StarContainer>
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
        <StarOutlineIcon />
      </StarContainer>
    </Rate>
  );
};

export default CardRate;
