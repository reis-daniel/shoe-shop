import React from "react";
import styled from "styled-components";

export default function Newsletter() {
  return (
    <NewsletterSection>
      <h2>
        Join shopping community to <span>get monthly promo</span>
      </h2>
      <p>Type your email down below and be young wild generation</p>
      <NewsletterForm>
        <EmailInput
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Add your email here"
        />
        <SubmitButton>Send</SubmitButton>
      </NewsletterForm>
    </NewsletterSection>
  );
}

const NewsletterSection = styled.section`
  height: 40vh;
  background-color: #e5c643;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  margin: 0;
  padding: 0;
  .hidden {
    display: none;
  }
  p,
  h2 {
    color: white;
  }
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.75rem;
  }
  span {
    display: block;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 4rem;
  width: 20rem;
  border-radius: 0.5rem;
  .invalid {
    background-color: rgb(245, 168, 168);
  }
`;

const EmailInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
`;
