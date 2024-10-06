import styled from "styled-components";
export const Teste = styled.div`
  background-color: #1a1a1a;
  display: grid;
  grid-template-columns: repeat(4, 18rem);
  gap: 30px;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  color: #ffffff;
  padding: 10px;
`;

export const P = styled.a`
  color: #aeaeae;
  text-decoration: underline;
  /* font-size: 10px; */
  display: flex;
  flex-direction: row;
  font-size: 10px;
  cursor: pointer;
  padding: 10px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Div2 = styled.div`
  display: flex;
  gap: 10px;

  margin-right: 40px;
  align-items: center;
`;

export const CharacterName = styled.p`
  margin: 0;
  color: #ffffff;
`;

export const CharacterStatus = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.status === "Alive") return "green";
    if (props.status === "Dead") return "red";
    return "gray";
  }};
  margin-right: 5px;
`;