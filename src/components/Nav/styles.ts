import styled from "styled-components";


export const Nav = styled.nav<{page: string}>`
    width: 100%;

    @media screen and (max-width:1000px){
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;