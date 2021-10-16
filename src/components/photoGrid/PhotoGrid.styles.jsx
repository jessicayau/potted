import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    gap: 0.5rem;
    animation: fade 250ms ease-out;
`;

export const PhotoContainer = styled.div`
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #a0cfb05c;
    border-radius: 0.5rem;

    &:nth-child(odd) {
        background-color: #cef0f581;
    }
`;

export const GridPhoto = styled.img`
    height: 100%;
    position: absolute;
    bottom: -25%;
    left: 50%;
    transform: translateX(-50%);
`;
