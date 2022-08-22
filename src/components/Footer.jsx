import React from "react";
import styled from "styled-components";
import { ReactComponent as FacebookImg } from "../assets/img/facebook.svg";
import { ReactComponent as InstagramImg } from "../assets/img/instagram.svg";
import { ReactComponent as TwitterImg } from "../assets/img/twitter.svg";
import { ReactComponent as LinkedInImg } from "../assets/img/linkedin.svg";

export default function Footer() {
  return (
    <FooterStyled class="footer">
      <SocialMediaTile class="socialmedia-tile">
        <h3>Fashion</h3>
        <p>Complete your style with awesome clothes from us.</p>
        <SocialMediaContainer class="socialmedia-container">
          <SocialMediaLink href="#">
            <FacebookImg />
          </SocialMediaLink>
          <SocialMediaLink href="#">
            <InstagramImg />
          </SocialMediaLink>
          <SocialMediaLink href="#">
            <TwitterImg />
          </SocialMediaLink>
          <SocialMediaLink href="#">
            <LinkedInImg />
          </SocialMediaLink>
        </SocialMediaContainer>
      </SocialMediaTile>
      <AboutSection class="about-section">
        <AboutTile class="about-tile">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <a href="#">Support</a>
          <a href="#">Careers</a>
        </AboutTile>
        <AboutTile class="about-tile">
          <h4>Quick Link</h4>
          <a href="#">Share Location</a>
          <a href="#">Orders Tracking</a>
          <a href="#">Size Guide</a>
          <a href="#">FAQs</a>
        </AboutTile>
        <AboutTile class="about-tile">
          <h4>Legal</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </AboutTile>
      </AboutSection>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  padding: 0 3rem;
  background-color: black;
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.5rem;
    color: #7f7f7f;
  }
`;

const SocialMediaTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div {
    display: flex;
    gap: 1rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialMediaLink = styled.a`
  background-color: #ebd96b;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
`;

const AboutSection = styled.div`
  display: flex;
  gap: 5rem;
`;

const AboutTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
  a {
    text-decoration: none;
    color: #8e8e8e;
  }
  h4 {
    font-size: 1.5rem;
  }
`;
