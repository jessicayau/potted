import styled from "styled-components";

export const ContactContainer = styled.div`
    padding: 10%;
    display: grid;
    

    @media screen and (min-width:768px) {
        padding: 5% 15%;
    }

    @media screen and (min-width:1024px) {
        padding: 5% 10%;
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
    }
`

export const ContentWrapper = styled.div`
    padding: 5% 0;
    position: relative;

    @media screen and (min-width: 1024px) {
       &::before {
            content: '';
            position: absolute;
            height: 100%;
            left: 0;
            right: 0;
            bottom: -25%;
            opacity: 1;
            background-image: url("/images/succulents.png");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        } 
    }
    
`

export const ContentTitle = styled.h1`

    @media screen and (min-width: 768px) {
        font-size: 4vw;
        padding-bottom: 1rem;
    }
`

export const ContentText = styled.p`
    margin-top: 1rem;
`

export const FormContainer = styled.div`
    padding: 5% 0;
`

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 200px;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.125rem;
    color: black;
    line-height: normal;
    display: inline-block;
    text-align: start;
    background-color: white;
    margin: 1rem 0 1.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    padding: .5rem;
    position: relative;

    &:focus {
        outline: none;
    }
`

export const TextAreaLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
`