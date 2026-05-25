import styled from "styled-components";

export const Summary = styled.p`
  text-decoration: underline;
  font-weight: 600;
`

export const Percentage = styled.p`
  /* background-color: lightblue; */
  color: ${props => props.num >= 50 ? "green" : props.num >= 30 ? "gray" : "red"};
  font-weight: 700;
`;