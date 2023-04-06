import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 70px;
  right: 50px;
  z-index: 99;

  button {
    border: 0;
    background-color: #ffb800;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 1.2rem;
    filter: drop-shadow(2px 1px 5px rgba(0, 0, 0, 0.2));
    transition: all 0.2s;
  }

  button:hover {
    transform: scale(1.2);
  }
`;
