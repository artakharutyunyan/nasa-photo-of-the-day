import React from "react";
import "../../App.css";
import * as S from "./Navbar.styles";

import logo from "../../images/nasaLogo.svg";

export const Navbar = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return (
    <S.NavBarDiv>
      <S.NavSection>
        <img className="App-logo" src={logo} alt="nasaLogo" />
        <h1>Photo Of The Day</h1>
      </S.NavSection>
      <h3>Today's Date: {`${month}-${day}-${year}`}</h3>
    </S.NavBarDiv>
  );
};
