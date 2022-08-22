import React from "react";
import styled from "styled-components";
import { ReactComponent as DropDownButton } from "../assets/img/arrow.svg";

export default function Article({
  articleImageUrl,
  articleTitle,
  articlePrice,
  articleBrand,
  articleSizeList,
}) {
  return (
    <ArticleTile>
      <ArticleImage src={articleImageUrl} alt="article image" />
      <ArticleDetails>
        <Headline>
          <h2>{articleTitle}</h2>
          <button>+</button>
        </Headline>
        <Price>
          <h3>{articlePrice}</h3>
          <DropDownButton />
        </Price>
        <DetailSizeBrand>
          <h3>{articleBrand}</h3>
          <SizeList>
            {articleSizeList.map((size) => {
              return (
                <li>
                  <SizeButton>{size}</SizeButton>
                </li>
              );
            })}
          </SizeList>
        </DetailSizeBrand>
      </ArticleDetails>
    </ArticleTile>
  );
}

const ArticleTile = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

const ArticleImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: 50rem;
  width: 100%;
  border-radius: 1.5rem;
`;

const ArticleDetails = styled.div`
  font-size: 1.5rem;
  color: #7f7f7f;
  letter-spacing: -0.04rem;
  h2 {
    color: black;
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

const Headline = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const DetailSizeBrand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.5rem;
`;

const SizeList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
  li {
  }
`;

const SizeButton = styled.button`
  background-color: transparent;
  border: none;
  color: #7f7f7f;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #686868;
  }
`;
