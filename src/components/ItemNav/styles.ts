import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.White};
    font-size: 1rem;
    font-family: ${({theme}) => theme.fonts.second};

    & + & {
        margin-left: 1.5rem;
    }

    @media screen and (max-width: 1000px) {
        & + & {
            margin-left: 0;
        }
    }
`