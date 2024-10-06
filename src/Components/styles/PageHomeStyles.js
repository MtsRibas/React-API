import React from "react";
import styled from "styled-components";
import Banner from "../imgs/BannerPrincipal2.svg";

export const TesteImagem = styled.div`
  background-image: url(${Banner});
  height: 610px;

  background-position: center;
`;

export const Teste1 = styled.div`
  background-color: black;
  margin-top: -10px;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 43px;
`;

export const Botao = styled.button`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;
