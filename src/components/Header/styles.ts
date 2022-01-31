import styled from "styled-components";

export const Container = styled.header`
  height: 30rem;
  width: 100%;
  background-image: url(images/desktop/image-hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  gap: 6rem;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    gap: 20%;
    align-items: left;
    height: 50rem;
    background-position: center;
  }
`;

export const Menu = styled.button`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
    background-color: transparent;
    border:0;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  padding-top: 3rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.second};
  @media screen and (max-width: 1000px) {
    text-align: left;
    font-size: 2rem;
  }
`;

export const MenuResposive = styled.div`
  position: absolute;
  background-color: black;
  padding: 2px 23px;
  top: 90px;
  right:50px;
 
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: lighter;
  font-variant: small-caps;
  font-size: 4rem;
  border: 2px solid ${({ theme }) => theme.colors.White};
  width: 25rem;

  @media screen and (max-width: 1000px) {
    width: 19rem;
  }
`;

export const Description = styled.div`
  width: 60%;
  margin-left: 8rem;

  @media screen and (max-width: 1000px) {
    margin-left: 2rem;
  }
`;
