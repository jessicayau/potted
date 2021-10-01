import styled from "styled-components";
    

export const PageContainer = styled.div`
    overflow-x: hidden;
`

export const FormsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    align-items: center;

    @media screen and (max-width: 767px) {
        padding: 1rem 0 2rem;
        grid-template-columns: 100% 100%;
        transform: ${props => props.activeForm === "right" ? "translateX(-100%)" : "translateX(0)"};
        transition: all .5s ease-in-out;
    }
`

export const Overlay = styled.div`
    position: absolute;
    background-image: url("/images/plants1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: white;
    left: 50%;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 50%;
    transform: ${props => props.activeForm === "right" ? "translateX(-100%)" : "translateX(0)"};
    transition: all .5s ease-in-out;

    @media screen and (max-width:767px) {
        display: none;
    }
`

export const SwitchFormsBtn = styled.span`
    margin-top: 1.5rem;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    display: inline-flex;

        &:hover {
            font-weight: 700;
        }
`