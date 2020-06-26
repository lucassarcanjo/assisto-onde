import styled from "styled-components";
import { Share } from "@styled-icons/entypo";

export const CardBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 312px;
  margin-bottom: 25px;
`;

export const CardPicture = styled.picture`
  margin-bottom: 22px;

  > img {
    width: 312px;
    height: auto;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  &:first-child {
    width: 100%;
  }
`;

export const ImdbRate = styled.div`
  > span {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;

    > b {
      font-family: "Montserrat", sans-serif;
      font-size: 36px;
    }
  }
`;

export const ShareButton = styled.a`
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
`;

export const ShareIcon = styled(Share)`
  width: 28px;
  padding-right: 5px;
`;
