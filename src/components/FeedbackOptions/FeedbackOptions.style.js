import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`

export const Btn = styled.button`
  padding: 15px 10px;
  background-color: ${props => props.grade === "good" ? "green" : props.grade === "neutral" ? "gray" : props.grade === "bad" ? "red" : ""};
  text-transform: capitalize;
  border: none;
  border-radius: 4px;
`;