import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  width: 30%;
  background-color: ${({ theme }) => theme.colors.White};
  position: absolute;
  top: 850px;
  right: 10%;
  padding: 5rem;
  padding-right: 0;
  padding-bottom: 0;

  @media screen and (max-width: 1000px) {
    position: initial;
    width: 80%;
    padding: 0;
    padding-top: 5rem;
  }
`;

export const Button = styled.button`
  background: transparent;
  width: 10rem;
  padding: 0rem 2rem 0rem 2rem;
  font-family: ${({ theme }) => theme.fonts.second};
  font-variant: small-caps;
  font-size: 1.3rem;
  height: 60%;
  letter-spacing: 2px;
  margin-right: 1rem;

  @media screen and (max-width: 1000px) {
    position: absolute;
    height: 3rem;
    top: 3000px;
}
`;
export const HeaderCreations = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DetailsImage = styled.div`
  width: 80%;
  display: flex;
  margin: 3rem auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: lighter;
  font-variant: small-caps;
  text-align: center;
  font-size: 2.5rem;
`;

export const OurCreations = styled.div`
  width: 80%;
  margin: 5rem auto;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const ContainerItensCreations = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 28px;
  }
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: lighter;
  text-align: justify;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;
export const Image = styled.img`
  width: 80%;
  height: 60%;
`;
