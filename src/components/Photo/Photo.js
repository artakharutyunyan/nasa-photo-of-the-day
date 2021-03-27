import React from "react";

import * as S from "./Photo.styles";

import useRequest from "../../hooks/useRequest";
import { PhotoCard } from "../PhotoCard";
import { Navbar } from "../Navbar";

export const Photo = () => {
  const { data, loading, error } = useRequest(
    "https://api.nasa.gov/planetary/apod?api_key=63TvDOx8yHYctPzzK1X4abrDZ1Kb70Z62tzJw6xf"
  );

  if (loading)
    return (
      <S.LoadingDiv>
        <h1>Loading...</h1>
      </S.LoadingDiv>
    );
  if (error.error)
    return (
      <S.LoadingDiv>
        <h2>Oops! Something went wrong... {error.error.message}</h2>
      </S.LoadingDiv>
    );

  return (
    <S.PhotoDiv>
      <Navbar date={data.date} />
      <PhotoCard
        key={data.url}
        id={data.url}
        url={data.url}
        title={data.title}
        info={data.explanation}
        photo={data.url}
      />
    </S.PhotoDiv>
  );
};
