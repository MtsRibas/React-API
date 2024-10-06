import styled from "styled-components";

export const ImgBanner = styled.img`
  display: flex;
  justify-content: center;
  width: 30%;
`;

export const DivBotao = styled.div`
  background-color: black;
  margin-top: -10px;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 43px;
`;

export const Botao = styled.button`
  color: white;
  padding: 1rem 3rem;
  border: 2px solid white;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #319956;
    border: 2px solid #319956;
  }
`;

export const ImgDestaque = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;
