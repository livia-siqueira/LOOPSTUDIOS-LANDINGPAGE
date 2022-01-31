import { url } from "inspector";
import styled from "styled-components";

interface Props {
  background: string;
}

export const Container = styled.div<Props>`
  background-image: url("${(props) => props.background}");
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  width: 250px;
  height: 28rem;

  @media screen and (max-width: 1000px) {
    display: flex;
    height: 10rem;
    gap: 280px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-variant: small-caps;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.main};
  margin-top: 100%;
  margin-left: 1rem;
  text-align: justify;
  max-width: 9rem;

  @media screen and (max-width: 1000px) {
    margin-top: 20%;
  }
`;
