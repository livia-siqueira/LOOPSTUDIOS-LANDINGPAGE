import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.Black};
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    height: 20rem;
    padding-bottom: 3rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.second};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const NavIcons = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

export const ContentSocialMedia = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: right;
  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    gap:10px;
  }
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.colors.Very_Dark_Gray};
  font-size: 1rem;
`;

export const ContentInfos = styled.div`
  margin-bottom: 30px;
`;
