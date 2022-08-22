import React from "react";
import Article from "./Article";
import data from "../data";
import styled from "styled-components";

export default function ArticleSelection() {
  console.log(data);
  return (
    <ArticleSelectionStyled>
      {data.map((article, index) => {
        return (
          <Article
            articleImageUrl={article.img}
            articleTitle={article.name}
            articlePrice={article.price}
            articleBrand={article.brand}
            articleSizeList={article.sizes}
            key={index}
          />
        );
      })}
    </ArticleSelectionStyled>
  );
}

const ArticleSelectionStyled = styled.div`
  margin: 8rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  padding: 0 3rem;
`;
