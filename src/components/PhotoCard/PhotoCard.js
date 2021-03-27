import React from "react";

import * as S from "./PhotoCard.styles";

export const PhotoCard = (props) => {
  return (
    <S.PhotoCardDiv>
      <img alt="nasaPhoto" className="nasaPhoto" src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </S.PhotoCardDiv>
  );
};
