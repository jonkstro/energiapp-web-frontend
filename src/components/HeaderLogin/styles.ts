import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    text-align: center;
    display: block;
  }

  button {
    font-size: 1.2rem;

    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.1);
    }

    @media (max-width: 600px) {
      margin-top: 3rem;
      width: 100%;
    }
  }

  div {
    align-items: center;
    text-align: center;
  }
  img {
    max-width: 8rem;
    max-height: 8rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--background);
  }

  p {
    color: var(--background);
  }
`;
