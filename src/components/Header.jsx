import React from "react";
import styled from "styled-components";
// Assets
import { ReactComponent as HeaderImage } from "../assets/img/header-image.png";

export default function Header() {
  return (
    <HeaderShowCase>
      <ShowCaseInfo>
        <h1>
          <SpanStyled className="white">Let's</SpanStyled>
          Explore
          <SpanStyled className="yellow">Unique</SpanStyled>
          Shoes
        </h1>
        <h4>Live for Influential and Innovative fashion!</h4>
        <a href="#">Shop now</a>
      </ShowCaseInfo>
    </HeaderShowCase>
  );
}

const HeaderShowCase = styled.div`
  padding: 2.5rem;
  background-image: url(${require(`../assets/img/header-image.png`)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 100%;
  min-height: 50vh;
  border-radius: 2rem;
  margin-top: 2rem;
  margin: 2rem 3rem;
`;

const ShowCaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 2rem 3rem;
`;

const SpanStyled = styled.span`
  display: block;
`;
