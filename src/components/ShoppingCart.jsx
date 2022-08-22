import React from "react";
import styled from "styled-components";
import { ReactComponent as ShoppingCard } from "../assets/img/shopping-cart.svg";

export default function ShoppingCart({ itemNumber }) {
  return (
    <ShoppingCartIcon>
      <ShoppingCardButton>
        <ShoppingCard style={{ height: "2.5rem", width: "2.5rem" }} />
      </ShoppingCardButton>
      <ItemNumber class="shoppingBagNumber">{itemNumber}</ItemNumber>
    </ShoppingCartIcon>
  );
}

const ShoppingCartIcon = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  border-radius: 10rem;
  background-color: rgb(255, 255, 156);
  display: grid;
  place-items: center;
`;

const ShoppingCardButton = styled.button`
  border: none;
  border-radius: 10rem;
  background-color: transparent;
`;

const ItemNumber = styled.h5`
  position: fixed;
  bottom: 5.25rem;
  right: 5.25rem;
  font-size: 1.25rem;
  color: black;
  background-color: rgb(213, 213, 23);
  border-radius: 10rem;
  height: 2.5rem;
  width: 2.5rem;
  text-align: center;
  display: grid;
  place-items: center;
`;
