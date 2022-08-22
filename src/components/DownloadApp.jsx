import React from "react";
import styled from "styled-components";

export default function DownloadApp() {
  return (
    <DownloadSection>
      <AppInformation>
        <h2>
          Download APP<span>Get the voucher!</span>
        </h2>
        <p>
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div>
          <a href="#">
            <AppDownloadImage
              src={require("../assets/img/app-store.png")}
              alt="apple appstore"
            />
          </a>
          <a href="">
            <AppDownloadImage
              src={require("../assets/img/google-play.png")}
              alt="android google playstore"
            />
          </a>
        </div>
      </AppInformation>
      <AppPreviewImage src={require("../assets/img/app.png")} alt="test" />
    </DownloadSection>
  );
}

const DownloadSection = styled.section`
  margin: 6rem 0;
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

const AppInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 60%;
  margin-left: 4rem;
  h2 {
    font-size: 4rem;
    text-transform: uppercase;
  }
  span {
    display: block;
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #7f7f7f;
    line-height: 2rem;
    letter-spacing: -0.04rem;
  }
`;

const AppPreviewImage = styled.img`
  object-fit: contain;
  object-position: center;
  height: 100%;
  width: 100%;
`;

const AppDownloadImage = styled.img`
  object-fit: contain;
  object-position: center;
  height: 3rem;
  width: auto;
  margin-right: 1rem;
`;
