import styled from "styled-components";

export const Content = styled.div`
  button {
    font-size: 1rem;
    position: absolute;
    top: 3rem;
    right: 1rem;
    color: #fff;
    background: var(--red);
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
      width: 100%;
      position: relative;
      margin-left: 5rem;
      top: 0rem;
      right: 0rem;
    }
  }
`;
