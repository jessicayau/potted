import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    gap: 1rem;
    padding: 0 1rem;
`

export const PhotoContainer = styled.div`
    height: 240px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: ${props => props.bgColor || '#cef0f581'};
    /* background-color: #cef0f581; */
    border-radius: .5rem;
`

export const GridPhoto = styled.img`
    height: 100%;
    position: absolute;
    bottom: -25%;
    left: 50%;
    transform: translateX(-50%);
`