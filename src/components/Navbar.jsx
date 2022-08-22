import React from "react";
import styled from "styled-components";
// Assets
import { ReactComponent as Logo } from "../assets/img/logo.svg";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div>
        <a href="#" className="logo">
          <Logo />
        </a>
      </div>
      <NavbarListStyled>
        <li>
          <a href="#">CATALOGUE</a>
        </li>
        <li>
          <a href="#">FASHION</a>
        </li>
        <li>
          <a href="#">FAVOURITE</a>
        </li>
        <li>
          <a href="#">LIFESTYLE</a>
        </li>
        <li>
          <a href="#">SIGN UP</a>
        </li>
      </NavbarListStyled>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const NavbarListStyled = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
