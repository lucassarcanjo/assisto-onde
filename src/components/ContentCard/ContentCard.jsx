import React from "react";

import CardRate from "../CardRate";

import {
  CardBox,
  CardPicture,
  CardFooter,
  ImdbRate,
  ShareButton,
  ShareIcon,
} from "./ContentCard.styled";

const ContentCard = () => {
  return (
    <CardBox>
      <CardPicture>
        <img src="https://images.justwatch.com/poster/174596723/s592" alt="" />
      </CardPicture>

      <CardFooter>
        <ImdbRate>
          <span>
            <b>8,6</b>/10
          </span>
        </ImdbRate>
        <ShareButton>
          <ShareIcon />
          Share
        </ShareButton>
        <CardRate>Avalie</CardRate>
      </CardFooter>
    </CardBox>
  );
};

export default ContentCard;
