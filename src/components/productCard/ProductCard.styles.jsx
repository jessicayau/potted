import styled from "styled-components";
import Btn from "../btn/Btn";
import Heart from "../heart/Heart";


export const Card = styled.div`
    width: 100%;
    height: 19rem;
    position: relative;
    /* transition: all 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); */
    

    &:hover {

        button {
           display: block;
        }

        img {
            opacity: .8;
        }
    }

`

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    
`
export const CardContent = styled.div`
    padding: .5rem;
    height: 80%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #d7d5ee67;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    text-align: center;
    border-radius: 0.5rem;
    position: relative;
`


export const CardImage = styled.img`
    /* height: 90%; */
    height: 75%;
    width: 80%;
    position: absolute;
    left: 50%;
    /* top: -10%; */
    bottom: 27%;
    transform: translateX(-50%);
`

export const ViewButton = styled(Btn)`
    display: none;
    position: absolute;
    width: 70%;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    opacity: .9;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
`

export const HeartFilled = styled(Heart)`
    position: absolute;
    top: 25%;
    right: 5%;
`